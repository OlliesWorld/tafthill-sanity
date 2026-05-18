# Tailwind v4 Redesign Implementation Plan

## Goal
Implement the Variation B final design from the public design files and migrate the site to Tailwind v4 as the styling foundation.

## Scope For This Pass
1. Tailwind v4 migration.
2. Shared layout and navigation redesign.
3. Home page redesign in the new visual language.

## Source Of Truth
1. src/styles/global.css — design tokens (colors, fonts)
2. src/layouts/Layout.astro — shell
3. src/pages/*.astro — implemented pages

> Design exploration files (taft-design.html, home-b-final.jsx, home-b-pages.jsx) have been deleted. The implemented Astro pages are now the source of truth.

## Phase Breakdown

### Phase 1: Tailwind v4 Foundation — ✅ Complete
1. Migrate dependencies from Tailwind 3 to Tailwind 4.
2. Replace legacy Astro Tailwind integration with the Tailwind v4 Vite plugin.
3. Move theme primitives to CSS tokens in src/styles/global.css.
4. Preserve required custom utilities used by existing pages.

### Phase 2: Shared Shell — ✅ Complete
1. Build an accessible header with desktop and mobile navigation.
2. Add skip link and strong focus-visible states.
3. Align footer to the new visual language and simplify legacy animation-heavy styles.

### Phase 3: Home Page — ✅ Complete
1. Recompose the home page sections based on Variation B final:
- Split hero section
- Metrics row
- Priority story section
- Feature cards grid
- CTA sections
2. Reuse current JSON data where possible.

### Phase 4: Interior Pages — ✅ Complete

1. About, Facility, Training, Testimonials, Contact, Thanks, 404 all redesigned in Variation B visual language.
2. All pages use shared design tokens from global.css.

### Phase 5: QA — ✅ Complete
1. Keyboard navigation and focus visibility checks.
2. Contrast and semantic structure checks.
3. Desktop and mobile visual review against the artboards.
4. Build and lint verification.

## Notes
1. All 8 pages are implemented and building cleanly.
2. Design exploration files deleted — src/ is now the source of truth.
3. All image paths migrated to public/images/site/.
4. Testimonials slider component preserved by request.
