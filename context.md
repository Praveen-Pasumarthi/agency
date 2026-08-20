# Project Context — Web Agency Workspace

> Last updated: 2026-08-21
> This file provides all context needed for any new AI session working on this project.

---

## 1. Project Overview

This is a **freelance web agency workspace** for building premium websites for local businesses (restaurants, gyms, cafes, etc.). The repo contains:

- **7 reusable templates** under `templates/`
- **Client scaffolding script** under `scripts/`
- **Business docs** (plan, checklists, prompts)
- **1 live client** under `clients/` (The MG Grand — restaurant)

**Goal:** Land paying clients quickly by offering premium websites at ₹8,000–₹20,000, then scale to recurring revenue (maintenance, SEO, booking systems).

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (JSX, no TypeScript) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@theme` syntax) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | FormSubmit (free, no API key) |
| Linting | OxLint |
| Deployment | Netlify / Vercel / GitHub Pages |

No routing — single-page apps with anchor links. Dark mode via `.dark` class + `localStorage`.

---

## 3. Folder Structure

```
agency/
├── clients/                    # Live client projects (copies of templates)
│   └── the-mg-grand/           # Restaurant client
├── templates/                  # Master templates (never edit directly for clients)
│   ├── restaurant/             # La Maison — fine dining
│   ├── gym/                    # IronForge — fitness center
│   ├── cafe/                   # Brew & Bean — coffee shop
│   ├── gamezone/               # Level Up — gaming zone
│   ├── kidsplay/               # FunLand — kids play area
│   ├── primaryschool/          # Sunshine — primary school
│   └── hospital/               # MedCare — hospital/clinic
├── scripts/
│   ├── create-client.ps1       # PowerShell scaffolding script (Windows)
│   └── create-client.sh        # Bash scaffolding script (Linux/Mac)
├── portfolio/                  # Freelancer's own portfolio site
├── plan.md                     # 30-day business plan
├── redesign-plan.md            # Template redesign plan (GSAP + unique layouts)
├── notes.md                    # AI session context notes
├── todo.md                     # Task tracker
├── checklists.md               # Delivery checklists
├── formsubmit-setup.md         # FormSubmit reference
├── prompts.md                  # AI prompt library
└── context.md                  # ← THIS FILE
```

---

## 4. Templates

All templates share identical build config (`package.json`, `vite.config.js`). Each is a standalone Vite + React project.

| Template | Brand Color | Heading Font | Key Components |
|----------|-------------|--------------|----------------|
| restaurant | `#c8a97e` (gold) | Playfair Display | Hero, Menu, Gallery, Reservation, Testimonials |
| gym | `#e63946` (red) | Bebas Neue | Hero, Plans, Trainers, BMI Calc, Free Trial |
| cafe | `#d97706` (amber) | Playfair Display | Hero, Menu, Gallery, CTA with reservation form |
| gamezone | `#9333ea` (purple) | Inter | Hero, Packages, Gallery, CTA with party booking |
| kidsplay | `#f97316` (orange) | Playfair Display | Hero, Activities, Gallery, CTA with birthday booking |
| primaryschool | `#2563eb` (blue) | Playfair Display | Hero, Programs, Gallery, CTA with admission inquiry |
| hospital | `#0891b2` (teal) | Playfair Display | Hero, Departments, Doctors, Appointment form |

---

## 5. Client Scaffolding Workflow

### Creating a new client project:

```powershell
# Windows (PowerShell)
.\scripts\create-client.ps1 -Template restaurant -Name "The MG Grand" -Color "#c8a97e"

# Linux/Mac (Bash)
./scripts/create-client.sh restaurant "The MG Grand" "#c8a97e"
```

This will:
1. Copy template to `clients/<slug>/`
2. Apply brand color to `index.css`
3. Update business name in `index.html`
4. Clean `node_modules` and reinstall

### Then manually:
1. Replace `yourgmail@gmail.com` in form components with client's email
2. Update phone, address, menu/items in JSX
3. Replace images (Unsplash URLs → client photos)
4. Test with `npm run dev`

---

## 6. FormSubmit Integration

All 7 templates have FormSubmit wired into their forms. Every form component includes:

