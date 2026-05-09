# CLAUDE.md — Project Context for Claude Code

This file tells Claude Code everything it needs to know about this project.
Read this before making any changes.

---

## Who This Is For

This is the personal portfolio website of Jiayi (Johnny) Li — undergraduate
researcher, CS/Biology student at University of Toronto transferring to
Northwestern University. The site is primarily a resume-forward portfolio
showcasing research, publications, work experience, and projects.

---

## Tech Stack

- HTML5 (single page, semantic landmarks)
- CSS3 (custom properties drive theming; no preprocessor)
- Vanilla JavaScript (ES2020+ in the browser; no modules, no transpilation)
- Typed.js (typewriter effect in the hero, loaded via CDN script tag)
- AOS — Animate On Scroll (scroll reveal via `data-aos` attributes, loaded via CDN)
- Google Fonts (JetBrains Mono + Inter, loaded via CDN `<link>`)

No build tools. No npm. No bundler. No backend. No database. No framework
(React/Vue/Svelte). No Three.js. No router (single page, scroll-based).
The site runs by opening `portfolio/index.html` in a browser.

---

## Project Structure

```
portfolio/
  index.html        Single page, all sections (semantic <section> per area)
  style.css         All styles — design tokens, layout, components, responsive
  script.js         CONTENT data + render functions + init/UI functions
  assets/
    resume.pdf      Updated by dropping a new file here
    profile.jpg     Optional profile photo
README.md           Run / customize / deploy guide for Johnny
CLAUDE.md           This file
```

There is no `src/`, no `public/`, no `dist/`. The `portfolio/` folder is the
deployable site, served as static files.

---

## The Golden Rule

ALL content (names, bullet points, dates, links, descriptions) lives in
the `CONTENT` object at the **top of `portfolio/script.js`**.
Render functions only read from `CONTENT` — they never hardcode strings.
The HTML contains layout containers and headings only; section bodies are
populated at runtime by render functions.
If you need to add or change any displayed text, do it in the `CONTENT` object.

---

## script.js Conventions

`script.js` is organized in this order, top to bottom:

1. `CONTENT` — the single editable data object. Everything Johnny edits.
2. Small helpers (`$`, `$$`, `el`, `escapeHtml`).
3. `render*` functions — one per section: `renderHero`, `renderAbout`,
   `renderResearch`, `renderPublications`, `renderWork`, `renderProjects`,
   `renderSkills`, `renderAchievements`, `renderContact`.
4. `init*` functions — wire up UI behavior: `initParticles`, `initNav`,
   `initThemeToggle`, `initTyped`, `initProjectFilters`, `initCopyCitation`,
   `initSkillBars`.
5. `init()` — single DOMContentLoaded entry point that calls everything.

Each function has a one-line comment above it. Magic numbers (particle count,
animation durations, IntersectionObserver thresholds) carry inline comments
explaining what they control.

Always sanitize content data through `escapeHtml()` before injecting via
`innerHTML`, since the source data lives in `CONTENT` and could contain
characters that look like markup.

Always clean up side effects in observers and animation loops. The particle
loop pauses itself when the hero scrolls offscreen (via IntersectionObserver)
to save CPU.

---

## Styling Conventions

- Plain CSS in `style.css`, no preprocessor, no utility framework.
- CSS custom properties (`--accent`, `--bg`, `--text`, etc.) defined in `:root`
  drive the entire palette. Dark/light mode swaps the values via a
  `body.light-mode` rule block — there is no per-component dark variant.
- Standard card style is the `.card` class:
  `background: var(--bg-card); border: 1px solid var(--border-soft);
   border-radius: var(--radius); transition: transform/background/shadow;`
  Hover lifts with `translateY(-4px)` and adds `var(--shadow)`.
- Typography: JetBrains Mono for headers, code-flavored UI bits, and labels;
  Inter for body copy.
- Responsive breakpoints: `@media (max-width: 900px)` collapses 3-column
  layouts to 1, `768px` triggers the mobile nav and single-column timeline,
  `380px` tightens the hero CTA stack.
- `prefers-reduced-motion` is honored — all animations and transitions
  shrink to ~0ms when the user has the OS setting enabled.

---

## Dark / Light Mode

