# Telemex landing page

A standalone, framework-free marketing site for Telemex, the consultation-native hospital EMR. Built with semantic HTML, handcrafted CSS, and vanilla JavaScript.

## Preview locally

Run a static server in this directory, for example:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Files

- `index.html` — content, metadata, and structured data
- `styles.css` — responsive Telemex design system
- `script.js` — navigation, tabs, brand preview, FAQ, modal, and form behaviour
- `robots.txt` and `sitemap.xml` — search crawler support
- `og.png` — social sharing preview

Before production launch, replace the canonical domain and contact email if the final Telemex domain differs from `telemex.health`.

## HubSpot demo form

The `#demo-form` submits to HubSpot via the Forms Submission API (EU1 shard):

- **Portal ID:** `147554530`
- **Form ID:** `c1dbe6fd-a16f-48df-be26-c664d2e22bd9`
- **Endpoint:** `https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}` — the EU subdomain is required; never use `api.hsforms.com`
- **Field internal names:** `full_name`, `email`, `hospital_or_health_system`, `your_role`, `tell_us_about_your_consultation_workflow__teams__governance__or_current_system`
- **Config location:** constants at the top of the demo-form block in `script.js` (`HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID`)

`legalConsentOptions` sends GDPR-style consent-to-process text (no `communications` array — HubSpot expects numeric subscription type IDs there).

### Portal-side notes

- The form previously had Captcha (SPAM prevention) enabled, which made the Forms Submission API reject all requests (`FORM_HAS_RECAPTCHA_ENABLED`). This has been disabled in the portal and submissions now return HTTP 200.
- The contact's name field is a single custom field with internal name `full_name` (not HubSpot's default `firstname`/`lastname` pair).
- The embed snippet (`js-eu1.hsforms.net/forms/embed/147554530.js` + `.hs-form-frame` div) remains an alternative that renders HubSpot's own form UI instead of the page's custom `#demo-form`.
- Portal-side captcha is disabled, so the page implements its own lightweight spam protection in `script.js`: a hidden `website` honeypot field and a 3-second minimum time-to-submit check. Bot submissions are rejected silently (they see the success message; nothing reaches HubSpot) and logged to the console.
