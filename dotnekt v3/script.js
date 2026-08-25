/* ═══════════════════════════════════════════
   DOTNEKT V3 — Animations & Interactions
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

// ─── Smooth Reveal ───
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

$$('.service, .work-card, .process-step, .testimonial, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// Stagger delays
$$('.services-grid .service').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});

$$('.work-grid .work-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

$$('.process .process-step').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});

$$('.testimonials .testimonial').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

// ─── GSAP Animations ───
addEventListener('load', () => {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero title reveal
  gsap.from('.hero-title .line', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2
  });

  // Hero subtitle & CTA
  gsap.from('.hero-sub, .hero-cta, .hero-label', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.7
  });

  // Section titles
  $$('.section-title').forEach(title => {
    gsap.from(title, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%'
      }
    });
  });

  // Parallax on work images
  $$('.work-img').forEach(img => {
    gsap.to(img, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

  // Contact title
  gsap.from('.contact-title', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-title',
      start: 'top 85%'
    }
  });
});