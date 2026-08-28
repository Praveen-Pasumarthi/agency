# Progress — DOTNEKT V14

> Last updated: 2026-08-28

## What We Built

### 1. Project Detail Page (Our Work Section)

**Files modified:**
- `dotnekt v14/index.html` — Work cards now link to `project-detail.html?id=1` through `?id=6`
- `dotnekt v14/project-detail.html` — Rewritten with v13-style split layout (dark theme, orbit animation)
- `dotnekt v14/css/project-detail.css` — New dark theme CSS matching v13 style
- `dotnekt v14/js/main.js` — Added project data array + dynamic loading via URL query param

**How it works:**
- Click any work card → opens `project-detail.html?id=X`
- JS reads `?id=X` from URL, finds matching project, populates the page
- "NEXT PROJECT" cycles through all 6 projects (6 loops back to 1)
- "BACK TO WORK" links to `index.html#work`

**Layout:** Dark background (`#1A1A1A`), orbit animation, split grid (0.8fr left info / 1.2fr right image), responsive for mobile.

### 2. Service Detail Page (Services Section)

**Files modified:**
- `dotnekt v14/index.html` — Service cards now link to `service-detail.html?id=1` through `?id=5`
- `dotnekt v14/service-detail.html` — New file, same split layout as project detail
- `dotnekt v14/css/service-detail.css` — New dark theme CSS
- `dotnekt v14/js/main.js` — Added service data array + dynamic loading

**How it works:**
- Click any service card → opens `service-detail.html?id=X`
- Same pattern as project detail — JS reads query param, loads data
- "NEXT SERVICE" cycles through all 5 services
- "BACK TO SERVICES" links to `index.html#services`

## Project Data (in main.js)

### Projects (6 items)
| ID | Title | Category |
|----|-------|----------|
| 1 | NKS GAMING GOs | BRANDING |
| 2 | RVS LOADERS | BRANDING |
| 3 | SHADOW LEGENDS | CONTENT |
| 4 | NKS BLACKWORKS | BRANDING |
| 5 | PROJECT CHAOS | VIDEO EDIT |
| 6 | KETHU'S CHAOS | VISUAL IDENTITY |

### Services (5 items)
| ID | Title | Tagline |
|----|-------|---------|
| 1 | BRANDING | Identities that stand out and stick. |
| 2 | WEB DESIGN | Websites that look great and work smart. |
| 3 | VIDEO / CONTENT | Stories that move, engage and inspire. |
| 4 | DEVELOPMENT | Clean, fast and future ready. |
| 5 | STRATEGY | Ideas backed by thinking and research. |

## Structure

```
dotnekt v14/
├── index.html                  (main page — links to detail pages)
├── project-detail.html         (one page for all projects, dynamic via ?id=X)
├── service-detail.html         (one page for all services, dynamic via ?id=X)
├── css/
│   ├── styles.css
│   ├── hero.css
│   ├── about.css
│   ├── services.css
│   ├── connect.css
│   ├── work.css
│   ├── contact.css
│   ├── project-detail.css      (new)
│   └── service-detail.css      (new)
├── js/
│   └── main.js                 (updated with project + service data)
├── images/
│   └── (all images)
└── assets/
    └── (orbit video, logo mascot, character origami)
```

## Key Notes

- **One HTML per detail type** — no multiple HTMLs like v13 had (project1.html, project2.html, etc.)
- **Dynamic loading** — JS reads `?id=X` from URL query params, no page reloads needed
- **Data arrays** in `main.js` — easy to add/edit projects and services
- **Consistent layout** — both detail pages use same split layout + orbit animation
- **Responsive** — mobile view stacks layout vertically

## To Add New Projects/Services

Add entry to the `projects` or `services` array in `main.js`:
```js
{
    id: 7,
    label: '07 / CATEGORY',
    title: 'TITLE<br>SUBTITLE',
    category: 'CATEGORY / SUBCATEGORY',
    about: 'Description text...',
    services: 'Service 1<br>Service 2<br>Service 3',
    image: 'images/filename.jpeg',
    nextId: 1,
    nextTitle: 'NEXT TITLE'
}
```

Then add matching card in `index.html`:
```html
<a href="project-detail.html?id=7" class="work-card">
    <img src="images/filename.jpeg" alt="Title">
    <div class="work-overlay">
        <span class="work-category">CATEGORY</span>
        <span class="work-name">TITLE</span>
    </div>
</a>
```

## Previous Session Context

- Working on `dotnekt v14` folder (NOT the portfolio React app)
- v13 had separate HTML files per project (project1.html, project2.html, etc.)
- v14 uses one HTML + JS dynamic loading — cleaner approach
- Design reference: dark theme, split layout, orbit animation, DOTNEKT branding
