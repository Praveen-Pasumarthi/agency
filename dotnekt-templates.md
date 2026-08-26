# DOTNEKT Templates — Master Reference

> Last updated: 2026-08-21
> Give this file to AI at the start of any new session working on DOTNEKT templates.

---

## How to Use This File

1. Read this entire file first
2. Check the "Current State" section to see what's done
3. Follow the "Creating a New Version" workflow exactly
4. Never break the "Critical Rules" — user will reject the work

---

## DOTNEKT Brand Info (USE THIS — DO NOT SEARCH FOR IT)

```
Company:    DOTNEKT (Web Studio)
Tagline:    "Crafting Digital Experiences, One Pixel at a Time"
Email:      hello@dotnekt.com
Phone:      +91 98765 43210
Location:   Mumbai / Vizag, India
Starting:   ₹8,000
Maintenance: ₹1,500/month
```

**Services offered:**
- UI/UX Design
- Web Development (React, Vite, Tailwind CSS)
- Responsive Design
- SEO Optimization
- Deployment (Cloudflare Pages, Hostinger)

**Portfolio projects (use as content):**
- The MG Grand — Fine Dining, Restaurant
- IronForge Gym — Fitness, Strength
- Brew & Bean — Coffee, Community
- Level Up Zone — Gaming, Entertainment

---

## Critical Rules (USER WILL REJECT IF YOU BREAK THESE)

1. **EXACT REPLICAS** — User gives a reference image. You must match it pixel-for-pixel. Approximations are REJECTED.
2. **DOTNEKT CONTENT ONLY** — Replace all text from the reference image with DOTNEKT info above. Never keep the original design's content.
3. **VISUALLY DISTINCT** — Each version must look fundamentally different. Changing only colors = REJECTED (see v11 failure below).
4. **CONTACT SECTION REQUIRED** — Every version MUST have a contact form section. User will ask for it if missing.
5. **FORMSUBMIT** — All forms POST to `https://formsubmit.co/hello@dotnekt.com`
6. **NO REACT** — Pure HTML/CSS/JS only. No frameworks.
7. **THREE FILES ONLY** — `index.html`, `styles.css`, `script.js`
8. **GSAP ANIMATIONS** — All versions use GSAP + ScrollTrigger from CDN.

---

## Current State (as of 2026-08-21)

| Version | Status | Contact Section |
|---------|--------|----------------|
| dotnekt website | Original reference | N/A |
| v2 | ✅ APPROVED | ❌ |
| v3 | ✅ APPROVED | ❌ |
| v4 | ✅ APPROVED | ❌ |
| v5 | ✅ APPROVED | ❌ |
| v6 | ✅ APPROVED | ✅ |
| v7 | ✅ APPROVED | ❌ |
| v8 | ✅ APPROVED | ❌ |
| v9 | ✅ APPROVED | ❌ |
| v10 | ✅ APPROVED | ✅ (blog) |
| v11 | ✅ APPROVED | ✅ |

**Next version to create: v12** (or as directed by user)

---

## Creating a New Version — Step by Step

### Step 1: Get Reference Image
- User will provide a reference image of a portfolio website
- Study it carefully — note colors, layout, typography, spacing, decorative elements

### Step 2: Create Folder
```powershell
New-Item -ItemType Directory -Path "C:\Users\user\Documents\GitHub\agency\dotnekt v{N}"
```

### Step 3: Write index.html
Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DOTNEKT — [Role from reference]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=[FONTS]&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>
  <!-- HEADER -->
  <!-- HERO -->
  <!-- [SECTIONS FROM REFERENCE] -->
  <!-- CONTACT (REQUIRED) -->
  <!-- FOOTER -->
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### Step 4: Write styles.css
- Match the reference image's exact colors, spacing, typography
- Use CSS variables for colors at the top
- Include responsive breakpoints (1024px, 640px)
- Write in chunks if file is large (use PowerShell `Set-Content` for first chunk, `Add-Content` for rest)

### Step 5: Write script.js
```javascript
gsap.registerPlugin(ScrollTrigger);

// Header animation
// Hero animations
// Section scroll animations
// Nav active state on scroll
```

