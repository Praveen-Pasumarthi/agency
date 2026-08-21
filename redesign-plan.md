# Template Redesign Plan — Premium Motion + Unique Layouts

> Status: IN PROGRESS — Restaurant complete
> Started: 2026-08-21

---

## Problem

All 7 templates follow the same layout pattern (hero → features → gallery → contact → footer) with basic fade-in-on-scroll animations. Every business looks the same. Need to differentiate.

## Solution

Premium redesign of templates with:
- Unique layouts per business type (not reskinned versions of the same layout)
- GSAP + Framer Motion animations (scroll storytelling, parallax, micro-interactions)
- Purposeful motion tied to each business (food sizzle for restaurants, energy pulse for gyms)

## Tech Additions

- **GSAP** — scroll-triggered narratives, pinned sections, complex timelines
- **Framer Motion** — kept for component-level interactions (hover, spring, layout)
- Dark-only aesthetic for premium feel (light theme removed)

---

## Current Status

### ✅ Restaurant — "La Maison" (DONE)
- **Layout:** Dark moody aesthetic, asymmetric editorial
- **Color:** Gold `#c8a97e` on dark `#0a0a0a`
- **Animations:** Character-by-character title reveal, GSAP scroll scrub gallery, parallax testimonials, diagonal menu grid
- **Theme:** Dark-only (no light mode)
- **WhatsApp:** ✅ Included
- **Build:** ✅ Passes

### Other 6 Templates — ORIGINAL (Clean, Functional)
| Template | Status | Theme |
|----------|--------|-------|
| Gym | Original | Light/Dark ✅ |
| Cafe | Original | Dark-only |
| Gamezone | Original | Dark-only |
| Kidsplay | Original | Light/Dark ✅ |
| Primaryschool | Original | Light/Dark ✅ |
| Hospital | Original | Light/Dark ✅ |

---

## Shared Animation Components

Only in `templates/restaurant/src/components/animations/`:
- ScrollReveal.jsx
- ParallaxSection.jsx
- TextReveal.jsx
- StaggerChildren.jsx
- HoverScale.jsx
- AnimatedCounter.jsx

---

## Files Modified Per Template (Restaurant)

| File | Change |
|------|--------|
| `package.json` | Add `gsap` dependency |
| `src/App.jsx` | GSAP ScrollTrigger registration, dark-only |
| `src/index.css` | Dark theme, custom colors |
| `src/components/Hero.jsx` | Massive typography, character-by-character reveal |
| `src/components/About.jsx` | New section (was not in original) |
| `src/components/FeaturedDishes.jsx` | Asymmetric editorial grid |
| `src/components/Menu.jsx` | Diagonal offset layout |
| `src/components/Gallery.jsx` | Horizontal scroll with GSAP scrub |
| `src/components/Testimonials.jsx` | Sticky parallax |
| `src/components/Reservation.jsx` | Floating labels, glow focus |
| `src/components/Footer.jsx` | Minimal dark |
| `src/components/WhatsAppButton.jsx` | WhatsApp integration |
| `src/components/Navbar.jsx` | Fixed, transparent |

---

## Next Steps (When Ready)

1. Redesign gym template (high-energy, bold aesthetic)
2. Redesign cafe template (cozy, warm organic feel)
3. Redesign gamezone (cyberpunk/neon)
4. Redesign kidsplay (playful/bouncy)
5. Redesign primaryschool (clean/trust)
6. Redesign hospital (minimal/trust)
