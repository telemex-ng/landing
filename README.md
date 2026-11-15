# Telemex Landing

The canonical, framework-free marketing site for Telemex — the modular HMIS for
hospitals and laboratories.

This repo is the dedicated home of the landing site. `platform/telemex-landing`
is historical source only; do not push new landing updates there.

## Structure

The site is a multi-page static site, not a single long landing page.

| Page | Role |
|---|---|
| `index.html` | Home — positioning, platform pillars, department stack, journey rail, packages, governance teaser |
| `platform.html` | Platform — department flows, clinical core, laboratory, finance, live capabilities |
| `packages.html` | Packages — Hospital, Laboratory, Hospital Pharmacy and the module matrix |
| `solutions.html` | Solutions — clinical, laboratory, operations and finance views |
| `governance.html` | Governance — roles, audit, consent, offline behaviour, and what we do not claim |
| `about.html` | Company — the EMR-to-HMIS path, working principles, deployment model |
| `contact.html` | Demo request — HubSpot form, preserved field names |
| `privacy.html`, `terms.html` | Legal pages, shared header and footer |

Shared assets: `styles.css` (design system and components) and `script.js`
(motion, tabs, rail, form).

## Design direction

- Warm ivory paper, deep forest, lime accent, clay for emphasis.
- Fraunces for display type, Instrument Sans for body and UI.
- Paper-grain overlay, gradient washes, hairline rules, generous section rhythm.
- Motion is progressive enhancement: masked headline reveals, scroll parallax,
  sticky stacking panels, a pinned horizontal rail, marquee, and counters. All of
  it is disabled under `prefers-reduced-motion: reduce` and the page remains
  readable with JavaScript off (content is in the HTML; only the rail translates).

## Launch status

- **Hospital** — Available now.
- **Laboratory** — Available now.
- **Hospital Pharmacy** — Coming soon.
- **Inpatient, radiology, managed imaging, HMO** — Coming soon.
- **Reporting** — Included in packages, in configuration.

`HANDOFF.md` remains as planning history. Its visual and layout instructions have
been superseded by the current build; its claims matrix is still the source of
truth for what may be said about each package.

## Preview locally

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## HubSpot demo form

`#demo-form` on `contact.html` submits to the HubSpot Forms API (EU1 shard):

- **Portal ID:** `147554530`
- **Form ID:** `c1dbe6fd-a16f-48df-be26-c664d2e22bd9`
- **Endpoint:** `https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}` — never `api.hsforms.com`
- **Field internal names:** `full_name`, `email`, `hospital_or_health_system`, `your_role`, `tell_us_about_your_consultation_workflow__teams__governance__or_current_system`
- **Config location:** `HUBSPOT_PORTAL_ID` / `HUBSPOT_FORM_ID` in `script.js`

The package-interest selector is UI only; its value is prefixed into the existing
free-text field on submit so the HubSpot property mapping is unchanged. Spam
protection is a hidden `website` honeypot plus a three-second time-to-submit check.

## Deploy

The site is served by a **Cloudflare Worker with static assets** on
`telemex.com.ng` and `www.telemex.com.ng`. There is no build step: the repository
root *is* the site, and `wrangler.jsonc` uploads it as-is.

Continuous deployment runs through **Cloudflare Workers Builds**, connected to
`telemex-ng/landing`:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | *(empty)* |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

Every push to `main` publishes to the live domain. Builds from any other branch
get a preview URL on `*.workers.dev` and never touch production.

`.assetsignore` keeps repository-only files (`README.md`, `HANDOFF.md`, the
Workers config) out of the uploaded bundle, so they are not publicly readable.
`_headers`, `_redirects` and dotfiles are never served.

`wrangler.jsonc` is the single source of truth for the deployment. `name` must
stay `landing`, which is the Worker the custom domains are attached to. To deploy
by hand:

```sh
npx wrangler deploy
```

`wrangler.jsonc` uses Cloudflare's default HTML handling, which means
`/platform.html` redirects to `/platform`. Canonical links, OG URLs and
`sitemap.xml` therefore all use the extensionless form, which returns `200`
directly.

## Product screenshots

The hero visuals on the home, platform, packages, solutions and governance pages
are real captures of the app in `clinic/`, exported to `assets/screens/*.webp`
(2200px wide, 2x source). They were taken against a throwaway copy of the local
development database, seeded with fictional demo patients, so no real records
appear. The remaining small UI panels are drawn in HTML/CSS.

To refresh a capture, run the app locally (`core`: `PORT=4000 go run ./cmd/api`,
`clinic`: `pnpm dev`), sign in at `/staff/login`, then capture at 1512×945 with
a 2x device scale factor and export to WebP.
