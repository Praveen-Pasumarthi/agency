gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from('.header', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' });

// Hero
gsap.from('.hero-label', { x: -20, opacity: 0, duration: 0.5, delay: 0.2 });
gsap.from('.hero-name', { y: 40, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power3.out' });
gsap.from('.hero-role', { y: 30, opacity: 0, duration: 0.6, delay: 0.5 });
gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, delay: 0.65 });
gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5, delay: 0.8 });
gsap.from('.hero-badge', { scale: 0.8, opacity: 0, rotation: -30, duration: 1, delay: 0.6, ease: 'power3.out' });

// About
gsap.from('.about-photo-col', {
  scrollTrigger: { trigger: '.about', start: 'top 80%' },
  x: -50, opacity: 0, duration: 0.8
});
gsap.from('.about-text-col', {
  scrollTrigger: { trigger: '.about', start: 'top 80%' },
  x: 50, opacity: 0, duration: 0.8, delay: 0.2
});

// Services
gsap.from('.service-item', {
  scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.5, stagger: 0.1
});

// Skills - animate bars on scroll
const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach(fill => {
  const width = fill.getAttribute('data-width');
  ScrollTrigger.create({
    trigger: fill,
    start: 'top 90%',
    onEnter: () => { fill.style.width = width + '%'; }
  });
});

// Stats counter
const statNums = document.querySelectorAll('.stat-num');
statNums.forEach(num => {
  const target = parseInt(num.getAttribute('data-target'));
  ScrollTrigger.create({
    trigger: num,
    start: 'top 85%',
    onEnter: () => {
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        num.textContent = Math.floor(current);
      }, 25);
    }
  });
});

// Portfolio
gsap.from('.portfolio-card', {
  scrollTrigger: { trigger: '.portfolio-grid', start: 'top 85%' },
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

// Portfolio filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
