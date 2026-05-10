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
The site runs by opening `index.html` in a browser.

---

## Project Structure

```
index.html          Single page, all sections (semantic <section> per area)
style.css           All styles — design tokens, layout, components, responsive
script.js           CONTENT data + render functions + init/UI functions
assets/
  resume.pdf        Updated by dropping a new file here
  profile.jpg       Profile photo
  northwestern_logo.png   Northwestern University logo (used in Education cards)
  uoft_logo.png     University of Toronto logo (used in Education cards)
README.md           Run / customize / deploy guide for Johnny
CLAUDE.md           This file
```

There is no `src/`, no `public/`, no `dist/`, and no `portfolio/` subdirectory.
All files sit at the repo root and are the deployable site as-is.

---

## The Golden Rule

ALL content (names, bullet points, dates, links, descriptions) lives in
the `CONTENT` object at the **top of `script.js`**.
Render functions only read from `CONTENT` — they never hardcode strings.
The HTML contains layout containers and headings only; section bodies are
populated at runtime by render functions.
If you need to add or change any displayed text, do it in the `CONTENT` object.

---

## script.js Conventions

`script.js` is organized in this order, top to bottom:

1. `CONTENT` — the single editable data object. Everything Johnny edits.
2. Small helpers (`$`, `$$`, `el`, `escapeHtml`) and `ICON_PATHS` (shared SVG path data).
3. `render*` functions — one per section: `renderHero`, `renderAbout`,
   `renderEducation`, `renderResearch`, `renderPublications`, `renderWork`,
   `renderProjects`, `renderSkills`, `renderAchievements`, `renderContact`.
4. `init*` functions — wire up UI behavior: `initTyped`, `initNav`,
   `initProjectFilters`, `initSkillFilters`, `initCopyCitation`.
5. `init()` — single DOMContentLoaded entry point that calls everything.

Each function has a one-line comment above it. Magic numbers (particle count,
animation durations, IntersectionObserver thresholds) carry inline comments
explaining what they control.

Always sanitize content data through `escapeHtml()` before injecting via
`innerHTML`, since the source data lives in `CONTENT` and could contain
characters that look like markup.

Always clean up side effects in observers and animation loops.

---

## Styling Conventions

- Plain CSS in `style.css`, no preprocessor, no utility framework.
- CSS custom properties (`--accent`, `--bg`, `--text`, etc.) defined in `:root`
  drive the entire palette. The site is **light mode only** (white background,
  dark text); there is no `body.dark-mode` rule or per-component variant.
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

Light mode is the **only** mode — there is no theme toggle in the current
codebase. `initThemeToggle()` and `#theme-toggle` have been removed. The
palette is entirely driven by the CSS custom properties in `:root`
(`--bg: #ffffff`, `--text: #1c1917`, etc.).

If you want to add a dark-mode toggle in the future, re-implement
`initThemeToggle()` and add `#theme-toggle` to the `nav-controls` div in
`index.html`, then define a `body.dark-mode` override block in `style.css`.

---

## GitHub Pages Deployment

The site deploys directly to GitHub Pages with no build step:

1. Push the repo to GitHub.
2. **Settings → Pages → Source: `main` branch, `/` (root)**.
3. The site goes live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

There is no `npm run build`, no `gh-pages` package, no `dist/` output.
All files are at the repo root and are the deployed site.

If you want a custom domain, add a `CNAME` file at the served root with the
domain on a single line and configure DNS to point at GitHub Pages.

---

## Canvas Particle Background (Hero)

The canvas particle background has been **removed** from the codebase.
`initParticles()` no longer exists and there is no `<canvas id="hero-canvas">`
in `index.html`. The hero section is a plain full-viewport `<section id="hero">`
with no animated background.

---

## How to Add a New Section

1. Add a new key to the `CONTENT` object in `script.js` with the section's data.
2. Add a `<section id="newsection" class="section">` block in `index.html`
   with a `.section-inner` wrapper, a `.section-header` (number + h2),
   and an empty container element with a unique id. Update the
   `<span class="section-num">` on all subsequent sections to keep numbering
   sequential (current sections: 01 About → 02 Education → 03 Research →
   04 Publications → 05 Work → 06 Projects → 07 Skills → 08 Achievements →
   09 Contact).
3. Write a `renderNewSection()` function in `script.js` that reads from
   `CONTENT.newsection` and populates the container. Call it from `init()`.
4. Add a nav link in `index.html` under `#nav-links` pointing to `#newsection`.
   Scroll-spy in `initNav()` picks up new sections automatically.

---

## How to Update Content

Edit the `CONTENT` object at the top of `script.js`. It is the
single source of truth. Each key maps to a section:

```
CONTENT.hero            -> Hero, nav social icons, contact button
CONTENT.about           -> About bio + hockey callout
CONTENT.education       -> Education cards (university, logo, degree, courses, GPA)
CONTENT.research        -> Research timeline
CONTENT.publications    -> Publications list
CONTENT.projectFilters  -> Ordered list of filter button labels (e.g. ["All","Python","R"])
CONTENT.projects        -> Project cards (each card has a `language` field that must
                           match a label in projectFilters for filtering to work)
CONTENT.achievements    -> Achievements grouped by category
CONTENT.skills          -> Programming sub-grid, lab pill chain, spoken language bars
  CONTENT.skills.filters        -> Tab labels ["Programming","Lab Techniques","Languages"]
  CONTENT.skills.programming    -> { languages, frameworks, devTools, libraries }
  CONTENT.skills.lab            -> flat array of lab technique strings
  CONTENT.skills.spoken         -> [{ lang, level, pct }] — pct drives the bar width
```

---

## Common Tasks

**Add a new research position:**
Open `script.js`, copy any object inside `CONTENT.research`, paste at the
top of the array (newest first), fill in all fields. Save and refresh.

**Add a new education entry:**
Copy any object inside `CONTENT.education`, paste at the top of the array
(newest first), fill in `university`, `logo`, `location`, `degree`, `start`,
`end`, `gpa`, and `courses`. Drop the logo image at `assets/<filename>` and
set the `logo` field to that path. If the file is missing, the card falls
back to the university's initials (first capital letter of each word, max 2).

**Add a GitHub link:**
Set `CONTENT.hero.links.github` to the full URL. Empty strings are skipped
and the icon is not rendered.

**Swap the resume PDF:**
Replace `assets/resume.pdf`. Keep the exact filename so the
"Download Resume" button keeps working without code changes.

**Add a profile photo:**
Put the photo at `assets/profile.jpg`. Confirm
`CONTENT.hero.profileImage` is set to `"assets/profile.jpg"`. If the file
is missing, the avatar falls back to the initials "JL" on a gradient.

**Change the accent color:**
Update `--accent` (and `--accent-dim`, `--border`) in the `:root` block of
`style.css`. There is no canvas particle system to keep in sync.

**Add a new project filter button:**
1. Add the label to `CONTENT.projectFilters` (e.g. `"TypeScript"`).
2. Set the `language` field on any projects that should match that filter.
   Filtering compares `card.dataset.language === tag`, so `language` must be
   an exact string match to the filter label. The `tech` array is for display
   chips only and does not affect filtering.