Toggle button is in the nav (`#theme-toggle` in `index.html`).
`initThemeToggle()` in `script.js`:
- On load, reads `localStorage.getItem('jl-portfolio-theme')` and adds the
  `.light-mode` class to `<body>` if the saved value is `"light"`.
- Click flips the class and writes `'light'` or `'dark'` back to localStorage.

Dark mode is the default (no class on `<body>`).
Light mode is `body.light-mode` — the class lives on `<body>`, not `<html>`.

---

## GitHub Pages Deployment

The site deploys directly to GitHub Pages with no build step:

1. Push the repo to GitHub.
2. **Settings → Pages → Source: `main` branch, `/` (root)** — or set Source
   to a path that points at the `portfolio/` folder if you want to serve
   only that subfolder.
3. The site goes live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

There is no `npm run build`, no `gh-pages` package, no `dist/` output.
The files in `portfolio/` are the deployed site.

If you want a custom domain, add a `CNAME` file at the served root with the
domain on a single line and configure DNS to point at GitHub Pages.

---

## Canvas Particle Background (Hero)

The hero background is a plain HTML5 `<canvas id="hero-canvas">` element
(no Three.js, no library). It is initialized by `initParticles()` in
`script.js` using the canvas 2D API.

The canvas has `pointer-events: none` and `position: absolute` so it never
blocks clicks or scrolling. An IntersectionObserver pauses the animation
loop when the hero scrolls offscreen.

Key variables (edit at the top of `initParticles()` to tweak appearance):
- `PARTICLE_COUNT` — number of dots (default: 60)
- `MAX_DIST` — connection-line distance threshold in px (default: 130)
- `COLOR` — RGB string matching `--accent` (default: `"0, 212, 170"`)
- Particle drift speed is `(Math.random() - 0.5) * 0.4` per axis — change
  the `0.4` to make them faster/slower.

If you change the accent color in CSS, also update `COLOR` here so the dots
stay in sync.

---

## How to Add a New Section

1. Add a new key to the `CONTENT` object in `script.js` with the section's data.
2. Add a `<section id="newsection" class="section">` block in `index.html`
   with a `.section-inner` wrapper, a `.section-header` (number + h2),
   and an empty container element with a unique id.
3. Write a `renderNewSection()` function in `script.js` that reads from
   `CONTENT.newsection` and populates the container. Call it from `init()`.
4. Add a nav link in `index.html` under `#nav-links` pointing to `#newsection`.
   Scroll-spy in `initNav()` picks up new sections automatically.

---

## How to Update Content

Edit the `CONTENT` object at the top of `portfolio/script.js`. It is the
single source of truth. Each key maps to a section:

```
CONTENT.hero          -> Hero, nav social icons, contact button
CONTENT.about         -> About bio + hockey callout
CONTENT.research      -> Research timeline
CONTENT.publications  -> Publications list
CONTENT.work          -> Work experience cards
CONTENT.projects      -> Project cards + filter buttons
CONTENT.achievements  -> Achievements grouped by category
CONTENT.skills        -> Hex grid (programming + tools), lab chain, languages
```

---

## Common Tasks

**Add a new research position:**
Open `script.js`, copy any object inside `CONTENT.research`, paste at the
top of the array (newest first), fill in all fields. Save and refresh.

**Add a GitHub link:**
Set `CONTENT.hero.links.github` to the full URL. Empty strings are skipped
and the icon is not rendered.

**Swap the resume PDF:**
Replace `portfolio/assets/resume.pdf`. Keep the exact filename so the
"Download Resume" button keeps working without code changes.

**Add a profile photo:**
Put the photo at `portfolio/assets/profile.jpg`. Confirm
`CONTENT.hero.profileImage` is set to `"assets/profile.jpg"`. If the file
is missing, the avatar falls back to the initials "JL" on a gradient.

**Change the accent color:**
Update `--accent` (and `--accent-dim`, `--border`) in the `:root` block of
`style.css`, then update `COLOR` inside `initParticles()` in `script.js`
so the canvas dots match.

**Add a new tech tag for project filtering:**
Add the tag to the relevant project's `tech` array in `CONTENT.projects`.
The filter button row in `initProjectFilters()` is generated from the union
of all tags across all projects, so no other change is needed.
