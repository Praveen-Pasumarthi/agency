/* ═══════════════════════════════════════════
   DOTNEKT V2 — Animations & Interactions
   ═══════════════════════════════════════════ */

document.documentElement.classList.add('js');

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── Cursor Glow ───
const cursorGlow = $('.cursor-glow');
const finePointer = matchMedia('(pointer:fine)').matches;

if (cursorGlow && finePointer) {
  let cx = innerWidth / 2, cy = innerHeight / 2;
  let tx = cx, ty = cy;

  addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  (function loop() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    cursorGlow.style.left = cx + 'px';
    cursorGlow.style.top = cy + 'px';
    requestAnimationFrame(loop);
  })();
} else if (cursorGlow) {
  cursorGlow.remove();
}

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

// ─── Smooth Reveal on Scroll ───
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

$$('.craft-card, .bounty-card, .testimony-card, .trail-step, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// Add revealed class styling
const style = document.createElement('style');
style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// ─── GSAP Animations ───
addEventListener('load', () => {
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero title reveal
  gsap.to('.title-line', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.3
  });

  // Hero subtitle & actions
  gsap.to('.hero-sub, .hero-actions, .hero-scroll', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.9
  });

  // Parallax on hero decorations
  $$('.hero-deco').forEach(el => {
    gsap.to(el, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

  // Section headers
  $$('.section-header').forEach(header => {
    gsap.from(header, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 85%'
      }
    });
  });

  // Stagger cards on scroll
  $$('.craft-grid, .bounty-grid, .testimony-grid').forEach(grid => {
    const cards = grid.children;
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%'
      }
    });
  });

  // Trail steps animation
  $$('.trail-step').forEach((step, i) => {
    gsap.from(step, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: i * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 85%'
      }
    });
  });

  // Ticker speed on scroll
  gsap.to('.ticker-track', {
    x: '-=100',
    ease: 'none',
    scrollTrigger: {
      trigger: '.ticker',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });
});