### Step 6: Add Contact Section
Every version must include:
- Left: Heading + contact info (email, phone, location)
- Right: FormSubmit form (name, email, subject, message)
- POST to `https://formsubmit.co/hello@dotnekt.com`

### Step 7: Verify
- Open `index.html` in browser
- Check all sections render
- Check contact form works
- Check responsive at 1024px and 640px

---

## Version Design Reference

### v6 (APPROVED) — Bold Professional
- Color: `#FF6B35` (bright orange)
- Hero: Large title, ticker/marquee below
- Services: Emoji icons in cards
- CTA: Pricing info (₹8,000 starting)
- Footer: "CRAFTING THE WEB, ONE PIXEL AT A TIME"

### v10 (APPROVED) — Warm Terracotta
- Color: `#c4622d` (terracotta), `#3d2417` (brown), `#faf8f5` (cream)
- Fonts: DM Serif Display, Inter, Caveat
- Hero: Split panel — cream left, dark brown right with orange brush stroke
- About: Photo with floating card + handwritten signature
- Skills: Split dark/light panel
- CTA: Orange-to-brown gradient

### v11 (APPROVED) — Editorial Comicraft
- Color: `#8b1a1a` (deep red), `#1a1a1a` (black), `#f8f5f0` (cream)
- Fonts: Bebas Neue, Playfair Display, Inter
- Hero: Split grid with red circle on dark background
- Decorative: L-shaped corner ornaments, diamond dividers
- Workflow: Numbered steps (01–04) with vertical dividers
- Portfolio: 4-column grid with card corner decorations
- Process: 4 small images with labels
- Contact: Form + info
- Footer: 4-column grid

---

## Common Mistakes to Avoid

1. **Making it look like v10** — v11 was rejected 3 times because it looked too similar. Each version needs a DIFFERENT design language.

2. **Skipping the contact section** — User will ask for it. Always include it from the start.

3. **Approximating the reference** — User said "try to make it an accurate replica." Match exact colors, spacing, proportions.

4. **Using placeholder text** — Replace all reference content with DOTNEKT info. Never keep "Rohan Sharma" or "Comicraft" text.

5. **Forgetting FormSubmit** — All forms must POST to `https://formsubmit.co/hello@dotnekt.com`

6. **Missing responsive breakpoints** — Always include 1024px and 640px media queries.

---

## File Paths

```
C:\Users\user\Documents\GitHub\agency\
├── dotnekt-templates.md     ← THIS FILE
├── dotnekt website\         ← Original (DO NOT MODIFY)
├── dotnekt v2\
├── dotnekt v3\
├── dotnekt v4\
├── dotnekt v5\
├── dotnekt v6\              ← APPROVED
├── dotnekt v7\
├── dotnekt v8\
├── dotnekt v9\
├── dotnekt v10\             ← APPROVED
└── dotnekt v11\             ← APPROVED
```

---

## What the User Will Say

Typical requests:
- "lets try this for v{N}" + [image] — Create new version matching the image
- "add the contact us page just like you did in the others" — Add contact section
- "its identical to v{X} and I dont want that" — Version looks too similar, needs redesign
- "try to make it an accurate replica" — Match the reference image exactly

---

## PowerShell Tips for Large Files

CSS files often exceed single-write limits. Use:
```powershell
# First chunk
@".css content here"@ | Set-Content -Path "styles.css" -Encoding UTF8

# Subsequent chunks
@".css content here"@ | Add-Content -Path "styles.css" -Encoding UTF8
```

---

## CDN Links (Use These)

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=[FAMILY]&display=swap" rel="stylesheet"/>

<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

---

## Summary for AI

When you receive this file:
1. You are helping build DOTNEKT portfolio website versions
2. Each version is a standalone HTML/CSS/JS project
3. User provides reference images — you create pixel-perfect replicas
4. Replace reference content with DOTNEKT brand info
5. Always include contact section with FormSubmit
6. Make each version VISUALLY DISTINCT from others
7. Current approved versions: v6, v10, v11
8. Next version to create: v12 (or as directed)