```jsx
const FORM_ENDPOINT = 'https://formsubmit.co/yourgmail@gmail.com'

// In handleSubmit:
const formData = new FormData()
Object.entries(form).forEach(([key, value]) => {
  formData.append(key, value)
})
formData.append('_gotcha', '')  // honeypot for bots

const response = await fetch(FORM_ENDPOINT, {
  method: 'POST',
  body: formData,
})
```

Each form also includes:
- `loading` state with `<Loader2 className="animate-spin" />` spinner
- `error` state with styled error message
- Success state with `<CheckCircle />` icon
- Hidden honeypot field: `<input type="text" name="_gotcha" style="position:absolute;left:-9999px" />`

### Per-client activation:
1. Replace `yourgmail@gmail.com` with client's email
2. Deploy → first submission triggers confirmation email
3. Client clicks "Activate" in that email
4. Done — future submissions arrive in inbox

---

## 7. Design Conventions

### Colors (defined in `index.css` via `@theme`)
```css
@theme {
  --color-brand: #c8a97e;       /* Primary brand color */
  --color-brand-dark: #b8956a;  /* Darker variant (auto-calculated by script) */
  --color-surface: #faf8f5;     /* Light background */
  --color-surface-dark: #1a1a1a; /* Dark mode background */
  --font-heading: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

### Component patterns
- All components use `motion.div` from Framer Motion for entrance animations
- `useInView` hook for scroll-triggered animations
- Dark mode via `dark:` Tailwind prefix
- Forms are controlled React components (`useState` + `handleChange`)
- All forms POST to FormSubmit via `fetch()`
- Icons from `lucide-react`
- Responsive: mobile-first, `sm:`, `md:`, `lg:` breakpoints

### File naming
- Components: PascalCase (`Reservation.jsx`, `FreeTrial.jsx`)
- Hooks: camelCase (`useInView.js`)
- Config: lowercase (`vite.config.js`)

---

## 8. Key Files to Know

| File | Purpose |
|------|---------|
| `templates/<name>/src/components/*.jsx` | All UI components |
| `templates/<name>/src/index.css` | Theme colors + fonts |
| `templates/<name>/index.html` | Title, meta, fonts |
| `templates/<name>/vite.config.js` | Vite config (identical across all) |
| `scripts/create-client.ps1` | Client scaffolding |
| `plan.md` | Full business plan |
| `redesign-plan.md` | Template redesign plan (GSAP + unique layouts) |
| `notes.md` | AI session context notes |
| `checklists.md` | Delivery checklists |
| `formsubmit-setup.md` | FormSubmit reference |
| `prompts.md` | AI prompt library |
| `todo.md` | Task tracker |

---

## 9. Client Projects

| Client | Template | Status |
|--------|----------|--------|
| The MG Grand | restaurant | Live — `clients/the-mg-grand/` |

To view a client: `cd clients/<name> && npm run dev`

---

## 10. Important Rules

1. **Never edit `templates/` directly for a client** — always scaffold via script or copy
2. **Templates are master copies** — changes here affect all future clients
3. **Each client is independent** — changes in one client don't affect others
4. **All forms use FormSubmit** — no API keys, just replace the email
5. **Brand colors** are in `index.css` `@theme` block — one place to change
6. **Lint before committing** — run `npx oxlint <file>` on changed files
7. **Premium design** — think Apple/Stripe, not generic WordPress

---

## 11. Deployment

Each client project deploys independently:
- `npm run build` → creates `dist/`
- Deploy `dist/` to Netlify/Vercel/GitHub Pages
- Connect custom domain if client has one
- SSL is automatic on all platforms

---

## 12. Business Context

- **Target:** Local businesses in Vizag/Bengaluru (restaurants, gyms, cafes)
- **Pricing:** ₹8,000–₹10,000 first client, scaling to ₹20,000+
- **Maintenance:** ₹500–₹2,000/month recurring
- **Outreach:** WhatsApp + Instagram DMs, personalized messages
- **Process:** Research → Demo → Proposal → 50% advance → Build → Deploy → Collect balance → Testimonial

---

## 13. Template Redesign (In Progress)

Full redesign of all 7 templates with unique layouts + GSAP animations. See `redesign-plan.md` for details.

- **Why:** Current templates all look the same — need differentiation
- **Tech:** Adding GSAP for scroll-driven animations, keeping Framer Motion for UI
- **Backup:** Old templates will be copied to `templates-backup/` before changes
- **Status:** Planned — ready to implement
- **Read `notes.md` first** in any new session to get current context
