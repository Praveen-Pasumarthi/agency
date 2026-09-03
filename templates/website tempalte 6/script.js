gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from('.header', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

// Hero
gsap.from('.hero-label', { x: -30, opacity: 0, duration: 0.6, delay: 0.3 });
gsap.from('.hero-title', { y: 40, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero-desc', { y: 30, opacity: 0, duration: 0.6, delay: 0.6 });
gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, delay: 0.7 });
gsap.from('.hero-photo-wrapper', { scale: 0.9, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
gsap.from('.hero-crown', { y: -30, opacity: 0, rotation: -30, duration: 0.8, delay: 0.8 });
gsap.from('.hero-smiley', { scale: 0, opacity: 0, duration: 0.6, delay: 1, ease: 'back.out(1.7)' });

// About
gsap.from('.about-photo-wrapper', {
  scrollTrigger: { trigger: '.about', start: 'top 75%' },
  x: -50, opacity: 0, duration: 0.8
});
gsap.from('.about-text', {
  scrollTrigger: { trigger: '.about', start: 'top 75%' },
  y: 40, opacity: 0, duration: 0.8, delay: 0.2
});
gsap.from('.stat', {
  scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.5, stagger: 0.1
});

// Services
gsap.from('.services-title', {
  scrollTrigger: { trigger: '.services', start: 'top 75%' },
  y: 30, opacity: 0, duration: 0.7
});
gsap.from('.service-card', {
  scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Work
gsap.from('.work-card', {
  scrollTrigger: { trigger: '.work-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Testimonials
gsap.from('.testimonial-card', {
  scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.15
});

// Insights
gsap.from('.insight-card', {
  scrollTrigger: { trigger: '.insights-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.15
});

// CTA
gsap.from('.cta-left', {
  scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
  x: -40, opacity: 0, duration: 0.7
});
gsap.from('.cta-right', {
  scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
  x: 40, opacity: 0, duration: 0.7, delay: 0.2
});