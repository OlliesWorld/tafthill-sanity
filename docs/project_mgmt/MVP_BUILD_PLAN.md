# Taft Hill Acres MVP Build Plan

Document version: 2026-05-10
Scope: Static Astro marketing site improvements

## Current Baseline

Completed:

1. Sanity CMS removed.
2. Content migrated to local JSON files in src/data.
3. Site converted to static output.
4. Astro upgraded to latest 5.x.

Open major phase:

1. Tailwind v4 migration.

## Iterative Plan

### Sprint 1: Documentation + Platform Hygiene

Goal: Align docs and runtime configuration with current architecture.

Tasks:

1. Replace imported unrelated docs with project-accurate docs.
2. Align Node version in netlify.toml with package.json engine.
3. Review/remove unnecessary catch-all redirect for static routing.
4. Update README to reflect Astro static architecture.

Done when:

1. Docs describe this project only.
2. Build runs consistently locally and in Netlify environment.

### Sprint 2: Tailwind v4 Upgrade

Goal: Move styling stack from Tailwind 3 to Tailwind 4 safely.

Tasks:

1. Upgrade tailwindcss and related integration/plugin dependencies.
2. Update CSS entry strategy for Tailwind v4 requirements.
3. Migrate or replace custom utilities currently defined in tailwind.config.cjs.
4. Validate class behavior across all pages.
5. Remove obsolete build script/config once migration is complete.

Done when:

1. npm run build passes.
2. Visual regression spot-check passes on all key routes.
3. No Tailwind deprecation warnings remain.

### Sprint 3: Performance and Accessibility Pass

Goal: Improve UX quality and maintainability after migration.

Tasks:

1. Optimize high-weight images and verify lazy loading strategy.
2. Add/verify meaningful alt text across content images.
3. Validate heading hierarchy and keyboard navigation.
4. Run Lighthouse checks (mobile + desktop) and capture baseline scores.

Done when:

1. No major accessibility issues in manual spot checks.
2. Performance score improves or remains stable post-upgrade.

### Sprint 4: Content Editing Workflow Hardening

Goal: Make local JSON editing safer and clearer.

Tasks:

1. Define lightweight JSON schema expectations in docs.
2. Add validation script for src/data/*.json shape checks.
3. Add pre-build check to fail early on malformed content files.

Done when:

1. Invalid data is caught before deploy.
2. Content updates are low-risk for non-dev edits.

## Delivery Checklist

1. npm run build passes after each sprint.
2. Critical routes visually verified:
   - /
   - /about
   - /facility
   - /training
   - /testimonials
   - /contact
   - /thanks
3. Changes deployed to staging before production.

## Risks and Mitigations

1. Tailwind v4 utility behavior differences: run route-by-route visual QA.
2. Large static image footprint: compress and resize source images.
3. Config drift between local/Netlify: keep Node versions aligned and explicit.
