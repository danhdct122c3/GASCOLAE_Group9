import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const code = await readFile(new URL('../src/hero.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const flush = async () => { for (let i = 0; i < 8; i++) await Promise.resolve(); };

function element() {
  const events = new Map(), attrs = new Map(), classes = new Set();
  return {
    hidden: false, dataset: {}, textContent: '',
    addEventListener(name, fn) { if (!events.has(name)) events.set(name, new Set()); events.get(name).add(fn); },
    removeEventListener(name, fn) { events.get(name)?.delete(fn); },
    emit(name, event = {}) { for (const fn of [...(events.get(name) || [])]) fn(event); },
    setAttribute(name, value) { attrs.set(name, value); },
    getAttribute(name) { return attrs.get(name); },
    classList: { toggle(name, on) { if (on) classes.add(name); else classes.delete(name); }, contains(name) { return classes.has(name); } }
  };
}

function harness({ reduced = false, delayed = false, loaded = true } = {}) {
  let now = 0, serial = 0, intersection;
  const timers = new Map();
  const header = element(), hero = element(), controls = element(), play = element(), status = element();
  const images = Array.from({ length: 3 }, (_, i) => Object.assign(element(), {
    complete: !delayed || i === 0, naturalWidth: delayed && i > 0 ? 0 : 1024,
    dataset: i ? { src: `image-${i}.webp`, srcset: `image-${i}-small.webp 640w` } : {},
    decode: () => Promise.resolve()
  }));
  const scenes = images.map((img, i) => {
    const scene = element(); scene.querySelector = () => img;
    scene.classList.toggle('is-active', i === 0); return scene;
  });
  const buttons = scenes.map((_, i) => { const button = element(); button.textContent = `Scene ${i}`; return button; });
  hero.querySelectorAll = selector => selector === '.hero-scene' ? scenes : buttons;
  hero.querySelector = selector => ({ '.hero-controls': controls, '.hero-play': play, '.hero-status': status })[selector];
  const document = Object.assign(element(), {
    hidden: false, readyState: loaded ? 'complete' : 'loading',
    querySelector: selector => selector === '.header' ? header : hero
  });
  const motion = Object.assign(element(), { matches: reduced });
  const window = Object.assign(element(), { scrollY: 0, matchMedia: () => motion, IntersectionObserver: true });
  vm.runInNewContext(code, {
    document, window, Date: { now: () => now },
    setTimeout(fn, delay) { const id = ++serial; timers.set(id, { fn, at: now + delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
    IntersectionObserver: class { constructor(fn) { intersection = fn; } observe() {} }
  });
  return {
    hero, header, controls, play, status, images, scenes, buttons, document, window, motion, timers,
    active: () => scenes.findIndex(scene => scene.classList.contains('is-active')),
    intersect: value => intersection([{ isIntersecting: value }]),
    async advance(ms) {
      now += ms;
      for (const [id, task] of [...timers]) if (task.at <= now) { timers.delete(id); task.fn(); }
      await flush();
    }
  };
}

test('hero markup keeps one heading, static fallback, labeled controls and a single priority image', () => {
  assert.equal([...html.matchAll(/fetchpriority="high"/g)].length, 1);
  assert.equal([...html.matchAll(/class="hero-scene(?: is-active)?"/g)].length, 3);
  assert.equal([...html.matchAll(/class="hero-selector(?: is-active)?"/g)].length, 3);
  assert.match(html, /class="hero-controls" hidden/);
  assert.match(html, /Thấy khác biệt\.<br>Hiểu sâu hơn\./);
  assert.doesNotMatch(html, /H\?nh|T\?m|class="service-tag"|<video/);
});

test('autoplay advances every six seconds, loops, and exposes only the current scene', async () => {
  const h = harness(); await flush();
  await h.advance(5999); assert.equal(h.active(), 0);
  await h.advance(1); assert.equal(h.active(), 1);
  assert.equal(h.scenes[0].getAttribute('aria-hidden'), 'true');
  assert.equal(h.buttons[1].getAttribute('aria-current'), 'true');
  await h.advance(6000); assert.equal(h.active(), 2);
  await h.advance(6000); assert.equal(h.active(), 0);
});

test('hover, hidden tab and offscreen hero suspend the clock without losing remaining time', async () => {
  const h = harness(); await flush(); await h.advance(2000);
  h.hero.emit('pointerenter', { pointerType: 'mouse' });
  await h.advance(10000); assert.equal(h.active(), 0);
  h.hero.emit('pointerleave', { pointerType: 'mouse' });
  await h.advance(3999); assert.equal(h.active(), 0);
  await h.advance(1); assert.equal(h.active(), 1);
  h.document.hidden = true; h.document.emit('visibilitychange');
  assert.equal(h.timers.size, 0);
  h.document.hidden = false; h.document.emit('visibilitychange');
  h.intersect(false); assert.equal(h.timers.size, 0);
  h.intersect(true); assert.equal(h.timers.size, 1);
});

test('focus and manual selection stop autoplay until play; clicking pause survives focus ordering', async () => {
  const h = harness(); await flush();
  h.play.emit('pointerdown'); h.hero.emit('focusin'); h.play.emit('click');
  assert.equal(h.timers.size, 0);
  h.play.emit('click'); assert.equal(h.timers.size, 1);
  h.hero.emit('focusin'); assert.equal(h.timers.size, 0);
  h.buttons[2].emit('click'); await flush(); assert.equal(h.active(), 2);
  await h.advance(9000); assert.equal(h.active(), 2);
  h.play.emit('click'); await h.advance(6000); assert.equal(h.active(), 0);
});

test('reduced motion disables autoplay while preserving manual selection and responds to preference changes', async () => {
  const h = harness({ reduced: true }); await flush();
  assert.equal(h.timers.size, 0); assert.equal(h.play.hidden, true);
  h.buttons[1].emit('click'); await flush(); assert.equal(h.active(), 1);
  const normal = harness(); await flush();
  normal.motion.matches = true; normal.motion.emit('change');
  assert.equal(normal.timers.size, 0);
});

test('next images wait for page load, slow images keep the current frame, failures do not fade to blank', async () => {
  const h = harness({ delayed: true, loaded: false });
  assert.equal(h.images[1].src, undefined);
  h.window.emit('load'); await flush();
  assert.equal(h.images[1].src, 'image-1.webp');
  await h.advance(6000); assert.equal(h.active(), 0);
  h.images[1].naturalWidth = 1024; h.images[1].emit('load'); await flush();
  assert.equal(h.active(), 1);
  h.buttons[2].emit('click'); h.images[2].emit('error'); await flush();
  assert.equal(h.active(), 1); assert.equal(h.timers.size, 0);
  assert.match(h.status.textContent, /Ảnh chưa tải được/);
});

test('newer selection wins while an earlier image is still loading', async () => {
  const h = harness({ delayed: true });
  h.buttons[1].emit('click'); h.buttons[2].emit('click');
  h.images[2].naturalWidth = 1024; h.images[2].emit('load'); await flush();
  h.images[1].naturalWidth = 1024; h.images[1].emit('load'); await flush();
  assert.equal(h.active(), 2);
});

test('horizontal touch swipe changes scenes; vertical scrolling and canceled gestures do not', async () => {
  const h = harness(); await flush();
  const down = { pointerType: 'touch', pointerId: 1, clientX: 200, clientY: 100, target: { closest: () => null } };
  h.hero.emit('pointerdown', down);
  h.hero.emit('pointerup', { pointerId: 1, clientX: 120, clientY: 105 }); await flush();
  assert.equal(h.active(), 1); assert.equal(h.timers.size, 0);
  h.hero.emit('pointerdown', down);
  h.hero.emit('pointerup', { pointerId: 1, clientX: 190, clientY: 200 }); await flush();
  assert.equal(h.active(), 1);
  h.hero.emit('pointerdown', down); h.hero.emit('pointercancel');
  h.hero.emit('pointerup', { pointerId: 1, clientX: 100, clientY: 100 }); await flush();
  assert.equal(h.active(), 1);
});

test('header switches background past 32px and restores its transparent state at the top', () => {
  const h = harness();
  h.window.scrollY = 32; h.window.emit('scroll'); assert.equal(h.header.classList.contains('is-scrolled'), false);
  h.window.scrollY = 33; h.window.emit('scroll'); assert.equal(h.header.classList.contains('is-scrolled'), true);
  h.window.scrollY = 0; h.window.emit('scroll'); assert.equal(h.header.classList.contains('is-scrolled'), false);
});
