# AI Session Notes

> These notes help AI sessions quickly recall context without full chat history.
> Always read this file first in a new session.

---

## Last Session: 2026-08-21

### What Was Done
- FormSubmit integrated into all 7 templates (all forms now POST to FormSubmit)
- Removed newsletter sections from restaurant and gym footers
- Created `scripts/create-client.ps1` (PowerShell) and `create-client.sh` (Bash) for scaffolding new clients
- Created `context.md` — comprehensive project context for new sessions
- Deleted `outreach/` and `proposals/` folders (no longer needed)
- Researched 2026 design trends (GSAP, Framer Motion, scroll storytelling, micro-interactions)
- Created `redesign-plan.md` with full template redesign specs

### Current State
- All 7 templates have FormSubmit wired in (placeholder `yourgmail@gmail.com`)
- Client scaffolding script works: `.\scripts\create-client.ps1 -Template restaurant -Name "Client" -Color "#hex"`
- Templates are functional but all look the same (same layout pattern)
- Old templates need backup before redesign begins

### Next Task: Full Template Redesign
- **Goal:** Make each template visually unique with purposeful animations
- **Tech:** Add GSAP for scroll-driven animations, keep Framer Motion for UI interactions
- **Backup:** Copy all templates to `templates-backup/` before changes
- **Plan:** Detailed in `redesign-plan.md`
- **Implementation order:** Backup → shared components → restaurant → gym → cafe → gamezone → kidsplay → primaryschool → hospital

### Key Decisions Made
- User wants full redesign (not just animation upgrade)
- Add GSAP as new dependency
- Keep old versions as backup in `templates-backup/`
- Each template should have unique layout, not reskinned version of same structure

### Animation Approach
- GSAP: ScrollTrigger for scroll-linked animations, pinned sections, timelines
- Framer Motion: `whileInView`, `useSpring`, `AnimatePresence`, hover effects
- Shared animation components in `src/components/animations/`

### Template Design Direction
| Template | Layout Style | Key Animation |
|----------|-------------|---------------|
| restaurant | Editorial/magazine | Video hero, text reveal, horizontal gallery |
| gym | Bold/aggressive | Stats counter, glow cards, transformation slider |
| cafe | Cozy/organic | Steam animation, warm glow, ambient sound |
| gamezone | Cyberpunk/neon | Glitch text, neon pulses, custom cursor |
| kidsplay | Playful/bouncy | Spring animations, confetti, cursor trail |
| primaryschool | Clean/notebook | Hand-drawn underlines, staggered reveals |
| hospital | Minimal/trust | Stats counter, flip cards, step form |

### Important Context
- This is a freelance web agency workspace for building premium websites for local businesses
- Target market: Vizag/Bengaluru (restaurants, gyms, cafes)
- Pricing: ₹8,000–₹20,000 per site + ₹500–₹2,000/month maintenance
- Tech: React 19, Vite 8, Tailwind v4, Framer Motion, Lucide React
- Forms: FormSubmit (free, no API key)
- No TypeScript, no routing (single-page with anchor links)
