/* ═══════════════════════════════════════════
   DOTNEKT V5 — Animations & Interactions
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

// ─── Active Nav Link ───
const sections = $$('section[id]');
const navLinks = $$('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
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

$$('.service-card, .work-card, .testimonial, .stat-card, .feature, .skill-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// Stagger delays
$$('.services-grid .service-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});

$$('.work-grid .work-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});

$$('.testimonials-grid .testimonial').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

$$('.stats-grid .stat-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

$$('.skills-grid .skill-item').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.05) + 's';
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
  gsap.from('.hero-greeting', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.hero-name', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.3
  });

  gsap.from('.hero-role', {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    delay: 0.45
  });

  gsap.from('.hero-desc', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.55
  });

  gsap.from('.hero-buttons', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.65
  });

  gsap.from('.hero-info', {
    y: 15,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    delay: 0.75
  });

  gsap.from('.hero-image', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.4
  });

  // Leaf float animation
  gsap.to('.hero-leaf-1', {
    y: -20,
    rotation: 10,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  gsap.to('.hero-leaf-2', {
    y: 15,
    rotation: -8,
    duration: 3.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 0.5
  });

  gsap.to('.test-leaf-1', {
    y: -15,
    rotation: 5,
    duration: 5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  gsap.to('.test-leaf-2', {
    y: 12,
    rotation: -6,
    duration: 4.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 1
  });

  // Section headers
  $$('.section-title, .about-title, .skills-title, .contact-title').forEach(el => {
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
});