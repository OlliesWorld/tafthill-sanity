# Taft Hill Acres — Design Specification

Document version: 2026-05-12
Status: Implemented

## Product Overview

Taft Hill Acres is a static marketing site for a Fort Collins, Colorado horse boarding facility owned by Megan and Rene Lizarraga. The site presents facility information, trainer profiles, boarder testimonials, and a contact form.

Target audience: Horse owners in the Fort Collins / Northern Colorado area seeking boarding, with secondary interest from riders looking for trainers.

## Design System — Variation B Final

### Color Tokens (CSS custom properties in src/styles/global.css)

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-ink` | `#1a1f1b` | Body text, headings |
| `--color-brand-muted` | `#46494b` | Secondary/supporting text |
| `--color-brand-bg` | `#faf8f2` | Page background |
| `--color-brand-soft` | `#efebe0` | Section alternating background |
| `--color-brand-green` | `#3f5d4a` | Primary CTA, accents, eyebrow labels |
| `--color-brand-green-deep` | `#27392e` | CTA hover state |
| `--color-green` | `#1b2911` | Dark green sections (hero banners) |
| `--color-tan` | `#ecebe8` | Subtle UI surfaces |
| `--color-darktan` | `#916033` | Legacy token (preserved for Tailwind compat) |

### Typography

| Role | Font | Style |
|---|---|---|
| Body, UI labels | DM Sans | Regular / Medium / Semibold |
| Display headings | DM Sans | Medium, tight tracking (-0.035em) |
| Italic accents | Cormorant Garamond | Italic, normal weight |

Loaded via Google Fonts in Layout.astro.

### Spacing / Layout Conventions

- Page sections: `px-6 py-16 sm:px-10 lg:px-16 lg:py-20`
- Content max-width: `max-w-6xl mx-auto` (inner sections) / `max-w-7xl` (header/footer)
- Hero rounded pill image: `rounded-[10rem_1.25rem_1.25rem_1.25rem]`
- Eyebrow labels: `text-xs font-bold uppercase tracking-[0.08em] text-brand-green`

### Components

| Component | File | Notes |
|---|---|---|
| Layout shell | `src/layouts/Layout.astro` | Skip link, Google Fonts, body bg |
| Header | `src/components/Header.astro` | Sticky, mobile hamburger, desktop CTA |
| Navigation | `src/components/Navigation.astro` | `aria-current="page"` active state |
| Footer | `src/components/Footer.astro` | 3-col grid, Facebook link |
| Contact form | `src/components/Form.astro` | Netlify Forms, sr-only labels |
| Testimonial slider | `src/components/Slider.astro` | CSS-animated image carousel |

### Page Inventory

| Route | File | Hero pattern |
|---|---|---|
| `/` | `index.astro` | Split hero + metrics bar |
| `/about` | `about.astro` | Split hero + alternating content + gallery |
| `/facility` | `facility.astro` | Split hero + numbered facility rows |
| `/training` | `training.astro` | Full-bleed image hero + alternating trainer cards |
| `/testimonials` | `testimonials.astro` | Text hero + image slider |
| `/contact` | `contact.astro` | Text hero + 2-col form / address |
| `/thanks` | `thanks.astro` | Centered confirmation + image |
| `/404` | `404.astro` | Centered serif 404 + CTA |
