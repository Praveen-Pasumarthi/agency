gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from('.header', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

// Hero
gsap.from('.hero-hello', { x: -30, opacity: 0, duration: 0.5, delay: 0.2 });
gsap.from('.hero-name', { y: 40, opacity: 0, duration: 0.7, delay: 0.3, ease: 'power3.out' });
gsap.from('.hero-role', { y: 30, opacity: 0, duration: 0.6, delay: 0.45 });
gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, delay: 0.6 });
gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5, delay: 0.7 });
gsap.from('.hero-photo', { x: 60, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero-stripe-1', { y: -200, opacity: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' });
gsap.from('.hero-stripe-2', { y: -150, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero-stripe-3', { y: -100, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
gsap.from('.hero-social', { x: -30, opacity: 0, duration: 0.6, delay: 0.8 });

// About
gsap.from('.about-photo-col', {
  scrollTrigger: { trigger: '.about', start: 'top 80%' },
  x: -50, opacity: 0, duration: 0.8
});
gsap.from('.about-text-col', {
  scrollTrigger: { trigger: '.about', start: 'top 80%' },
  x: 50, opacity: 0, duration: 0.8, delay: 0.2
});
gsap.from('.check-item', {
  scrollTrigger: { trigger: '.about-checks', start: 'top 90%' },
  y: 20, opacity: 0, duration: 0.4, stagger: 0.08
});

// Services
gsap.from('.service-card', {
  scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Skills
gsap.from('.skill-item', {
  scrollTrigger: { trigger: '.skills-row', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.4, stagger: 0.06
});

// Projects
gsap.from('.project-card', {
  scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Testimonials
gsap.from('.testimonial-card', {
  scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.12
});

// Contact
gsap.from('.contact-left', {
  scrollTrigger: { trigger: '.contact', start: 'top 80%' },
  x: -50, opacity: 0, duration: 0.8
});
gsap.from('.contact-right', {
  scrollTrigger: { trigger: '.contact', start: 'top 80%' },
  x: 50, opacity: 0, duration: 0.8, delay: 0.2
});

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});
