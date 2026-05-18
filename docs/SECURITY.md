# Taft Hill Acres Security

This document covers the actual security posture of the Taft Hill Acres site in this repository.

## Current Architecture

- Static Astro site (no authentication system, no database, no backend business API)
- Deployment target: Netlify static hosting
- Contact submissions: Netlify Forms (HTML form post)
- Images: local project assets under public/images

## Attack Surface

Primary exposed surface is small:

- Public static pages under src/pages
- Contact form on src/components/Form.astro posting to /thanks
- Build/deploy pipeline and repository secret management

No server-side user session, payment, AI, or database attack surface currently exists in this repo.

## Existing Controls

### Static Delivery

- Pages are prebuilt and served as static files, reducing runtime server attack vectors.
- There are no custom API endpoints in use.

### Form Bot Friction

- Contact form uses Netlify honeypot via netlify-honeypot="bot-field" and hidden input.
- Form action posts to /thanks, avoiding client-side secret handling.

### Dependency and Tooling Baseline

- Node engine is pinned in package.json to >=20.x.
- ESLint and TypeScript checks are present to reduce accidental unsafe changes.

## Gaps and Risks

### Missing Security Headers in Netlify Config

netlify.toml does not currently define headers such as:

- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security

Impact: browser hardening relies on platform defaults rather than explicit policy.

### Node Version Mismatch

- netlify.toml sets NODE_VERSION = 18
- package.json requires Node >=20.x

Impact: build differences and potential dependency/runtime incompatibility.

### Redirect Rule Behavior

Current catch-all redirect in netlify.toml:

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

Impact: useful for SPA routing, but this site is file-routed/static and this can mask missing-route behavior.

## Recommended Hardening Actions

1. Add explicit security headers in netlify.toml.
2. Align Netlify NODE_VERSION with package.json engine (use Node 20).
3. Review whether SPA-style catch-all redirect is still required for this Astro static routing setup.
4. Add form-level server-side validation controls in Netlify dashboard (spam filtering/notifications) and monitor submissions.
5. Add dependency scanning in CI (npm audit or GitHub Dependabot alerts).

## Incident/Disclosure Guidance

If you discover a security issue:

1. Do not post details in a public issue.
2. Notify the project owner privately with reproduction steps.
3. Include impact, affected files/routes, and suggested remediation.
4. Coordinate fix and deploy before public disclosure.

## Security Checklist

- [ ] Security headers configured in netlify.toml
- [ ] Netlify Node version aligned to 20+
- [ ] Redirect strategy reviewed for static routing
- [ ] Netlify Forms spam controls configured
- [ ] Dependency vulnerability alerts enabled
