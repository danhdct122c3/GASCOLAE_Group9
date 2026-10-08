/**
 * GASCOLAE S0143 - Interactive Disaster Command & Response Engine
 * Pure Vanilla JavaScript (ES6)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideo();
  initSimulator();
  initFaqAccordion();
  initLeadForm();
});

function initHeroVideo() {
  const video = document.querySelector('.hero-video-bg');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback or browser policy handled safely
      });
    }
  }
}

/* ==========================================================================
   1. NAVBAR & HEADER SCROLL LOGIC
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileMenuToggle');

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && header) {
    mobileToggle.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });

    // Close menu when clicking nav links
    const navLinks = header.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
      });
    });
  }
}

/* ==========================================================================
   2. INTERACTIVE SIMULATOR (DUAL-VISION & FLOOD DEPTH)
   ========================================================================== */
function initSimulator() {
  // Tab Switching
  const tabButtons = document.querySelectorAll('.sim-tab-btn');
  const tabPanels = document.querySelectorAll('.sim-view-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Image Comparison Slider (Tab 1: Optical vs Thermal)
  const sliderWrapper = document.getElementById('comparisonSlider');
  const overlayAfter = document.getElementById('overlayAfter');
  const handle = document.getElementById('sliderHandle');

  if (sliderWrapper && overlayAfter && handle) {
    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = sliderWrapper.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const percentage = (offsetX / rect.width) * 100;
      overlayAfter.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    const onPointerDown = (e) => {
      isDragging = true;
      updateSlider(e.clientX || (e.touches && e.touches[0].clientX));
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX || (e.touches && e.touches[0].clientX));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    sliderWrapper.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    sliderWrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  }

  // Flood Depth Selector (Tab 2: DEM/DSM)
  const depthButtons = document.querySelectorAll('.depth-btn');
  const impactDesc = document.getElementById('depthImpactDesc');
  const impactTitle = document.getElementById('depthImpactTitle');

  const depthData = {
    '0.5': {
      title: 'Mức ngập 0.5m — Báo động Cấp 1 (Mép đường ngập nông)',
      desc: 'Mặt nước dâng ngập các rãnh thoát nước và mép đường thấp. Xe gầm cao cứu hộ và ca-nô dã chiến vẫn có thể lưu thông thận trọng. UAV tập trung quét ranh giới nước dâng để cảnh báo các hộ dân ven sông trũng.'
    },
    '1.5': {
      title: 'Mức ngập 1.5m — Báo động Cấp 2 (Chia cắt cục bộ & Nguy cơ cao)',
      desc: 'Đóng hoàn toàn các cầu dân sinh và trục đường chính. Người già, trẻ em và tài sản thiết yếu cần di tản khẩn cấp theo các Vector đường màu xanh lá còn khô ráo trên bản đồ GIS. Đội xuồng ca-nô hoạt động dưới sự dẫn đường tọa độ từ UAV.'
    },
    '3.0': {
      title: 'Mức ngập 3.0m — Báo động Cấp 3 (Tình trạng Khẩn cấp Cực đoan)',
      desc: 'Nước lũ dâng ngập tận mái nhà dân, dòng chảy xoáy mạnh cô lập hoàn toàn khu dân cư. Kích hoạt khẩn cấp gói Level 3: UAV mang camera nhiệt tầm soát thân nhiệt ban đêm và trực tiếp thả phao cứu sinh tự bung, thuốc men, bộ đàm vệ tinh.'
    }
  };

  depthButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      depthButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const level = btn.getAttribute('data-level');
      if (depthData[level] && impactDesc && impactTitle) {
        impactTitle.textContent = depthData[level].title;
        impactDesc.textContent = depthData[level].desc;
      }
    });
  });
}



/* ==========================================================================
   4. FAQ ACCORDION COMPONENT
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. EMERGENCY FIELD SURVEY REQUEST FORM
   ========================================================================== */
function initLeadForm() {
  const form = document.getElementById('surveyLeadForm');
  const toast = document.getElementById('formSuccessToast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation check
    const fullName = form.querySelector('[name="fullname"]')?.value.trim();
    const phone = form.querySelector('[name="phone"]')?.value.trim();
    const location = form.querySelector('[name="location"]')?.value.trim();

    if (!fullName || !phone || !location) {
      alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại/Zalo và Địa bàn xảy ra ngập lụt!');
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang chuyển tiếp tín hiệu tác chiến...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();

      // Show toast
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 5000);
      }
    }, 900);
  });
}
