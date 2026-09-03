gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from('.header', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

// Hero
gsap.from('.hero-label', { x: -20, opacity: 0, duration: 0.5, delay: 0.2 });
gsap.from('.hero-name', { y: 40, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' });
gsap.from('.hero-tagline', { y: 20, opacity: 0, duration: 0.6, delay: 0.5 });
gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, delay: 0.65 });
gsap.from('.btn-dark', { y: 20, opacity: 0, duration: 0.5, delay: 0.8 });
gsap.from('.hero-circle', { scale: 0.6, opacity: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' });
gsap.from('.corner-decor', { opacity: 0, duration: 0.5, stagger: 0.1, delay: 1 });
gsap.from('.hero-socials-fixed', { x: 20, opacity: 0, duration: 0.6, delay: 1.1 });

// Workflow
gsap.from('.wf-step', {
  scrollTrigger: { trigger: '.workflow-steps', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.15
});
gsap.from('.wf-divider', {
  scrollTrigger: { trigger: '.workflow-steps', start: 'top 85%' },
  scaleY: 0, opacity: 0, duration: 0.4, stagger: 0.1, delay: 0.3
});

// Portfolio
gsap.from('.pf-card', {
  scrollTrigger: { trigger: '.portfolio-grid', start: 'top 85%' },
  y: 50, opacity: 0, duration: 0.6, stagger: 0.12
});

// Process
gsap.from('.process-text', {
  scrollTrigger: { trigger: '.process', start: 'top 80%' },
  x: -40, opacity: 0, duration: 0.8
});
gsap.from('.process-img-col', {
  scrollTrigger: { trigger: '.process-images', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.5, stagger: 0.1
});

// CTA
gsap.from('.cta-inner', {
  scrollTrigger: { trigger: '.cta', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.7
});

// Contact
gsap.from('.contact-left', {
  scrollTrigger: { trigger: '.contact', start: 'top 80%' },
  x: -40, opacity: 0, duration: 0.8
});
gsap.from('.contact-form', {
  scrollTrigger: { trigger: '.contact', start: 'top 80%' },
  x: 40, opacity: 0, duration: 0.8, delay: 0.2
});

// Nav active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
});
