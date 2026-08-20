# Template Redesign Plan — Premium Motion + Unique Layouts

> Status: PLANNED — Ready to implement
> Started: 2026-08-21

---

## Problem

All 7 templates follow the same layout pattern (hero → features → gallery → contact → footer) with basic fade-in-on-scroll animations. Every business looks the same. Need to differentiate.

## Solution

Full redesign of all 7 templates with:
- Unique layouts per business type (not reskinned versions of the same layout)
- GSAP + Framer Motion animations (scroll storytelling, parallax, micro-interactions)
- Purposeful motion tied to each business (food sizzle for restaurants, energy pulse for gyms)
- Backup of old templates before changes

## Tech Additions

- **GSAP** — scroll-triggered narratives, pinned sections, SVG morphing, complex timelines
- **Framer Motion** — kept for component-level interactions (hover, spring, layout)
- Shared animation component library under `src/components/animations/`

---

## Template Redesign Specs

### 1. Restaurant — "La Maison" (Fine Dining)
- **Layout:** Asymmetrical, editorial magazine style
- **Color:** Gold `#c8a97e` on dark charcoal `#1a1a1a`
- **Animations:** Video hero (chef plating), text letter-by-letter reveal, diagonal menu grid, horizontal scroll gallery, sticky testimonials, spring-physics form fields

### 2. Gym — "IronForge" (Fitness Center)
- **Layout:** Bold, aggressive, high-energy
- **Color:** Red `#e63946` on black
- **Animations:** Animated stats counter (members trained), glow-on-hover plan cards, flip-card trainers, before/after transformation slider, form progress bar

### 3. Cafe — "Brew & Bean" (Coffee Shop)
- **Layout:** Cozy, warm, organic shapes
- **Color:** Amber `#d97706` on warm cream
- **Animations:** Coffee steam CSS animation, horizontal scroll menu, staggered masonry gallery, warm glow CTA, optional ambient sound toggle

### 4. Gamezone — "Level Up" (Gaming Center)
- **Layout:** Cyberpunk/neon, grid-based
- **Color:** Purple `#9333ea` + neon cyan on dark
- **Animations:** Glitch text effect, neon glow pulses, scan-line hover, chromatic aberration on gallery, custom crosshair cursor, "insert coin" loading

### 5. Kidsplay — "FunLand" (Kids Play Area)
- **Layout:** Playful, rounded, bouncy
- **Color:** Orange `#f97316` + pink/yellow on white
- **Animations:** Bouncy spring animations, confetti particles, wobble-hover cards, floating polaroids, colorful cursor trail

### 6. Primary School — "Sunshine"
- **Layout:** Clean, trustworthy, notebook-inspired
- **Color:** Blue `#2563eb` on white with paper texture
- **Animations:** Hand-drawn underline animation, staggered card reveals, gentle fade+scale gallery, animated admission progress, variable weight typography

### 7. Hospital — "MedCare"
- **Layout:** Clean, minimal, trust-focused
- **Color:** Teal `#0891b2` on white
- **Animations:** Animated health stats counter, icon pulse, doctor flip cards, step-by-step form transitions, animated checkmarks

---

## Shared Animation Components

```
src/components/animations/
├── ScrollReveal.jsx      # Configurable scroll-triggered reveal
├── ParallaxSection.jsx   # Parallax depth effect
├── TextReveal.jsx        # Letter/word-by-letter text animation
├── StaggerChildren.jsx   # Staggered child element reveal
├── HoverScale.jsx        # Spring-physics hover effect
├── AnimatedCounter.jsx   # Number ticker animation
└── CustomCursor.jsx      # Interactive cursor component
```

---

## Implementation Order

1. Backup all templates to `templates-backup/`
2. Create shared animation components
3. Redesign restaurant (reference template — most complex)
4. Redesign gym (high-energy contrast)
5. Redesign cafe (warm organic feel)
6. Redesign gamezone (cyberpunk/neon)
7. Redesign kidsplay (playful/bouncy)
8. Redesign primaryschool (clean/trust)
9. Redesign hospital (minimal/trust)
10. Test all with `npm run dev`

---

## Files Modified Per Template

| File | Change |
|------|--------|
| `package.json` | Add `gsap` dependency |
| `src/components/Hero.jsx` | Unique hero with video/animation |
| `src/components/Menu/Plans/Programs` | Asymmetrical/horizontal layouts |
| `src/components/Gallery.jsx` | Scroll-driven gallery |
| `src/components/CTA/Reservation/FreeTrial` | Enhanced form with animations |
| `src/components/animations/*.jsx` | Shared animation components |
| `src/App.jsx` | GSAP ScrollTrigger registration |

---

## Backup Location

All original templates backed up to: `templates-backup/`
