/* ═══════════════════════════════════════════
   DOTNEKT V4 — Animations & Interactions
   ═══════════════════════════════════════════ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── Mobile Menu ───
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  $$('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

// ─── Smooth Scroll ───
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── Scroll Reveal ───
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

$$('.service, .work-card, .step, .testimonial, .stat, .stack-group').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// Stagger delays
$$('.services-grid .service').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});

$$('.work-grid .work-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

$$('.process-steps .step').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

$$('.testimonials-grid .testimonial').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

// Add revealed class styles
const style = document.createElement('style');
style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// ─── GSAP Animations ───
addEventListener('load', () => {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero-tag', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.hero-title', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.hero-sub', {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    delay: 0.5
  });

  gsap.from('.btn-primary', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.65
  });

  gsap.from('.hero-code', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.4
  });

  // Section headers
  $$('.section-num, .about-title, .stack-title, .process-title, .testimonials-title, .contact-title').forEach(el => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    });
  });

  // Stats counter animation
  $$('.stat-num').forEach(stat => {
    gsap.from(stat, {
      textContent: 0,
      duration: 1.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%'
      }
    });
  });
});