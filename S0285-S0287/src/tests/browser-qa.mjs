// Dependency-free local Chrome smoke test. No production dependencies.
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const baseURL = process.env.QA_BASE_URL || 'http://127.0.0.1:8000';
const output = fileURLToPath(new URL('./screenshots/', import.meta.url));
await mkdir(output, { recursive: true });
const profile = await mkdtemp(join(tmpdir(), 'gascolae-browser-'));
const chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'
], { stdio: 'ignore', windowsHide: true });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let socket;
let sequence = 0;
const pending = new Map();
const errors = [];
const report = [];
function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`Timeout: ${method}`)); }, 20000);
    pending.set(id, { resolve: result => { clearTimeout(timer); resolve(result); }, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
async function waitFor(expression) {
  for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await delay(100); }
  throw new Error(`Condition failed: ${expression}`);
}
async function navigate() {
  await send('Page.navigate', { url: `${baseURL}/` });
  await waitFor('document.readyState === "complete" && !!document.querySelector("#hero")');
  await evaluate('document.fonts.ready.then(() => true)');
}
async function click(selector) {
  const point = await evaluate(`(() => { const e=document.querySelector(${JSON.stringify(selector)}); e.scrollIntoView({block:'center',behavior:'instant'}); const r=e.getBoundingClientRect(); return {x:r.x+r.width/2,y:r.y+r.height/2}; })()`);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', button: 'left', clickCount: 1, ...point });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', button: 'left', clickCount: 1, ...point });
}
async function screenshot(name, full = false) {
  const metrics = await send('Page.getLayoutMetrics');
  const params = { format: 'png', captureBeyondViewport: full };
  if (full) params.clip = { x: 0, y: 0, width: metrics.cssContentSize.width, height: metrics.cssContentSize.height, scale: 1 };
  const image = await send('Page.captureScreenshot', params);
  await writeFile(join(output, `${name}.png`), Buffer.from(image.data, 'base64'));
}
try {
  let port;
  for (let i=0;i<100;i++) {
    try { port = (await readFile(join(profile,'DevToolsActivePort'),'utf8')).split('\n')[0]; break; } catch { await delay(100); }
  }
  assert(port, 'Chrome did not start');
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  socket = new WebSocket(tabs.find(tab => tab.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen=resolve; socket.onerror=reject; });
  socket.onmessage = ({ data }) => {
    const message=JSON.parse(data);
    if (message.id) {
      const promise=pending.get(message.id); pending.delete(message.id);
      if (message.error) promise?.reject(new Error(JSON.stringify(message.error))); else promise?.resolve(message.result);
    } else if (message.method==='Runtime.exceptionThrown') errors.push(message.params.exceptionDetails);
  };
  await send('Page.enable'); await send('Runtime.enable'); await send('Network.enable');
  for (const [width,height] of [[360,800],[768,1024],[1024,900],[1440,1000]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
    await navigate();
    await evaluate('document.querySelector("#hero-video").pause()');
    const geometry=await evaluate(`(() => ({ width:innerWidth,scroll:document.documentElement.scrollWidth,overflows:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width && (r.right>innerWidth+1 || r.left< -1)}).map(e=>e.tagName+'.'+e.className),h1:document.querySelectorAll('h1').length,sections:document.querySelectorAll('main>section').length,brokenLinks:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash) }))()`);
    assert(geometry.scroll<=width,`${width}: horizontal overflow`);
    assert.deepEqual(geometry.overflows,[],`${width}: overflowing element`);
    assert.equal(geometry.h1,1); assert.equal(geometry.sections,13); assert.deepEqual(geometry.brokenLinks,[]);
    // Trigger lazy image loading, then return to the hero for the screenshot.
    await evaluate(`Promise.all([...document.images].map(i=>{i.loading='eager'; return i.decode().catch(()=>{});})).then(()=>true)`);
    assert.deepEqual(await evaluate(`[...document.images].filter(i=>!i.complete || !i.naturalWidth).map(i=>i.src)`),[]);
    await evaluate('scrollTo({top:0,behavior:"instant"})');
    await screenshot(`viewport-${width}`);
    await screenshot(`full-${width}`,true);
    report.push({viewport:width,...geometry});
  }
  await click('#faq-question-2');
  assert.equal(await evaluate('document.querySelector("#faq-question-2").getAttribute("aria-expanded")'),'true');
  await click('#faq-question-2');
  assert.equal(await evaluate('document.querySelector("#faq-answer-2").hidden'),true);
  await evaluate('document.querySelector("#faq-question-2").focus()');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  assert.equal(await evaluate('document.querySelector("#faq-question-2").getAttribute("aria-expanded")'),'true');
  await click('[data-answer="mrv"]');
  assert.match(await evaluate('document.querySelector("#assistant-answer").textContent'),/^Không\./);
  await click('[data-level="Level 3"]');
  assert.equal(await evaluate('document.querySelector("#level").value'),'Level 3');
  await click('.form-submit');
  assert.equal(await evaluate('document.querySelectorAll("[aria-invalid=true]").length'),7);
  await evaluate(`(() => { const values={'full-name':'Người kiểm thử','organization':'Đơn vị kiểm thử','phone':'0901234567','email':'qa@example.com','location':'Khu rừng kiểm thử','area':'500','goal':'Lập dự án carbon'}; for(const [id,value] of Object.entries(values)){const e=document.getElementById(id);e.value=value;e.dispatchEvent(new Event('input',{bubbles:true}));} })()`);
  await click('.form-submit');
  assert.match(await evaluate('document.querySelector("#form-status").textContent'),/chưa được gửi/);
  assert.equal(await evaluate('document.querySelectorAll("[aria-invalid=true]").length'),0);
  await screenshot('form-validation');
  await evaluate('document.querySelector("#email").value="invalid"; document.querySelector("#phone").value="abc"; document.querySelector("#area").value="-1"');
  await click('.form-submit');
  assert.equal(await evaluate('document.querySelectorAll("[aria-invalid=true]").length'),3);
  await send('Emulation.setDeviceMetricsOverride',{width:360,height:800,deviceScaleFactor:1,mobile:false});
  await waitFor('!document.querySelector(".menu-toggle").hidden');
  await evaluate('scrollTo({top:0,behavior:"instant"})');
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  await click('.menu-toggle');
  assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'),'true');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'),'false');
  assert.equal(await evaluate('document.activeElement.className'),'menu-toggle');
  await click('.menu-toggle'); await click('.hero h1');
  assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'),'false');
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await navigate();
  assert.equal(await evaluate('document.querySelector("#hero-video").getAttribute("src")'),null);
  assert.equal(await evaluate('document.querySelector("#video-toggle").hidden'),true);
  report.push({reducedMotion:'PASS',faq:'PASS',assistant:'PASS',packageSelection:'PASS',form:'PASS',mobileMenu:'PASS'});
  await send('Emulation.setScriptExecutionDisabled',{value:true});
  await navigate();
  assert.equal(await evaluate('[...document.querySelectorAll(".faq-item [role=region]")].every(e=>!e.hidden)'),true);
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#main-nav")).display'),'flex');
  assert.equal(await evaluate('document.querySelector(".form-submit").disabled'),true);
  await screenshot('no-javascript-mobile');
  await send('Emulation.setScriptExecutionDisabled',{value:false});
  await send('Emulation.setEmulatedMedia',{features:[]});
  const saveDataScript=await send('Page.addScriptToEvaluateOnNewDocument',{source:'Object.defineProperty(navigator,"connection",{value:{saveData:true,addEventListener(){}}})'});
  await navigate();
  assert.equal(await evaluate('document.querySelector("#hero-video").getAttribute("src")'),null);
  assert.equal(await evaluate('document.querySelector("#video-toggle").hidden'),true);
  await send('Page.removeScriptToEvaluateOnNewDocument',{identifier:saveDataScript.identifier});
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await navigate();
  await waitFor('document.querySelector("#hero-video").readyState >= 2');
  await click('#video-toggle');
  if(await evaluate('document.querySelector("#hero-video").paused')) await click('#video-toggle');
  await waitFor('!document.querySelector("#hero-video").paused');
  await evaluate('scrollTo({top:0,behavior:"instant"})');
  await screenshot('video-playing-desktop');
  await evaluate('document.querySelector("#contact").scrollIntoView({behavior:"instant"})');
  await waitFor('document.querySelector("#hero-video").paused');
  await send('Network.setBlockedURLs',{urls:['*assets/video/*']});
  await navigate();
  await delay(500);
  assert.equal(await evaluate('document.querySelector(".hero-media img").naturalWidth > 0'),true);
  await screenshot('video-fallback-desktop');
  for(const path of ['/assets/data/S0285-S0287_07_Service_Pricing.xlsx','/assets/SOURCE/','/docs/','/assets/images/']) {
    assert.equal((await fetch(`${baseURL}${path}`)).status,404);
  }
  report.push({keyboardFAQ:'PASS',invalidFieldFormats:'PASS',saveData:'PASS',noJavaScript:'PASS',videoPlayback:'PASS',videoOffscreenPause:'PASS',videoFallback:'PASS',privateSources:'PASS',runtimeErrors:errors});
  assert.deepEqual(errors,[]);
  await writeFile(join(output,'qa-results.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
} finally {
  if (socket?.readyState===WebSocket.OPEN) { try { await send('Browser.close'); } catch {} socket.close(); }
  chrome.kill();
}
