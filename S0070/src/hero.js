// Local image carousel. Content and navigation remain usable without this enhancement.
(() => {
  const header = document.querySelector('.header');
  if (header) {
    const syncHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 32);
    window.addEventListener('scroll', syncHeader, { passive: true });
    syncHeader();
  }
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const scenes = [...hero.querySelectorAll('.hero-scene')];
  const buttons = [...hero.querySelectorAll('.hero-selector')];
  const controls = hero.querySelector('.hero-controls');
  const play = hero.querySelector('.hero-play');
  const status = hero.querySelector('.hero-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 6000;
  let active = 0, timer = null, started = 0, remaining = duration, request = 0;
  let manual = motion.matches, hovering = false, visible = true, prepared = false;
  const pending = new Map();
  const canRun = () => prepared && !manual && !motion.matches && !hovering && visible && !document.hidden;

  function prepare(index) {
    if (pending.has(index)) return pending.get(index);
    const img = scenes[index].querySelector('img');
    const ready = new Promise(resolve => {
      let settled = false;
      const finish = async () => {
        if (settled) return;
        settled = true;
        img.removeEventListener('load', finish);
        img.removeEventListener('error', finish);
        try { if (img.naturalWidth) await img.decode(); } catch { /* A loaded image can still render. */ }
        resolve(img.naturalWidth > 0);
      };
      img.addEventListener('load', finish);
      img.addEventListener('error', finish);
      if (img.dataset.src) {
        img.srcset = img.dataset.srcset;
        img.src = img.dataset.src;
        delete img.dataset.src;
      }
      if (img.complete) finish();
    });
    pending.set(index, ready);
    return ready;
  }

  function stopClock() {
    if (timer !== null) {
      clearTimeout(timer);
      remaining = Math.max(0, remaining - (Date.now() - started));
      timer = null;
    }
  }

  function sync() {
    stopClock();
    const running = canRun();
    hero.classList.toggle('is-playing', running);
    hero.classList.toggle('is-manual', manual || motion.matches);
    play.textContent = manual ? 'Phát' : 'Tạm dừng';
    play.setAttribute('aria-label', manual ? 'Phát trình chiếu' : 'Tạm dừng trình chiếu');
    play.hidden = motion.matches;
    if (running) {
      started = Date.now();
      timer = setTimeout(() => {
        timer = null;
        remaining = 0;
        change((active + 1) % scenes.length, true);
      }, remaining);
    }
  }

  async function change(index, automatic = false) {
    const ticket = ++request;
    if (!automatic) { manual = true; sync(); }
    const ready = await prepare(index);
    if (ticket !== request || (automatic && !canRun())) return;
    if (!ready) {
      // Keep the last successful frame; never fade to an empty image.
      manual = true;
      status.textContent = 'Ảnh chưa tải được. Bạn có thể chọn cảnh khác.';
      sync();
      return;
    }
    stopClock();
    scenes.forEach((scene, i) => {
      scene.classList.toggle('is-active', i === index);
      scene.setAttribute('aria-hidden', String(i !== index));
      buttons[i].classList.toggle('is-active', i === index);
      buttons[i].setAttribute('aria-current', String(i === index));
    });
    active = index;
    remaining = duration;
    if (!automatic) status.textContent = `Cảnh ${index + 1} / ${scenes.length}: ${buttons[index].textContent.trim()}`;
    sync();
  }

  controls.hidden = false;
  buttons.forEach((button, i) => button.addEventListener('click', () => change(i)));
  let pointerIntent = null;
  play.addEventListener('pointerdown', () => { pointerIntent = !manual; });
  play.addEventListener('pointercancel', () => { pointerIntent = null; });
  play.addEventListener('click', () => {
    manual = pointerIntent ?? !manual;
    pointerIntent = null;
    if (!manual) remaining = duration;
    sync();
  });
  hero.addEventListener('focusin', () => { manual = true; sync(); });
  hero.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; sync(); }
  });
  hero.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { hovering = false; sync(); }
  });
  let gesture = null;
  hero.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch' && !event.target.closest('a, button')) {
      gesture = { x: event.clientX, y: event.clientY, id: event.pointerId };
    }
  });
  hero.addEventListener('pointercancel', () => { gesture = null; });
  hero.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      change((active + (dx < 0 ? 1 : scenes.length - 1)) % scenes.length);
    }
  });
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', () => { if (motion.matches) manual = true; sync(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    });
    observer.observe(hero);
  }
  const start = () => {
    prepared = true;
    scenes.forEach((_, i) => prepare(i));
    sync();
  };
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
  sync();
})();
