document.documentElement.classList.add('js');

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const space = $('.space');
if (space) {
  const colors = ['#FF6B1A', '#FFB25C', '#2B1608'];
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('i');
    s.style.setProperty('--x', Math.random() * 100 + '%');
    s.style.setProperty('--y', Math.random() * 100 + '%');
    s.style.setProperty('--s', (2 + Math.random() * 4) + 'px');
    s.style.setProperty('--d', (2 + Math.random() * 4) + 's');
    s.style.setProperty('--c', colors[Math.floor(Math.random() * colors.length)]);
    s.style.animationDelay = (Math.random() * 4) + 's';
    space.appendChild(s);
  }
}

const cursor = $('.cursor');
const finePointer = matchMedia('(pointer:fine)').matches;
if (cursor && finePointer) {
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    cursor.classList.add('on');
  });
  (function loop() {
    x += (tx - x) * 0.2;
    y += (ty - y) * 0.2;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  $$('a, button, .card, .work-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hot'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hot'));
  });
} else if (cursor) {
  cursor.remove();
}

const menuToggle = $('#menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    const existing = $('.mobile-menu');
    if (existing) {
      existing.classList.toggle('open');
    } else {
      const menu = document.createElement('div');
      menu.className = 'mobile-menu open';
      menu.innerHTML = `
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
      `;
      document.body.appendChild(menu);
      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          menu.classList.remove('open');
          menuToggle.classList.remove('active');
        });
      });
    }
  });
}

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealIO.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });
$$('.reveal').forEach(el => revealIO.observe(el));

const sectionIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const id = en.target.id;
    $$('.rail a').forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sectionIO.observe(s));

const countIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    countIO.unobserve(en.target);
    const el = en.target;
    const end = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1500;
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.5 });
$$('[data-count]').forEach(el => countIO.observe(el));

addEventListener('load', () => {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero [data-hero]', {
    y: 46,
    opacity: 0,
    duration: 0.9,
    stagger: 0.09,
    ease: 'power3.out'
  });

  $$('.parallax').forEach(el => {
    gsap.to(el, {
      yPercent: -+el.dataset.speed || -20,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || 'main',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
});
