gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from('.header', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

// Hero
gsap.from('.hero-greeting-pill', { x: -30, opacity: 0, duration: 0.6, delay: 0.2 });
gsap.from('.hero-title', { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
gsap.from('.hero-desc', { y: 30, opacity: 0, duration: 0.6, delay: 0.5 });
gsap.from('.hero-btn-primary', { y: 20, opacity: 0, duration: 0.6, delay: 0.6 });
gsap.from('.hero-photo-circle', { scale: 0.8, opacity: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('.floating-crown', { y: -30, opacity: 0, rotation: -20, duration: 0.7, delay: 0.7 });
gsap.from('.floating-smiley', { scale: 0, opacity: 0, duration: 0.5, delay: 0.9, ease: 'back.out(1.7)' });
gsap.from('.floating-bubble', { x: 40, opacity: 0, duration: 0.6, delay: 0.8 });
gsap.from('.floating-location', { y: 30, opacity: 0, duration: 0.6, delay: 1 });

// About strip
gsap.from('.about-avatar', {
  scrollTrigger: { trigger: '.about-strip', start: 'top 80%' },
  x: -40, opacity: 0, duration: 0.7
});
gsap.from('.about-strip-right', {
  scrollTrigger: { trigger: '.about-strip', start: 'top 80%' },
  y: 30, opacity: 0, duration: 0.7, delay: 0.2
});
gsap.from('.about-stat', {
  scrollTrigger: { trigger: '.about-stats-row', start: 'top 90%' },
  y: 20, opacity: 0, duration: 0.4, stagger: 0.1
});

// Services pills
gsap.from('.service-pill', {
  scrollTrigger: { trigger: '.services-row', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Work gallery
gsap.from('.work-item', {
  scrollTrigger: { trigger: '.work-gallery', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Testimonials
gsap.from('.testimonial-pill', {
  scrollTrigger: { trigger: '.testimonials-row', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.12
});

// Insights
gsap.from('.insight-card', {
  scrollTrigger: { trigger: '.insights-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.12
});

// Process steps
gsap.from('.process-step', {
  scrollTrigger: { trigger: '.process-row', start: 'top 85%' },
  y: 30, opacity: 0, duration: 0.4, stagger: 0.1
});

// CTA
gsap.from('.cta-title', {
  scrollTrigger: { trigger: '.cta', start: 'top 80%' },
  x: -40, opacity: 0, duration: 0.7
});
gsap.from('.cta-right-col', {
  scrollTrigger: { trigger: '.cta', start: 'top 80%' },
  x: 40, opacity: 0, duration: 0.7, delay: 0.2
});
