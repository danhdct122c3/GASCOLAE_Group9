'use strict';

document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const menu = document.querySelector('#main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const mobileQuery = matchMedia('(max-width: 899px)');
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');

function closeMenu(restoreFocus = false) {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuToggle.focus();
}
menuToggle.hidden = !mobileQuery.matches;
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
header.addEventListener('focusout', event => {
  if (event.relatedTarget && !header.contains(event.relatedTarget)) closeMenu();
});
mobileQuery.addEventListener('change', () => {
  if (!mobileQuery.matches && document.activeElement === menuToggle) menu.querySelector('a').focus();
  if (mobileQuery.matches && menu.contains(document.activeElement)) menuToggle.focus();
  closeMenu();
  menuToggle.hidden = !mobileQuery.matches;
});
const syncHeader = () => header.classList.toggle('is-scrolled', scrollY > 12);
addEventListener('scroll', syncHeader, { passive: true });
syncHeader();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (link.dataset.level) document.querySelector('#level').value = link.dataset.level;
    closeMenu();
    target.scrollIntoView({ behavior: motionQuery.matches ? 'instant' : 'smooth', block: 'start' });
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    history.replaceState(null, '', link.hash);
  });
});

document.querySelectorAll('.faq-item button').forEach((button, index) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  const update = expanded => {
    button.setAttribute('aria-expanded', String(expanded));
    button.querySelector('span').textContent = expanded ? '−' : '+';
    panel.hidden = !expanded;
  };
  update(index === 0);
  button.addEventListener('click', () => update(button.getAttribute('aria-expanded') !== 'true'));
});

// Public, reviewed copy only. No private source documents or pricing are loaded.
const answers = Object.freeze({
  overview: 'Dịch vụ kết hợp UAV LiDAR, RGB hoặc đa phổ và ô tiêu chuẩn mặt đất để hiệu chuẩn phương trình allometric, ước tính sinh khối trên mặt đất (AGB) và lập bản đồ trữ lượng carbon theo lô kèm bảng sai số.\n\nNội dung tham chiếu: Knowledge Base và Service Profile S0285–S0287.',
  levels: 'Level 1: bản đồ carbon nền một kỳ, LiDAR + RGB, DTM/DSM/CHM và bảng sai số.\nLevel 2: bổ sung đa phổ, lớp cây đơn lẻ và phân tầng rừng.\nLevel 3: toàn bộ Level 2, bay lặp để phân tích biến động và dashboard GIS; chu kỳ khuyến nghị từ 2–3 năm trở lên.\n\nCả ba Level đều cần đo ô tiêu chuẩn. Cấu hình và báo giá cụ thể cần chuyên viên xác nhận.',
  ground: 'LiDAR đo cấu trúc đứng của tán rừng nhưng không đo trực tiếp đường kính ngang ngực D1.3 dưới tán. Vì vậy, mọi Level đều cần dữ liệu ô tiêu chuẩn mặt đất để hiệu chuẩn mô hình sinh khối và đánh giá sai số.\n\nNội dung tham chiếu: Knowledge Base mục 5.1 và Service Profile mục 10.',
  mrv: 'Không. Bản đồ và báo cáo là dữ liệu kỹ thuật đầu vào, có thể chuyển tiếp cho đơn vị lập hồ sơ MRV. Kết quả không thay thế báo cáo MRV hoặc thẩm định độc lập, và không bảo đảm việc cấp tín chỉ carbon.\n\nVới câu hỏi về giá trị pháp lý, cam kết sai số, tiến độ hoặc báo giá, vui lòng chọn “Gặp chuyên gia tư vấn”.'
});
document.querySelectorAll('[data-answer]').forEach(button => {
  button.disabled = false;
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-answer]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    document.querySelector('#assistant-answer').textContent = answers[button.dataset.answer];
  });
});

const form = document.querySelector('#consultation-form');
const formStatus = document.querySelector('#form-status');
const requiredFields = [...form.querySelectorAll('[required]')];
form.querySelector('[type="submit"]').disabled = false;
function validate(field) {
  const value = field.value.trim();
  let error = '';
  if (!value) error = field.tagName === 'SELECT' ? 'Vui lòng chọn mục tiêu dự án.' : 'Vui lòng điền thông tin này.';
  else if (field.type === 'email' && field.validity.typeMismatch) error = 'Vui lòng nhập địa chỉ email hợp lệ.';
  else if (field.type === 'tel' && (!/^[+\d\s().-]+$/.test(value) || value.replace(/\D/g, '').length < 9 || value.replace(/\D/g, '').length > 15)) error = 'Vui lòng nhập số điện thoại có 9–15 chữ số.';
  else if (field.type === 'number' && (!Number.isFinite(Number(value)) || Number(value) < .01)) error = 'Diện tích cần lớn hơn hoặc bằng 0,01 ha.';
  document.getElementById(field.getAttribute('aria-describedby')).textContent = error;
  field.setAttribute('aria-invalid', String(Boolean(error)));
  return !error;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const results = requiredFields.map(validate);
  if (results.includes(false)) {
    formStatus.textContent = 'Vui lòng kiểm tra các trường được đánh dấu. Thông tin chưa được gửi.';
    requiredFields[results.indexOf(false)].focus();
    return;
  }
  formStatus.textContent = 'Thông tin hợp lệ trong bản demo. Yêu cầu chưa được gửi đến GASCOLAE vì biểu mẫu chưa kết nối hệ thống tiếp nhận.';
  formStatus.focus();
});
requiredFields.forEach(field => {
  field.addEventListener('input', () => {
    formStatus.textContent = '';
    if (field.getAttribute('aria-invalid') === 'true') validate(field);
  });
  field.addEventListener('change', () => {
    formStatus.textContent = '';
    if (field.hasAttribute('aria-invalid')) validate(field);
  });
});

const video = document.querySelector('#hero-video');
const videoToggle = document.querySelector('#video-toggle');
const connection = navigator.connection;
let inView = false;
let userPaused = false;
let requestedPlay = false;
let failed = false;
const allowMotion = () => !motionQuery.matches && !connection?.saveData;
const allowAutoplay = () => allowMotion() && !mobileQuery.matches && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType);

function syncVideoButton() {
  const playing = !video.paused;
  videoToggle.hidden = !allowMotion() || failed;
  videoToggle.textContent = playing ? 'Tạm dừng video Ⅱ' : 'Phát video minh họa ▷';
  videoToggle.setAttribute('aria-pressed', String(playing));
  video.classList.toggle('is-playing', playing);
}
async function syncVideo() {
  if (!failed && inView && !document.hidden && !userPaused && allowMotion() && (allowAutoplay() || requestedPlay)) {
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.muted = true;
    }
    try { await video.play(); } catch { /* Keep the image and manual play control if autoplay is blocked. */ }
  } else video.pause();
  syncVideoButton();
}
videoToggle.addEventListener('click', () => {
  if (video.paused) { userPaused = false; requestedPlay = true; }
  else { userPaused = true; requestedPlay = false; }
  syncVideo();
});
video.addEventListener('play', syncVideoButton);
video.addEventListener('pause', syncVideoButton);
video.addEventListener('error', () => { failed = true; video.pause(); syncVideoButton(); });
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncVideo();
  }, { threshold: .15 }).observe(document.querySelector('#hero'));
}
document.addEventListener('visibilitychange', syncVideo);
motionQuery.addEventListener('change', syncVideo);
mobileQuery.addEventListener('change', syncVideo);
connection?.addEventListener('change', syncVideo);
syncVideoButton();
