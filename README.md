# Telemex Landing

The canonical, framework-free marketing site for Telemex — the modular HMIS for
hospitals and laboratories.

This repo is the dedicated home of the landing page. `platform/telemex-landing`
is historical source only; do not push new landing updates there.

## Launch status

- **Hospital** — Available now.
- **Laboratory** — Available now.
- **Hospital Pharmacy** — Coming soon.
- **Inpatient, radiology, managed imaging, HMO** — Coming soon.
- **Reporting** — Included in packages, in configuration.

See [HANDOFF.md](HANDOFF.md) for the full HMIS launch plan, readiness matrix,
copy deck, design tokens, motion guidance and acceptance criteria.

## Preview locally

Run a static server in this directory, for example:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Files

- `index.html` — content, metadata, structured data, and demo form
- `styles.css` — responsive Telemex design system
- `script.js` — navigation, tabs, brand preview, FAQ, form, and reveal behaviour
- `privacy.html` and `terms.html` — legal pages
- `robots.txt` and `sitemap.xml` — search crawler support
- `og.png` — social sharing preview
- `HANDOFF.md` — HMIS launch handoff for the next implementation agent

Before production launch, replace the canonical domain and contact email if the
final Telemex domain differs from `telemex.health`.

## HubSpot demo form

The `#demo-form` submits to HubSpot via the Forms Submission API (EU1 shard):

- **Portal ID:** `147554530`
- **Form ID:** `c1dbe6fd-a16f-48df-be26-c664d2e22bd9`
- **Endpoint:** `https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}` — the EU subdomain is required; never use `api.hsforms.com`
- **Field internal names:** `full_name`, `email`, `hospital_or_health_system`, `your_role`, `tell_us_about_your_consultation_workflow__teams__governance__or_current_system`
- **Config location:** constants at the top of the demo-form block in `script.js` (`HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID`)

`legalConsentOptions` sends GDPR-style consent-to-process text (no
`communications` array — HubSpot expects numeric subscription type IDs there).

### Portal-side notes

- The form previously had Captcha (SPAM prevention) enabled, which made the
  Forms Submission API reject all requests (`FORM_HAS_RECAPTCHA_ENABLED`). This
  has been disabled in the portal and submissions now return HTTP 200.
- The contact's name field is a single custom field with internal name
  `full_name` (not HubSpot's default `firstname`/`lastname` pair).
- The embed snippet (`js-eu1.hsforms.net/forms/embed/147554530.js` +
  `.hs-form-frame` div) remains an alternative that renders HubSpot's own form
  UI instead of the page's custom `#demo-form`.
- Portal-side captcha is disabled, so the page implements its own lightweight
  spam protection in `script.js`: a hidden `website` honeypot field and a
  3-second minimum time-to-submit check. Bot submissions are rejected silently
  (they see the success message; nothing reaches HubSpot) and logged to the
  console.

## Deploy

This is a static site. Deploy the repository root to the existing static host.
If the host requires a build step, do not add one unless the host cannot serve
static files directly; the site is intentionally framework-free.
