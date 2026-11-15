# Telemex Landing — HMIS Launch Handoff

- **Status:** `READY FOR EXECUTION`
- **Date:** 13 November 2026
- **Launch target:** Today — ship the minimum credible HMIS rebrand first, then polish.
- **Working directory:** `landing`
- **Owner:** Landing/product
- **Audience:** The next implementation agent. Read this file end to end before editing.

---

## 0. Read this first

The live landing page still sells Telemex as a **consultation-native EMR**. That is now too narrow. Telemex is a **modular HMIS platform** with Hospital and Laboratory packages available now, and more modules coming soon.

Your job is to make the site say that clearly, honestly, and at the visual quality level of the existing Telemex brand — not to rebuild the site.

Three rules override everything else:

1. **Do not overclaim.** If it is not in the launch matrix in section 4, it is not “available now.”
2. **Do not invent proof.** No fake customer logos, testimonials, certifications, metrics, awards, or “trusted by” strips.
3. **Preserve the Telemex identity.** Borrow Luma Health’s structure, rhythm, motion and infographic feel — not its copy, colours, assets, layout, or brand.

The launch can happen today if you do the **minimum launch slice** in section 11 first. Motion and infographics are polish, not blockers.

---

## 1. Mission

Rebrand and refine the landing page so a visitor immediately understands:

- Telemex is an **HMIS platform**, not only an EMR.
- The clinical record is still the foundation, but the platform now connects departments.
- **Hospital** and **Laboratory** packages are available now.
- Other packages and modules are clearly marked **Coming soon**.
- The product is modular: start with one package, add modules as the hospital grows.
- The visual experience feels premium, calm and standard-setting without losing Telemex’s editorial cream/green/mint identity.

The transition story, in one sentence:

> **Telemex started with the clinical record. It is now a connected HMIS: one patient record, one financial history, and every care team working from the same source of truth.**

Use that idea throughout the page. Do not simply replace “EMR” with “HMIS” and stop. The page must show the expansion from encounter software to hospital operating platform.

---

## 2. Non-negotiables

### 2.1 Language

- Primary category: **HMIS** — “hospital management information system” or “modular hospital operating platform.”
- Secondary framing: “modular HMIS,” “hospital operating platform,” “connected care platform.”
- **EMR** may appear only:
  - in the transition story (“More than an EMR” / “From EMR to HMIS”);
  - in legal scope explanations where the deployment type is being described;
  - in historical context.
- Do not use “EMR” as the product category in the title, hero, meta description, OG tags, JSON-LD, navigation, footer, or primary CTAs.
- Do not use “electronic medical record” as the first description of Telemex.

### 2.2 Claim discipline

Safe now, for the launch matrix:

- “Hospital package available now.”
- “Laboratory package available now.”
- “Shared patient record.”
- “Outpatient care.”
- “Laboratory requests, specimen tracking, result verification and report delivery.”
- “Finance and billing.”
- “Role-based access and append-only audit.”
- “White-label HMIS deployment.”
- “Coming soon” for modules that are not launch-approved.

Do **not** claim, imply, or visually badge:

- “Full HMIS,” “complete hospital system,” “all-in-one,” “end-to-end hospital management” without qualification.
- “Full LIS,” “complete laboratory information system,” “LIS replacement.”
- QC, quality control, Levey-Jennings, calibration, chain of custody, send-out tracking, reference-lab integration, microbiology, histopathology.
- Validated bidirectional analyzer integration, host query, autoverification.
- CLIA compliance/certification, ISO 15189, DOT/SAMHSA compliance, HIPAA certification, SOC 2, HITRUST, GDPR certification.
- Clinical acceptance, clinical validation, production readiness, “clinically proven.”
- AI, automation, agentic workflows, predictive analytics.
- Fake customer logos, testimonials, deployment counts, bed counts, patient counts, revenue metrics, awards, or partner logos.
- “Trusted by hospitals” unless there is written permission and real deployments to show.

### 2.3 Status labels

Every package or module that is not available now must carry a visible text label:

- `Available now`
- `Coming soon`
- `In configuration` — only where reporting is discussed; never as a live capability.

Never rely on colour alone. The label must be readable in the badge text and, where useful, in an `aria-label`.

### 2.4 Source-of-truth warning

There are stale documents in the repo. Do not use these as the landing matrix:

- `codex/telemex-business-model.md` section 7 still says laboratory, pharmacy, radiology and reporting are configuration-only. That table predates the current catalogue and the current product state.
- `codex/hmis/hmis-02-packages-modules.md` also contains an older snapshot where laboratory/pharmacy/radiology are configuration-only.

The current source of truth is:

- `core/configs/catalogue/catalogue.json`
- the launch matrix in section 4 of this file
- explicit product sign-off, if the product owner promotes or demotes an item.

When the catalogue and this file disagree, stop and confirm with product. Do not silently pick one.

---

## 3. Current-state audit

### 3.1 Files

| File | Role | Notes |
|---|---|---|
| `index.html` | Main landing page | 377 lines; EMR copy throughout; JSON-LD; HubSpot demo form |
| `styles.css` | Full design system | 189 lines, many long component rules; tokens at top |
| `script.js` | Navigation, tabs, brand preview, FAQ, form, reveal | 251 lines; vanilla JS; HubSpot config at top of form block |
| `privacy.html` | Privacy policy | Still says “hospital EMR” in scope and footer |
| `terms.html` | Terms of use | Still says “EMR” in several sections and footer |
| `README.md` | Run/deploy notes | Still describes the site as a consultation-native EMR |
| `og.png` | Social preview | 1200×630; needs an HMIS rebrand |
| `sitemap.xml` | Sitemap | No change needed unless new pages are added |
| `robots.txt` | Crawler rules | No change needed |

This `landing/` repo is the canonical home of the Telemex landing page and this handoff. `platform/telemex-landing` is historical source only — **do not push new landing updates to `platform`.**

### 3.2 Current page order

1. Header / navigation
2. Hero — “The EMR built for the consult.”
3. Trust strip — “A hospital EMR built around the work of care”
4. Platform — consultation stages: Consult / Document / Decide / Continue
5. Solutions — Clinical teams / Hospital operations tabs
6. White-label — “Your identity. Everywhere.”
7. Journey — Map / Configure / Validate / Launch
8. Capabilities — “More than notes. A working EMR.”
9. Security / governance
10. FAQ — hospital EMR questions
11. Demo form
12. Footer

There is **no package section** and **no module status section**. That is the biggest content gap.

### 3.3 Current metadata

- `<title>`: `Telemex | The consultation-native EMR for hospitals`
- Meta description: “Telemex is a white-label hospital EMR built around the consultation…”
- Keywords: hospital EMR, consultation EMR, electronic medical record system, white-label EMR…
- OG/Twitter title: `Telemex | The EMR built for the consultation.`
- JSON-LD `applicationSubCategory`: `Electronic medical record software`
- JSON-LD description: “A white-label hospital EMR built around consultation workflows…”
- FAQ JSON-LD: “What does consultation-native EMR mean?”

### 3.4 Current EMR occurrences

Run this before editing:

```sh
cd landing
rg -n -i "EMR|electronic medical|consultation-native|white-label hospital EMR" .
```

Known occurrences:

| File | Location | Current text |
|---|---|---|
| `index.html` | `<title>` | `Telemex | The consultation-native EMR for hospitals` |
| `index.html` | meta description | `Telemex is a white-label hospital EMR built around the consultation…` |
| `index.html` | meta keywords | `hospital EMR, consultation EMR, electronic medical record system…` |
| `index.html` | OG/Twitter title | `Telemex | The EMR built for the consultation.` |
| `index.html` | OG/Twitter description | `A white-label hospital EMR that connects every consultation…` |
| `index.html` | JSON-LD | `Electronic medical record software`; `A white-label hospital EMR…` |
| `index.html` | JSON-LD FAQ | `What does consultation-native EMR mean?` |
| `index.html` | hero eyebrow | `White-label EMR for hospitals` |
| `index.html` | hero H1 | `The EMR built for the consult.` |
| `index.html` | hero chip | `Your hospital EMR` |
| `index.html` | trust strip | `A hospital EMR built around the work of care` |
| `index.html` | platform eyebrow | `The consultation-native EMR` |
| `index.html` | hospital panel | `measure EMR readiness` |
| `index.html` | white-label copy | `Deploy a complete EMR…` |
| `index.html` | brand studio label | `Hospital EMR domain` |
| `index.html` | domain card | `Your hospital EMR`; `emr.northstar.health` |
| `index.html` | journey H2 | `An EMR shaped around your hospital.` |
| `index.html` | capabilities H2 | `More than notes. A working EMR.` |
| `index.html` | FAQ eyebrow | `Hospital EMR questions` |
| `index.html` | FAQ question | `What does “consultation-native EMR” mean?` |
| `index.html` | demo note | `A focused 30-minute EMR session` |
| `index.html` | form role option | `Health information or EMR` |
| `index.html` | form textarea label | `What should your EMR improve?` |
| `index.html` | footer copy | `The white-label hospital EMR…` |
| `index.html` | footer link | `White-label EMR` |
| `index.html` | footer CTA | `Book an EMR demo` |
| `privacy.html` | legal lede | `hospital EMR deployments` |
| `privacy.html` | TOC | `2. Scope — website vs EMR` |
| `privacy.html` | section 2 H2 | `2. Scope — website vs hospital EMR` |
| `privacy.html` | section 2 body | `Each white-label deployment…` |
| `privacy.html` | footer | same EMR footer copy/links |
| `terms.html` | meta description | `hospital EMR deployments` |
| `terms.html` | legal lede | `hospital EMR itself` |
| `terms.html` | section 1 | `white-label, consultation-native electronic medical record (EMR)` |
| `terms.html` | section 2 | `the hospital EMR` |
| `terms.html` | section 4 | `contract for EMR services` |
| `terms.html` | section 7 | `white-label hospital deployment` |
| `terms.html` | footer | same EMR footer copy/links |
| `README.md` | line 3 | `consultation-native hospital EMR` |

### 3.5 Current design strengths to keep

- Cream `#f4f5ee` / deep green `#103c38` / mint `#dfff8b` / coral `#ff7657` palette.
- Manrope headings with tight tracking and oversized editorial scale.
- DM Sans body copy, calm and readable.
- Sharp corners, thin rules, no generic SaaS pill radius.
- Soft, deep shadows; floating chips; orbit rings; clipped hero product card.
- The brand mark: rotated 45° cross with mint centre.
- The interactive brand studio and product mock are strong; keep the interaction and update the content.
- The page already has good semantic structure, skip link, focus states, reveal observer, reduced-motion rule, and a working HubSpot form.

### 3.6 Current problems to fix

- EMR is the product category everywhere.
- No package or module model.
- No “available now” vs “coming soon” distinction.
- No transition story from EMR to HMIS.
- The hero product mock shows only a consultation workspace; it should show a multi-department HMIS.
- The page is long but section rhythm is flat: many similar white/cream sections. Add contrast and movement.
- No infographic that explains how departments connect.
- Motion is limited to a fade-up reveal and tab fades. It needs purposeful, premium movement.
- Social preview and README are stale.

---

## 4. Launch readiness matrix

This is the default matrix for today’s launch. It is deliberately conservative. If product explicitly promotes an item, update this table and the site together.

### 4.1 Packages

| Package | Launch status | What the site may say | What the site must not say |
|---|---|---|---|
| **Hospital** | **Available now** | “Outpatient care, finance and the shared patient record. Laboratory available as an add-on.” | “Full hospital management,” “inpatient included,” “all departments live.” |
| **Laboratory** | **Available now** | “Laboratory requests, specimen tracking, result verification and report delivery.” | “Full LIS,” “QC,” “chain of custody,” “send-out tracking,” “bidirectional analyzer,” “microbiology/histopathology.” |
| **Hospital Pharmacy** | **Coming soon** | “A pharmacy-first package for prescription review, dispensing and stock control. In development.” | “Available now,” “full pharmacy,” “live dispensing.” |

**Why Hospital Pharmacy is Coming soon by default:** the pharmacy module exists and the catalogue has a `hospital_pharmacy` package, but the launch narrative and proof are Hospital + Laboratory. The standalone pharmacy package has not been part of this launch review. This is a positioning decision, not a claim that no pharmacy code exists.

**Promotion rule:** promote Hospital Pharmacy to “Available now” only if product confirms the standalone package is launch-approved. If promoted, add it as a third equal package card and update the matrix, FAQ, JSON-LD and footer.

### 4.2 Modules

| Module | Status | Landing treatment |
|---|---|---|
| **Shared platform** | **Available now** | Foundation chip in every package; no standalone marketing card needed. |
| **Finance and billing** | **Available now** | Available card; included in Hospital and Laboratory. |
| **Outpatient care** | **Available now** | Available card; Hospital core. Optional add-on for Laboratory. |
| **Laboratory** | **Available now** | Available card; Laboratory core. Optional add-on for Hospital. |
| **Pharmacy and inventory** | **Coming soon** by default | The module exists, but the standalone package and add-on acceptance are not part of today’s launch. Promote to “Available as an add-on” only if product confirms pharmacy sign-off. |
| **Radiology** | **Coming soon** by default | Engineering is delivered, but HMIS-19 T01/T07 acceptance is still open. Promote to “Available as an add-on” only if product confirms sign-off. |
| **Inpatient care** | **Coming soon** | Muted card; no live CTA. |
| **Managed imaging** | **Coming soon** | Muted card; depends on radiology. |
| **HMO and insurance** | **Coming soon** | Muted card. |
| **Reporting** | **In configuration** | Included in packages; do not market as a live standalone capability. Show “Included — in configuration” in the module matrix or omit it from marketing cards. |

### 4.3 Package contents to show

Use this exact composition. Do not improvise add-ons.

**Hospital**

- Included: Shared platform, Finance and billing, Outpatient care.
- Available add-on: Laboratory.
- Coming soon add-ons: Pharmacy, Radiology, Inpatient care, Managed imaging, HMO and insurance.
- In configuration: Reporting.

**Laboratory**

- Included: Shared platform, Finance and billing, Laboratory.
- Available add-on: Outpatient care.
- Coming soon add-ons: Pharmacy, Radiology, HMO and insurance.
- In configuration: Reporting.

**Hospital Pharmacy — Coming soon**

- Planned: Shared platform, Finance and billing, Pharmacy and inventory.
- Do not show a live “included” list as if it is purchasable today. Use “Planned foundation” language.

### 4.4 Copy for the matrix legend

> **Available now** — implemented and part of today’s launch.
> **Coming soon** — visible on the roadmap, not available for live deployment.
> **In configuration** — included in the package structure, but not marketed as a live workflow yet.

Keep this legend near the module grid. It makes the honesty visible instead of hidden in a footnote.

---

## 5. Positioning and messaging

### 5.1 One-liners

Use one of these, not all of them:

- “The modular HMIS for hospitals and laboratories.”
- “One patient record. Every care team.”
- “Start with Hospital or Laboratory. Expand when you are ready.”
- “Built on the clinical depth of an EMR. Designed as an HMIS.”

### 5.2 The transition story

This is the emotional and strategic core of the page. Put it in the packages intro or a compact band immediately before the packages.

**Eyebrow:** `From EMR to HMIS`

**H2:** `More than a clinical record.` / `A connected hospital platform.`

**Body:**

> Telemex started with the encounter. It now connects the departments around it — outpatient care, laboratory, pharmacy, finance and reporting — on one patient record and one audit trail.

**Three-step visual:**

1. **Clinical record** — the encounter, coded and complete.
2. **Connected departments** — orders, results, dispensing and billing share the same patient.
3. **Hospital operating platform** — packages and modules that grow with the hospital.

This directly answers the user’s concern that the site does not mirror the transition.

### 5.3 Tone

- Confident, calm, precise.
- Premium, not corporate-generic.
- Editorial, not “AI SaaS.”
- Honest about what is live.
- No hype, no “revolutionise,” no “seamless,” no “game-changing.”

### 5.4 Words to prefer

`platform`, `package`, `module`, `connected`, `shared record`, `operating model`, `department`, `workflow`, `governance`, `available now`, `coming soon`, `configure`, `expand`.

### 5.5 Words to avoid

`EMR` as the category, `full`, `complete`, `all-in-one`, `end-to-end` without qualification, `AI-powered`, `automated`, `clinically validated`, `certified`, `compliant`, `trusted by`, `leading`, `best-in-class`.

---

## 6. Information architecture

Recommended page order. Keep the single-page structure; do not introduce a build step or framework.

1. **Header** — Platform, Packages, Solutions, Why Telemex, Governance; CTA “Book a demo.”
2. **Hero** — HMIS positioning; package availability proof; multi-department product mock.
3. **Trust strip** — “One record. Every department.” Four proof points.
4. **From EMR to HMIS + Packages** — transition band, then three package cards.
5. **Platform map** — “One platform, end to end” with Hospital / Laboratory / Pharmacy tabs and animated flow.
6. **Solutions** — Clinical teams / Hospital operations tabs.
7. **White-label** — “Your identity. Everywhere.”
8. **Journey** — Map / Configure / Validate / Launch, framed as “first workflow to full HMIS.”
9. **What’s live** — capability grid with available/coming-soon badges and legend.
10. **Governance** — cross-department audit, roles, consent, offline.
11. **FAQ** — HMIS questions, package availability, transition, deployment separation.
12. **Demo** — package interest, updated copy, same HubSpot form.
13. **Footer** — updated copy, package links, HMIS CTA.

Why this order:

- The package story appears early, right after the hero, because it is the main new information.
- The platform map explains the “HMIS” claim visually before the feature grid.
- “What’s live” comes after the vision, so the status labels feel like proof rather than a disclaimer.
- Governance stays late, where enterprise buyers expect it.

---

## 7. Section-by-section direction

### 7.1 Header

**Desktop nav:** `Platform` · `Packages` · `Solutions` · `Why Telemex` · `Governance`

**Mobile nav:** same, plus `Book a demo`.

**CTA:** `Book a demo ↗` (keep the existing button style).

Add `#packages` and `#live` anchors. Update `aria-label`s if needed.

### 7.2 Hero

**Eyebrow:** `The HMIS platform for hospitals and laboratories`

**H1 option A (recommended):**

> The HMIS built
> **for the work of care.**

**H1 option B:**

> One platform.
> **Every care team.**

Use option A if you want to preserve the current “built for” rhythm. Use option B if the page needs a shorter, more platform-led statement. Do not use both.

**Lede:**

> Telemex connects outpatient care, laboratory, pharmacy, finance and reporting around one patient record — so every team works from the same source of truth.

**Actions:**

- Primary: `Explore the packages ↗` → `#packages`
- Secondary: `Book a demo` → `#demo`

**Proof chips:**

- `Hospital available now`
- `Laboratory available now`
- `More modules coming soon`

Do not use checkmarks for “coming soon.” Use a neutral dot or clock glyph. Checkmarks imply availability.

**Hero product mock:**

Keep the existing clipped green product card, top bar, sidebar, metric row and patient panel. Change the content to show a multi-department HMIS:

- Product brand: `Northstar Health` (keep the illustrative name).
- Sidebar: keep abstract lines; add a small department switcher label if space allows.
- Heading: `Hospital command centre` or `HMIS workspace`.
- Metrics: `Outpatient 12`, `Laboratory 08`, `Pharmacy 05`, `Revenue 03` — four small metrics if the grid allows, otherwise three.
- Panel title: `Today across the hospital`.
- Rows: `Outpatient · General consultation`, `Laboratory · CBC — awaiting verification`, `Pharmacy · Prescription review`, `Finance · Invoice ready`.
- Floating chips:
  - `One patient record` / `Outpatient, laboratory, pharmacy and finance`
  - `Your hospital, your brand` / `White-label HMIS`
- Orbit rings stay.

If changing the mock is too risky for launch, keep the current consultation mock but change the labels to `HMIS workspace`, `Outpatient`, `Laboratory`, `Pharmacy`, `Finance`. Do not leave “Your hospital EMR.”

### 7.3 Trust strip

**Left copy:** `One record. Every department.`

**Four proof points:**

1. `Shared patient record`
2. `Modular packages`
3. `Department workflows`
4. `Governance built in`

Optional fifth: `White-label deployment`. Keep four for rhythm.

### 7.4 From EMR to HMIS + Packages

This is the new centerpiece. Combine the transition story and the package cards in one section to avoid adding too much length.

**Eyebrow:** `From EMR to HMIS`

**H2:**

> More than a clinical record.
> **A connected hospital platform.**

**Body:** as in section 5.2.

**Three-step visual:** Clinical record → Connected departments → Hospital operating platform. Use a thin horizontal line with three nodes and short labels. On mobile, stack vertically.

Then the package cards:

**Section eyebrow:** `Packages`

**H2:**

> Start with the workflow you need.
> **Expand when you are ready.**

**Body:**

> Hospital and Laboratory are available now. Each package includes the shared platform and finance, with optional modules as your operating model grows.

**Card anatomy:**

- Status badge.
- Package name.
- One-sentence promise.
- `Included` chips.
- `Available add-ons` chips.
- `Coming soon` chips (muted).
- CTA.
- Optional small note: `Reporting included — in configuration.`

**Hospital card:**

- Badge: `Available now`
- Title: `Hospital`
- Promise: `Outpatient care, finance and the shared patient record for hospitals and health systems.`
- Included: `Shared platform`, `Finance & billing`, `Outpatient care`
- Available add-on: `Laboratory`
- Coming soon: `Pharmacy`, `Radiology`, `Inpatient`, `Managed imaging`, `HMO`
- CTA: `Explore Hospital →` → `#demo` or a package detail anchor.
- Note: `Reporting included — in configuration.`

**Laboratory card:**

- Badge: `Available now`
- Title: `Laboratory`
- Promise: `Laboratory requests, specimen tracking, result verification and report delivery for diagnostic teams.`
- Included: `Shared platform`, `Finance & billing`, `Laboratory`
- Available add-on: `Outpatient care`
- Coming soon: `Pharmacy`, `Radiology`, `HMO`
- CTA: `Explore Laboratory →`
- Note: `Reporting included — in configuration.`

**Hospital Pharmacy card:**

- Badge: `Coming soon`
- Title: `Hospital Pharmacy`
- Promise: `A pharmacy-first package for prescription review, dispensing and stock control. In development.`
- Planned: `Shared platform`, `Finance & billing`, `Pharmacy & inventory`
- CTA: `Talk to us about early access →` → `#demo`
- Muted styling; no mint “available” badge.

**Below the cards:** a compact module matrix or legend. Do not hide the statuses in small print.

### 7.5 Platform map — “One platform, end to end”

This is the Luma-inspired “moving parts” section. It should feel like a living operating diagram, not a static feature list.

**Eyebrow:** `One platform, end to end`

**H2:** `The record moves with the patient.`

**Body:**

> Follow one patient from registration to result, prescription and payment — without re-entering the same data.

**Tabs:**

- `Hospital` — active by default
- `Laboratory`
- `Hospital Pharmacy` — with a small `Coming soon` badge

**Hospital flow:**

`Register → Schedule → Consult → Order → Bill → Report`

**Laboratory flow:**

`Request → Collect → Process → Verify → Release → Deliver`

**Pharmacy flow:**

`Prescribe → Review → Dispense → Stock → Reconcile` — visibly marked coming soon.

**Visual treatment:**

- A horizontal SVG path with six nodes.
- A small mint dot travels along the path when the section is in view.
- Each node has a label and a one-line caption.
- The active tab changes the flow, caption and accent.
- Pause the dot on hover/focus; disable under `prefers-reduced-motion`.
- On mobile, turn the path into a vertical timeline with a left rail.

**Caption below:** `One patient record. One audit trail. Every department.`

This section is the strongest place to borrow Luma’s “orchestrated workflow” feel without copying its content.

### 7.6 Solutions

Keep the existing two-tab pattern.

**Eyebrow:** `Built for the people who run care`

**H2:**

> One record.
> **Two hospital views.**

**Body:**

> Clinicians get a focused workspace for care. Hospital leaders get the control, visibility and governance to run it safely.

**Tabs:** `Clinical teams` / `Hospital operations`.

**Clinical panel:**

- Heading: `Everything needed to move care forward.`
- Copy: `Move from consultation to orders, results and prescriptions without losing the patient’s context.`
- Points:
  - `One-screen chart summary` — problems, medications, allergies, alerts, recent results.
  - `Department handoffs` — laboratory, pharmacy and finance see the same patient and order.
  - `A record that continues` — timeline, active medications, open orders, referrals and visit summaries.

**Hospital operations panel:**

- Heading: `A platform your hospital can govern.`
- Copy: `See patient flow, department worklists, billing and audit in one operating picture.`
- Points:
  - `Know who touched the record` — append-only access history.
  - `See what is live` — package and module status, not assumptions.
  - `Own the deployment` — your database, roles, feature set and brand.

Do not claim operational dashboards or reporting that are not implemented. Keep the copy directional and grounded in the implemented platform/finance/outpatient/lab capabilities.

### 7.7 White-label

Keep the interactive brand studio. It is one of the strongest parts of the page.

**Eyebrow:** `White-label by design`

**H2:**

> Your identity.
> **Everywhere.**

**Body:**

> Deploy Telemex as your hospital’s HMIS — your name, domain, colours, documents, communications and enabled modules.

**Updates:**

- `Hospital EMR domain` → `Hospital HMIS domain`
- `Your hospital EMR` → `Your hospital HMIS`
- `emr.northstar.health` → `hmis.northstar.health` or `care.northstar.health`
- Preview nav: `Patients · Outpatient · Laboratory · Finance`
- Preview hero: keep the greeting, but make the copy about the hospital workspace, not a single consultation.
- `Powered by Telemex` stays.

**Brand points:**

1. `Your institutional identity` — logo, colour system, PWA, documents, email sender and metadata.
2. `Your isolated environment` — separate frontend, API, database, credentials, assets and configuration.
3. `Your clinical operating model` — roles, enabled packages/modules, booking, payments and patient pathways.

### 7.8 Journey

**Eyebrow:** `From first workflow to full HMIS`

**H2:**

> An HMIS shaped around
> **your hospital.**

**Body:**

> Start with the package that fits your operating model, then add departments and capabilities as you grow.

**Steps:**

1. **Map** — define services, care teams, departments, governance and the package that fits.
2. **Configure** — apply branding, roles, modules, booking rules and clinical settings.
3. **Validate** — review permissions, workflow readiness, audit attribution and package boundaries.
4. **Launch** — deploy the isolated environment and onboard administrators, clinicians and patients.

Keep the existing step symbols and dark green section. Update the copy only.

### 7.9 What’s live

This section is where the “Coming soon” promise becomes visible and credible.

**Eyebrow:** `What is live today`

**H2:**

> A working HMIS.
> **Not a roadmap.**

**Body:**

> Hospital and Laboratory are available now. Modules that are not ready are clearly marked coming soon.

**Status legend:** three small badges with text:

- `Available now`
- `Coming soon`
- `In configuration`

**Available cards (six):**

1. **Shared patient record** — `One identity, one history and one audit trail across departments.`
2. **Outpatient care** — `Scheduling, queues, nursing pre-consult, consultation, orders and referrals.`
3. **Laboratory** — `Requests, specimen and container tracking, result verification, release and report delivery.`
4. **Finance and billing** — `Service catalogue, invoices, receipts, refunds and reconciliation.`
5. **Governance** — `Role-based access, append-only audit, consent-gated export and offline-safe charting.`
6. **White-label deployment** — `Your brand, domain, roles, modules and isolated environment.`

**Coming soon cards (five):**

7. **Hospital Pharmacy** — `Prescription review, dispensing and stock control as a standalone package.`
8. **Inpatient care** — `Admissions, wards, beds, rounds, observations and discharge.`
9. **Radiology** — `Imaging requests, worklists and report release.` (or promote to available add-on if signed off)
10. **Managed imaging** — `Operated archive and viewer for retained studies.`
11. **HMO and insurance** — `Eligibility, authorisation, claims and remittance.`

**In configuration note:**

> Reporting is included across packages and is in configuration. It is not marketed as a live standalone capability yet.

If the grid feels too long, keep six available cards and a compact “Coming soon” row of chips for the rest. Do not remove the status labels.

### 7.10 Governance

**Eyebrow:** `Platform governance`

**H2:** `A record your hospital can account for.`

**Body:**

> Every chart action, order, result, dispense, payment and export is designed to leave a clear operational trail.

**List:**

1. **Role and ownership controls** — admin, clinical, laboratory, pharmacy and patient access enforced by role, assignment and feature policy.
2. **Append-only audit** — views, creates, updates, deletes and exports attributable to an actor, section and time.
3. **Consent-gated portability** — patient data-sharing consent governs exports, with revocation and expiring access.
4. **Safe offline charting** — selected clinical modules continue offline with idempotent writes, conflict handling and server re-validation.

Keep the dark `#0b2d2a` section and the numbered list. Add a subtle animated audit-timeline ribbon if time allows.

### 7.11 FAQ

**Eyebrow:** `HMIS questions`

**H2:** `Before we talk.`

**Body:**

> Every hospital has a different operating model. We’ll map Telemex to yours in a working session.

**Questions and answers:**

1. **What is an HMIS?**
   > A hospital management information system connects the clinical, operational and financial work of a hospital around a shared patient record. Telemex is a modular HMIS: start with a package, then add departments as you grow.

2. **How is Telemex different from a traditional EMR?**
   > Telemex still goes deep on the encounter — history, examination, diagnosis, orders and the longitudinal chart. It also connects the departments around the encounter: laboratory, pharmacy, finance and reporting. The EMR is the clinical core, not the whole platform.

3. **Which packages are available now?**
   > Hospital and Laboratory are available now. Hospital Pharmacy is coming soon. Each package includes the shared platform and finance, with optional modules as your operating model grows.

4. **What is coming soon?**
   > Hospital Pharmacy, inpatient care, radiology, managed imaging and HMO and insurance are on the roadmap. Reporting is included in the package structure and is in configuration. We label these clearly on the site rather than presenting them as live.

5. **Can we add modules later?**
   > Yes. Telemex is packaged so a hospital can start with the workflow it needs and add modules without rebuilding the patient record, financial history or audit trail.

6. **How is each hospital deployment separated?**
   > Each deployment has its own frontend, API, database, credentials, assets, brand configuration, enabled modules and workflow settings.

7. **Can clinicians work when connectivity is poor?**
   > Selected doctor-side chart modules support offline work with idempotent writes, explicit conflict handling and server re-validation when the device reconnects.

8. **Does Telemex replace our existing systems on day one?**
   > No. Start with the package that fits your operating model, configure it around your workflows, and expand with modules as you are ready. Any integration or migration is scoped separately.

Keep the visible FAQ and the FAQ JSON-LD in sync.

### 7.12 Demo

**Eyebrow:** `Bring us your operating model`

**H2:** `See your hospital on Telemex.`

**Body:**

> Show us how patients move through your hospital or laboratory. We’ll show you the package that fits, what is live today, and what comes next.

**Note:**

- Big number: `30`
- Heading: `A focused 30-minute HMIS session`
- Copy: `Your operating model, the package fit, and a clear implementation path.`

**Form changes:**

- Keep the existing HubSpot field names. Do not rename them.
- Add `Laboratory leadership` and `Pharmacy leadership` to the `your_role` options.
- Change the textarea label to `What should your HMIS improve?`
- Add a package-interest selector as UI only. On submit, prefix the free-text value with `Package interest: …` so the existing HubSpot field mapping still works.
- Package options: `Hospital`, `Laboratory`, `Hospital Pharmacy (coming soon)`, `Not sure yet`.
- Keep the honeypot, time-to-submit check, consent checkbox and status messages.
- Update the fallback email copy only if the contact email changes; do not change it silently.

**Button:** `Request a demo ↗`.

### 7.13 Footer

**Copy:**

> The modular HMIS for hospitals and laboratories — one patient record, one financial history, every care team connected.

**Explore links:**

- `Platform`
- `Packages`
- `What’s live`
- `Governance`

**Packages links:**

- `Hospital`
- `Laboratory`
- `Hospital Pharmacy` + `Coming soon` label

**Company links:**

- `Contact`
- `FAQ`
- `Terms`
- `Privacy`

**CTA:**

> Ready to see your workflow?
> `Book an HMIS demo ↗`

Update the footer in `index.html`, `privacy.html` and `terms.html`. The footer is duplicated; keep all three in sync.

---

## 8. Design themes and tokens

### 8.1 Core palette

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#142c2a` | Primary text, dark buttons |
| `--green` | `#103c38` | Primary brand, dark sections, product card |
| `--green-2` | `#175f56` | Hover, secondary green |
| `--mint` | `#dfff8b` | Accent, available badges, CTA |
| `--coral` | `#ff7657` | Eyebrow dot, alerts, accent only |
| `--cream` | `#f4f5ee` | Page background |
| `--paper` | `#ffffff` | Cards, light sections |
| `--muted` | `#627270` | Secondary body text |
| `--line` | `rgba(20,44,42,0.14)` | Borders and rules |
| `--shadow` | `0 30px 70px rgba(10,53,49,0.16)` | Hero/product shadow |

### 8.2 Extended surfaces

These already exist in the CSS or are safe to add:

| Token | Value | Usage |
|---|---|---|
| `--green-3` | `#0b2d2a` | Governance section |
| `--footer` | `#081f1d` | Footer |
| `--surface` | `#f6f7f2` | Product mock / soft panels |
| `--surface-2` | `#eef1e9` | Chips, quiet cards |
| `--mint-soft` | `#eff9d6` | Mint-tinted cards |
| `--coral-soft` | `#fff1eb` | Alert/coral-tinted cards |
| `--success` | `#2e9a6b` | Positive status dot |
| `--warning` | `#926a16` | In-configuration text |
| `--warning-soft` | `#fff3d7` | In-configuration background |

### 8.3 Status tokens

Add these so badges are consistent:

```css
--status-live-bg: var(--mint);
--status-live-ink: var(--green);
--status-soon-bg: #eef1e9;
--status-soon-ink: #627270;
--status-config-bg: #fff3d7;
--status-config-ink: #926a16;
```

Badge rules:

- Rectangular, 2px radius maximum.
- 10px uppercase, 700 weight, 0.8px tracking.
- 5px 8px padding.
- Always include the status word.
- Do not use coral for “coming soon”; coral reads as an alert.
- Use mint for “available now,” neutral grey for “coming soon,” amber for “in configuration.”

### 8.4 Typography

| Role | Font | Size / weight | Notes |
|---|---|---|---|
| Brand | Manrope | 700, 22px | `-0.8px` tracking |
| H1 | Manrope | `clamp(62px, 6.8vw, 106px)`, 600 | `0.94` line-height, `-0.076em` tracking |
| H2 | Manrope | `clamp(46px, 5vw, 76px)`, 600 | `1.02` line-height, `-0.06em` tracking |
| H3 | Manrope | 20–24px, 700 | Tight tracking |
| Body | DM Sans | 15–17px, 400 | `1.6–1.65` line-height |
| Eyebrow | DM Sans | 12px, 700 | Uppercase, `1.5px` tracking |
| Micro / labels | DM Sans | 9–11px, 600–700 | Uppercase only for labels |
| Buttons | DM Sans | 14px, 700 | No uppercase |

Keep the current font loading. Do not add another display face. Do not use Luma’s typography.

### 8.5 Layout and spacing

| Token / rule | Value |
|---|---|
| Max shell | `1320px` |
| Desktop gutter | `24px` each side (`calc(100% - 48px)`) |
| Mobile gutter | `16px` each side |
| Section padding desktop | `132px 0` |
| Section padding tablet (`<=850px`) | `90px 0` |
| Section padding mobile (`<=580px`) | `72px 0` |
| Nav height | `88px` desktop / `74px` mobile |
| Grid gap | `24–80px` depending on section |
| Card padding | `28–48px` desktop / `22–28px` mobile |

### 8.6 Shape, borders, shadows

- Corners: **sharp**. Use `0` or `2px`; reserve `50%` for avatars/orbits and `999px` only for tiny dots.
- Borders: `1px solid var(--line)`.
- Shadows: deep and soft, never neon.
- Hero product clip-path: `polygon(7% 0,100% 0,100% 91%,92% 100%,0 100%,0 8%)`.
- Keep the orbit rings and floating chips; they are part of the Telemex feel.
- Do not adopt Luma’s rounded pastel card language.

### 8.7 Buttons and interactive elements

- Primary dark: `background: var(--ink); color: white;`
- Accent: `background: var(--mint); color: var(--ink);`
- Min height: `54px`; small `44px`.
- Padding: `0 24px`; small `0 18px`.
- Hover: `translateY(-2px)`.
- Focus: `outline: 3px solid var(--coral); outline-offset: 4px;`
- Tabs: rectangular, active `green` background or `mint` accent; keyboard arrow support.
- Cards: hover lift `-4px`, shadow increase; do not animate layout properties.

### 8.8 Motion tokens

Add:

```css
--ease-out: cubic-bezier(.2, .8, .2, 1);
--dur-fast: .18s;
--dur-base: .28s;
--dur-reveal: .7s;
--stagger: 70ms;
```

Motion rules:

- Reveal: opacity `0 → 1`, translateY `26px → 0`, `0.7s ease`.
- Stagger cards by `60–80ms`.
- Tab panel: opacity/translateY `6px`, `280ms ease-out`.
- Hover: `180ms ease`.
- Flow dot: `6–10s linear infinite`, only while in view.
- Counters: `1.2s ease-out`, only for factual numbers.
- Never animate `width`, `height`, `top`, `left`, or `margin`.
- Respect `prefers-reduced-motion: reduce`; the existing rule already collapses durations, but also stop infinite animations and counters.
- No scroll-jacking. No parallax on mobile.

---

## 9. Luma Health inspiration — borrow the feel, not the brand

Reference: `https://www.lumahealth.io/`

### 9.1 What to borrow

- **Outcome-first hero** with a strong, short statement and one clear CTA.
- **Section rhythm**: hero → trust strip → one-platform story → solution cards → proof → security/governance → final CTA.
- **“One platform, end to end” tabs** that switch between operating areas.
- **Layered product UI** with floating chips and soft depth.
- **Animated connective lines / moving nodes** that explain a workflow.
- **Generous whitespace** and oversized type.
- **Scroll-triggered reveals** with restraint.
- **Hover microinteractions** on cards and tabs.
- **A final CTA section** with strong contrast and a simple form.
- **A governance/security block** that feels mature, not decorative.

### 9.2 What not to borrow

- Luma’s copy, taglines, page structure one-for-one, or section names.
- Luma’s colours, gradients, typography, logos, icons, illustrations, photos, or customer logos.
- Luma’s AI/agent narrative. Telemex is an HMIS, not an AI agent platform.
- Luma’s certification badges. Telemex has not earned them.
- Luma’s customer metrics or testimonials. Telemex has no launch proof to reuse.
- Luma’s rounded pastel card style. Telemex is sharper and more editorial.

### 9.3 Specific pattern translations

| Luma pattern | Telemex translation |
|---|---|
| Trigger event → agent → channel flow | Patient event → department → outcome flow |
| “One platform, end-to-end” tabs | Hospital / Laboratory / Pharmacy package tabs |
| Animated banner cards | Layered HMIS product mock with floating department chips |
| Logo trust strip | “Built for” role chips or package availability chips — only if true |
| Big outcome metrics | Factual counts only: `2 launch packages`, `6 available modules`, `1 patient record`; or omit |
| Security certification badges | Governance principles: role-based access, append-only audit, consent-gated export |
| Customer stories carousel | Omit until real, approved stories exist |
| Final “Let’s talk” block | “See your hospital on Telemex” demo section |

### 9.4 Motion and infographic concepts

Pick **two or three** of these, not all of them. The page should feel alive, not busy.

1. **“One record, many departments” hero graphic**
   - Central patient-record node.
   - Orbiting department chips: Outpatient, Laboratory, Pharmacy, Finance.
   - Thin dashed connectors; a mint dot travels between nodes.
   - Inline SVG + CSS; `aria-hidden="true"` for decorative parts.

2. **Package map**
   - Three package columns with module chips.
   - Available chips in mint; coming-soon chips in neutral grey.
   - A thin connector line runs through the shared platform/finance foundation.
   - On hover, the package lifts and its module list reveals.

3. **Care-journey stepper**
   - Horizontal `Register → Schedule → Consult → Order → Bill → Report`.
   - Progress line fills as the section scrolls into view.
   - On mobile, becomes a vertical timeline.

4. **Laboratory loop**
   - `Request → Collect → Process → Verify → Release → Deliver`.
   - Circular or horizontal flow; use for the Laboratory tab.
   - Do not add QC, chain-of-custody, send-out, or analyzer steps.

5. **Governance ribbon**
   - A timeline of `Actor · Action · Time` chips.
   - Reveals on scroll; reinforces append-only audit.
   - Keep it abstract; no real patient data.

6. **Brand studio**
   - Existing interactive colour/domain preview.
   - Add a subtle colour transition and a “Powered by Telemex” watermark.
   - Do not add fake customer logos.

### 9.5 Motion implementation notes

- Use vanilla JS, CSS transitions, and inline SVG. Do not add GSAP, Lottie, Framer Motion, or a React runtime.
- Use `IntersectionObserver` for reveals and for starting/stopping flow animations.
- Use `requestAnimationFrame` only for counters or path progress; clean up on visibility change.
- Keep added JS under ~15KB uncompressed.
- Pause infinite animations when the section is off-screen, on hover/focus, and under reduced motion.
- Provide a visible pause control only if a motion runs longer than 5 seconds and carries meaning. Decorative motion can be disabled under reduced motion.
- Test on a low-end mobile viewport; the page must still scroll smoothly.

---

## 10. Copy deck and replacement map

Use this as the default. Adjust only if product supplies approved copy.

### 10.1 Metadata and structured data

| Current | Replace with |
|---|---|
| `<title>Telemex | The consultation-native EMR for hospitals</title>` | `<title>Telemex | The HMIS platform for hospitals and laboratories</title>` |
| `Telemex is a white-label hospital EMR built around the consultation—from scheduling and live charting to clinical decisions, orders, longitudinal records, and audit.` | `Telemex is a modular HMIS for hospitals and laboratories — one patient record for outpatient care, laboratory, pharmacy, finance and reporting. Hospital and Laboratory packages are available now.` |
| `hospital EMR, consultation EMR, electronic medical record system, hospital clinical software, white label EMR, patient record software` | `hospital HMIS, hospital management information system, laboratory management system, hospital operating platform, white-label HMIS, clinic management software` |
| OG title `Telemex | The EMR built for the consultation.` | `Telemex | One platform. Every care team.` |
| OG description `A white-label hospital EMR that connects every consultation to the complete patient record.` | `A modular HMIS for hospitals and laboratories. Start with Hospital or Laboratory. Add departments as you grow.` |
| Twitter title/description | Same as OG |
| JSON-LD `applicationSubCategory`: `Electronic medical record software` | `Hospital management information system (HMIS)` |
| JSON-LD description | `A modular HMIS for hospitals and laboratories, connecting outpatient care, laboratory, pharmacy, finance and reporting around one patient record.` |
| JSON-LD audience `Hospitals and health systems` | `Hospitals, laboratories and health systems` |

**JSON-LD featureList:**

```json
[
  "Shared patient record and staff access",
  "Outpatient scheduling, queues and consultation workflow",
  "Laboratory requests, specimen tracking, verification and report delivery",
  "Finance, billing and reconciliation",
  "Role-based access and append-only audit",
  "White-label hospital deployment",
  "Modular packages with coming-soon modules"
]
```

**JSON-LD FAQ:** replace the three current questions with the first four FAQ questions in section 7.11. Keep the visible FAQ and JSON-LD identical.

### 10.2 Hero and trust strip

| Current | Replace with |
|---|---|
| `White-label EMR for hospitals` | `The HMIS platform for hospitals and laboratories` |
| `The EMR built<br /><em>for the consult.</em>` | `The HMIS built<br /><em>for the work of care.</em>` |
| `One hospital system to schedule care, run in-person or video consultations, document every clinical decision, and carry the patient record forward.` | `Telemex connects outpatient care, laboratory, pharmacy, finance and reporting around one patient record — so every team works from the same source of truth.` |
| `See Telemex for your hospital` | `Explore the packages` |
| `Explore the clinical workflow` | `Book a demo` |
| `Longitudinal patient record` | `Hospital package available now` |
| `Consultation-native workspace` | `Laboratory package available now` |
| `Your hospital EMR` | `Your hospital HMIS` |
| `A hospital EMR built around the work of care` | `One record. Every department.` |
| `Consultation-native charting` | `Shared patient record` |
| `Longitudinal patient record` | `Modular packages` |
| `Coded clinical data` | `Department workflows` |
| `Audit & consent controls` | `Governance built in` |

### 10.3 Platform and solutions

| Current | Replace with |
|---|---|
| `The consultation-native EMR` | `One platform, end to end` |
| `The consult becomes<br />the record.` | `The record moves<br />with the patient.` |
| `Telemex puts the patient chart inside the consultation workflow, so history, examination, investigations, diagnosis, and treatment become one continuous clinical record.` | `Follow one patient from registration to result, prescription and payment — without re-entering the same data.` |
| Stage tabs `Consult / Document / Decide / Continue` | Keep if the product mock still tells the consultation story; otherwise replace with `Hospital / Laboratory / Pharmacy` tabs in the new platform map. Do not keep both tab systems if they compete. |
| `Built for hospitals` | `Built for the people who run care` |
| `One patient record.<br /><em>Two hospital views.</em>` | Keep |
| `Configure who can do what, see how records are used, measure EMR readiness, and deploy under your hospital’s identity.` | `See patient flow, department worklists, billing and audit in one operating picture.` |
| `A clinical system your hospital can govern.` | `A platform your hospital can govern.` |
| `See the hospital control layer` | `See the hospital operating model` |

### 10.4 White-label, journey, capabilities

| Current | Replace with |
|---|---|
| `Deploy a complete EMR under your hospital’s name, domain, colours, documents, communications, feature set, and clinical workflow.` | `Deploy Telemex as your hospital’s HMIS — your name, domain, colours, documents, communications and enabled modules.` |
| `Hospital EMR domain` | `Hospital HMIS domain` |
| `Your hospital EMR` | `Your hospital HMIS` |
| `emr.northstar.health` | `hmis.northstar.health` |
| `An EMR shaped around<br />your hospital.` | `An HMIS shaped around<br />your hospital.` |
| `A complete clinical core` | `What is live today` |
| `More than notes.<br />A working EMR.` | `A working HMIS.<br /><em>Not a roadmap.</em>` |
| `Every capability connects back to the encounter and forward into the longitudinal chart, so the record remains clinically useful after the consultation ends.` | `Hospital and Laboratory are available now. Modules that are not ready are clearly marked coming soon.` |

### 10.5 Governance, FAQ, demo, footer

| Current | Replace with |
|---|---|
| `Clinical governance` | `Platform governance` |
| `A record your hospital can account for.` | Keep |
| `Every chart action, override, export, and referral outcome is designed to leave a clear operational trail.` | `Every chart action, order, result, dispense, payment and export is designed to leave a clear operational trail.` |
| `Hospital EMR questions` | `HMIS questions` |
| `What does “consultation-native EMR” mean?` | `What is an HMIS?` |
| `Which clinical records does Telemex manage?` | `Which packages are available now?` |
| `How does Telemex support safer prescribing?` | `What is coming soon?` |
| `Can clinicians work when connectivity is poor?` | Keep |
| `How is each hospital deployment separated?` | Keep |
| `A focused 30-minute EMR session` | `A focused 30-minute HMIS session` |
| `What should your EMR improve?` | `What should your HMIS improve?` |
| `Health information or EMR` role option | `Health information or HMIS` |
| `The white-label hospital EMR that turns every consultation into a complete, continuous patient record.` | `The modular HMIS for hospitals and laboratories — one patient record, one financial history, every care team connected.` |
| `White-label EMR` footer link | `White-label HMIS` |
| `Book an EMR demo` | `Book an HMIS demo` |

### 10.6 Legal pages

**`privacy.html`**

| Current | Replace with |
|---|---|
| `hospital EMR deployments are governed by separate agreements` | `hospital HMIS deployments are governed by separate agreements` |
| `2. Scope — website vs EMR` | `2. Scope — website vs HMIS` |
| `2. Scope — website vs hospital EMR` | `2. Scope — website vs hospital HMIS` |
| `Each white-label deployment has its own database…` | `Each white-label HMIS deployment has its own database…` |
| Footer EMR copy/links | Same replacements as `index.html` |

**`terms.html`**

| Current | Replace with |
|---|---|
| `how hospital EMR deployments are governed` | `how hospital HMIS deployments are governed` |
| `They do not govern the hospital EMR itself` | `They do not govern the hospital HMIS itself` |
| `Telemex provides a white-label, consultation-native electronic medical record (EMR) for hospitals and health systems.` | `Telemex provides a white-label, modular hospital management information system (HMIS) for hospitals, laboratories and health systems.` |
| `This site is not the hospital EMR` | `This site is not the hospital HMIS` |
| `contract for EMR services` | `contract for HMIS services` |
| `Each white-label hospital deployment` | `Each white-label hospital HMIS deployment` |
| Footer EMR copy/links | Same replacements as `index.html` |

These are terminology changes, not new legal claims. Still, ask the product/legal owner to glance at the diff before deploy. Update “Last updated” to the launch date only if the owner approves.

**`README.md`**

- Replace “consultation-native hospital EMR” with “modular HMIS for hospitals and laboratories.”
- Add a short “Launch status” note: Hospital and Laboratory available; Hospital Pharmacy and other modules coming soon.
- Add `HANDOFF.md` to the file list.

---

## 11. Implementation plan

### 11.1 Minimum launch slice — do this first

Ship these before touching motion:

1. **Metadata and structured data** — title, description, keywords, OG/Twitter, JSON-LD.
2. **Hero** — eyebrow, H1, lede, CTAs, proof chips, remove “EMR” from the product mock.
3. **Packages section** — Hospital and Laboratory available; Hospital Pharmacy coming soon; module chips.
4. **What’s live section** — available/coming-soon badges and legend.
5. **Footer** — copy, links, CTA.
6. **Legal pages** — terminology-only replacements.
7. **README** — update.
8. **Responsive and accessibility pass** — at least 375px, 768px, 1024px, 1440px.
9. **Deploy and smoke-test.**

If time runs out, stop here. This is a credible HMIS launch.

### 11.2 Polish slice — only after the minimum is live

1. Platform map with animated flow.
2. Hero product mock redesigned as a multi-department command centre.
3. Transition band with three-step visual.
4. Brand studio copy and domain update.
5. Journey copy and step icons.
6. FAQ rewrite.
7. OG image rebrand.
8. Motion polish: stagger, counters, hover states, flow pause.
9. Governance ribbon.
10. Performance tuning.

Do not let the polish slice block deployment.

### 11.3 Task list

| ID | Task | Depends on | Acceptance |
|---|---|---|---|
| **L0-01** | Confirm launch matrix with product | — | Hospital + Laboratory available; Hospital Pharmacy + unready modules coming soon; radiology/pharmacy promotion decisions recorded |
| **L0-02** | Create branch | — | `hmis-landing-launch` from `main`; clean working tree |
| **L1-01** | Update metadata + JSON-LD | L0-01 | No EMR in title/meta/OG/JSON-LD; JSON valid; FAQ JSON-LD matches visible FAQ |
| **L1-02** | Update hero | L1-01 | HMIS eyebrow/H1/lede; package proof chips; no “EMR” in hero |
| **L1-03** | Add packages section | L1-01 | Three package cards with correct statuses and module chips; Hospital and Laboratory CTAs |
| **L1-04** | Add What’s live section | L1-03 | Available and coming-soon cards; legend; reporting note |
| **L1-05** | Update footer + nav | L1-01 | Packages/What’s live anchors; HMIS CTA; all three pages in sync |
| **L1-06** | Update legal pages | L0-01 | Terminology replaced; no substantive legal changes; links valid |
| **L1-07** | Update README | L1-01 | Description and launch status current |
| **L1-08** | Responsive pass | L1-02–L1-07 | No horizontal overflow at 320/375/768/1024/1440; cards stack; tabs usable |
| **L1-09** | Accessibility pass | L1-02–L1-08 | Keyboard tabs, focus states, status text, reduced motion, contrast |
| **L1-10** | Form regression | L1-02 | HubSpot field names unchanged; package interest included in free text; honeypot/time check intact; success/error states work |
| **L1-11** | Deploy + smoke test | L1-01–L1-10 | Live URL loads; nav/anchors work; form submits; no console errors |
| **L2-01** | Platform map + flow | L1-11 | Hospital/Lab/Pharmacy tabs; animated flow; pause/reduced motion; mobile timeline |
| **L2-02** | Hero product mock | L1-11 | Multi-department content; no EMR; still visually consistent |
| **L2-03** | Transition band | L1-11 | Three-step EMR → HMIS visual; copy approved |
| **L2-04** | Brand studio update | L1-11 | HMIS labels and domain; preview still interactive |
| **L2-05** | FAQ rewrite | L1-11 | Visible FAQ and JSON-LD in sync |
| **L2-06** | OG image | L1-11 | 1200×630; HMIS headline; no EMR; optimized |
| **L2-07** | Motion polish | L2-01–L2-06 | Stagger/reveal/hover; no jank; reduced motion respected |
| **L2-08** | Performance pass | L2-01–L2-07 | LCP < 2.5s desktop / < 4s mobile; CLS < 0.1; no heavy libraries |
| **L2-09** | Final QA + deploy | L2-01–L2-08 | Full acceptance checklist in section 12 |

### 11.4 Time estimate

- Minimum launch slice: **4–6 hours** for a strong agent.
- Polish slice: **4–6 hours**.
- Full day if both are done carefully.

If launch is today, do the minimum slice, deploy, then polish behind the live site.

---

## 12. Acceptance criteria

### 12.1 Positioning

- [ ] The title, meta description, OG/Twitter tags and JSON-LD describe Telemex as an HMIS, not an EMR.
- [ ] The hero says HMIS and shows Hospital + Laboratory availability.
- [ ] The transition from EMR to HMIS is visible in the page, not just in metadata.
- [ ] “EMR” appears only in the transition story or legal scope explanations.
- [ ] The page never claims “full HMIS,” “full LIS,” “all-in-one,” or “complete hospital system.”

### 12.2 Packages and modules

- [ ] Hospital is marked `Available now`.
- [ ] Laboratory is marked `Available now`.
- [ ] Hospital Pharmacy is marked `Coming soon`.
- [ ] Inpatient, managed imaging and HMO are marked `Coming soon`.
- [ ] Radiology is `Coming soon` unless product explicitly promotes it.
- [ ] Reporting is shown as `In configuration` or omitted from live cards; it is not presented as a live capability.
- [ ] Every package card shows included modules and add-ons accurately.
- [ ] Every status badge includes readable text, not colour alone.
- [ ] Coming-soon cards do not use the same live CTA as available packages.
- [ ] The matrix legend is visible near the module grid.

### 12.3 Content

- [ ] No fake customer logos, testimonials, metrics, awards, certifications or partner logos.
- [ ] No QC, chain-of-custody, send-out, bidirectional analyzer, microbiology/histopathology, ISO 15189, CLIA, DOT, HIPAA, SOC 2 or clinical-acceptance claims.
- [ ] Laboratory copy stays within implemented capabilities: requests, specimens, verification, release, amendments, reports, delivery, one-way draft ingestion.
- [ ] Hospital copy stays within platform, finance, outpatient, and available add-ons.
- [ ] The FAQ answers match the launch matrix.
- [ ] The visible FAQ and FAQ JSON-LD match.
- [ ] The footer copy and links are updated on `index.html`, `privacy.html` and `terms.html`.
- [ ] `privacy.html` and `terms.html` no longer use EMR as the primary deployment category.
- [ ] `README.md` reflects the HMIS positioning and launch status.

### 12.4 Design

- [ ] The cream/green/mint/coral palette is preserved.
- [ ] Manrope headings and DM Sans body are preserved.
- [ ] Sharp corners, thin rules and editorial scale are preserved.
- [ ] The brand mark, orbit rings, floating chips and clipped product card are preserved where they still fit.
- [ ] New sections use the existing token system, not one-off colours.
- [ ] Status badges use the status tokens.
- [ ] The page does not look like a Luma clone.
- [ ] No Luma assets, copy, colours, logos or customer names are used.

### 12.5 Motion and infographics

- [ ] At least one new infographic explains the HMIS/department connection.
- [ ] Motion is purposeful and smooth; no scroll-jacking.
- [ ] Infinite animations pause off-screen and on hover/focus.
- [ ] `prefers-reduced-motion` disables non-essential motion.
- [ ] Added JS is under ~15KB uncompressed.
- [ ] No GSAP/Lottie/React runtime added.
- [ ] The page remains usable with JavaScript disabled (content and links still work; tabs may show the first panel).

### 12.6 Responsive and accessibility

- [ ] Tested at 320, 375, 390, 768, 1024, 1280 and 1440px.
- [ ] No horizontal overflow from orbits, floating chips, flow diagrams or long package names.
- [ ] Tabs work with keyboard arrows, Home and End.
- [ ] Focus states are visible on all interactive elements.
- [ ] Status badges meet contrast requirements; coral is not used for small body text.
- [ ] Skip link works.
- [ ] Form labels, errors and status messages are accessible.
- [ ] Mobile nav opens/closes and closes on link click.
- [ ] `aria-expanded`, `aria-selected`, `aria-controls`, `role="tablist"` and `role="tabpanel"` are correct.
- [ ] Decorative SVGs are `aria-hidden="true"`; meaningful diagrams have a text alternative.

### 12.7 Performance and SEO

- [ ] No console errors.
- [ ] No broken internal links or anchors.
- [ ] Google Fonts still load with preconnect.
- [ ] No new large images; any new image is optimized and lazy-loaded.
- [ ] `og.png` is updated or explicitly scheduled; it is not still the EMR image at launch.
- [ ] Title, meta description, canonical, OG/Twitter and JSON-LD are valid.
- [ ] Sitemap remains valid; update `lastmod` only if the site supports it.
- [ ] Lighthouse: Performance 90+ desktop / 80+ mobile; Accessibility 100; Best Practices 100; SEO 100 (or document a justified exception).
- [ ] LCP < 2.5s desktop / < 4s mobile; CLS < 0.1.

### 12.8 Form

- [ ] HubSpot portal/form IDs unchanged.
- [ ] Field names unchanged: `full_name`, `email`, `hospital_or_health_system`, `your_role`, `tell_us_about_your_consultation_workflow__teams__governance__or_current_system`.
- [ ] Package interest is included in the free-text payload or a confirmed HubSpot property.
- [ ] Honeypot and 3-second time check still work.
- [ ] Success and error states still work.
- [ ] Consent checkbox and privacy/terms links still work.
- [ ] No patient health information is requested or encouraged.

### 12.9 Deployment

- [ ] Static site deploys to the existing host.
- [ ] Live URL loads without errors.
- [ ] Nav, anchors, package CTAs, demo form and legal links work on the live URL.
- [ ] Social preview renders correctly (or is scheduled with a follow-up).
- [ ] Rollback path is known: previous static files are in git; revert the commit if needed.
- [ ] This handoff file is updated with what shipped and what was deferred.

---

## 13. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Stale docs say lab/pharmacy/radiology are configuration-only | Agent under- or over-claims | Use section 4 matrix; confirm with product; do not use business-model section 7 |
| Hospital Pharmacy package is promoted without sign-off | Overclaim | Default Coming soon; promote only with explicit product approval |
| Radiology engineering is delivered but acceptance is open | Overclaim or underclaim | Default Coming soon; promote only if HMIS-19 T01/T07 sign-off is confirmed |
| “Coming soon” looks like a footnote | User misses the status | Use visible badges, legend, muted card styling and copy |
| HubSpot field mismatch | Demo leads lost | Keep field names; put package interest in free text; test a submission |
| Motion hurts performance | Slow page, poor mobile experience | CSS/SVG only; pause off-screen; no heavy libraries; test low-end mobile |
| Luma inspiration becomes copying | Brand/legal risk | Borrow structure and motion only; no Luma assets, copy, colours or logos |
| Legal terminology changes are treated as substantive | Legal review delay | Terminology-only diff; owner review; no new claims |
| OG image/social cache stays EMR | Launch looks unfinished | Update `og.png`; re-scrape social previews or schedule follow-up |
| Too much scope before deploy | Misses today’s launch | Ship minimum slice first; polish behind live site |

---

## 14. First 30 minutes

1. Read this file completely.
2. `cd landing`
3. `git status` — confirm clean or identify existing user work. Do not overwrite unrelated changes.
4. Run the EMR inventory:
   ```sh
   rg -n -i "EMR|electronic medical|consultation-native|white-label hospital EMR" .
   ```
5. Confirm the launch matrix in section 4 with product. If unavailable, use the defaults in this file.
6. Create a branch:
   ```sh
   git checkout -b hmis-landing-launch
   ```
7. Do the minimum launch slice in section 11.1.
8. Preview locally:
   ```sh
   python3 -m http.server 4173
   ```
   Open `http://localhost:4173`.
9. Test the form with an internal/test email. Do not send patient data.
10. Deploy and smoke-test.
11. Update this file with what shipped and what was deferred.

---

## 15. Do not do

- Do not rebuild the site in React, Next.js, Astro or a static-site generator.
- Do not add a build step, package manager or bundler.
- Do not add GSAP, Lottie, Framer Motion, Three.js or a carousel library.
- Do not rename HubSpot fields or change portal/form IDs.
- Do not change the canonical domain or contact email without confirmation.
- Do not delete or rewrite the legal pages beyond the terminology replacements.
- Do not invent customer proof, metrics, certifications or integrations.
- Do not use Luma Health’s assets, copy, colours, logos or customer names.
- Do not use the prospect/client name “Trucore” or “TruPoint” on the marketing site without permission.
- Do not touch unrelated uncommitted documentation in `codex`.
- Do not let motion work block the launch.

---

## 16. Definition of done

The landing is ready to launch when:

- The site clearly says **HMIS**, not EMR, as the product category.
- The transition from EMR to HMIS is visible in the page.
- Hospital and Laboratory are marked **Available now**.
- Hospital Pharmacy and unready modules are marked **Coming soon**.
- The package/module matrix is accurate and visible.
- No claim exceeds the evidence.
- The design still looks and feels like Telemex.
- The page borrows Luma’s structure and motion feel without copying its brand.
- The form still works.
- The legal pages and footer are updated.
- The site is responsive, accessible, performant and deployed.
- This handoff file is updated with the shipped state and any deferred work.

---

## Appendix A — File map

| Area | Path |
|---|---|
| Landing page | `landing/index.html` |
| Design system | `landing/styles.css` |
| Behaviour | `landing/script.js` |
| Privacy | `landing/privacy.html` |
| Terms | `landing/terms.html` |
| Social preview | `landing/og.png` |
| Run/deploy notes | `landing/README.md` |
| Sitemap / robots | `landing/sitemap.xml`, `robots.txt` |
| Package catalogue | `core/configs/catalogue/catalogue.json` |
| Package/module definitions | `codex/hmis/hmis-02-packages-modules.md` |
| Laboratory briefing | `codex/hmis/laboratory-module-briefing.md` |
| Laboratory pilot plan | `codex/hmis/laboratory-pilot-closeoff-plan.md` |
| Laboratory pitch demo | `codex/hmis/laboratory-pitch-demo-plan.md` |
| Business model (stale readiness table) | `codex/telemex-business-model.md` |
| Product-side tokens | `clinic/src/index.css`, `clinic/tailwind.config.js` |
| Historical source (read-only) | `platform/telemex-landing/` — do not push new landing updates |

## Appendix B — Useful commands

```sh
cd landing

# Inventory EMR language
rg -n -i "EMR|electronic medical|consultation-native|white-label hospital EMR" .

# Check internal anchors and links roughly
rg -n 'href="' index.html privacy.html terms.html

# Preview
python3 -m http.server 4173

# Check JSON-LD blocks parse (requires jq)
python3 - <<'PY'
import json, re
from pathlib import Path
html = Path('index.html').read_text()
for i, block in enumerate(re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S), 1):
    json.loads(block)
    print(f'JSON-LD block {i}: OK')
PY

# Check git state
git status
git diff --stat
```

## Appendix C — Suggested commit message

```text
Rebrand landing page for the HMIS launch

Reposition Telemex as a modular HMIS for hospitals and laboratories.
Add Hospital and Laboratory package availability, mark Hospital Pharmacy
and unready modules as coming soon, update metadata, JSON-LD, footer and
legal terminology, and preserve the existing Telemex design system.

The page now explains the transition from a consultation EMR to a
connected hospital operating platform without claiming unbuilt modules
or certifications.
```

---

## Appendix D — What “premium and standard” means here

Premium is not more gradients, more cards or more animation. It is:

- a clear point of view;
- confident, short copy;
- generous spacing;
- one strong visual idea per section;
- motion that explains rather than decorates;
- honest status labels;
- consistent typography and colour;
- a page that feels calm on a phone.

The site should feel like a product a hospital can trust, not a launch-day landing page trying too hard.

---

## 17. Shipped state — 14 November 2026

**Shipped (minimum slice + most of the polish slice):**

- Metadata, OG/Twitter and JSON-LD rewritten around HMIS; FAQ JSON-LD matches the
  visible FAQ (first four questions).
- Hero: HMIS eyebrow, H1, lede, package proof chips, four-department product mock.
- From EMR to HMIS transition band with the three-step visual.
- Packages section: Hospital and Laboratory `Available now`, Hospital Pharmacy
  `Coming soon`, with a full module matrix and visible status legend.
- Platform map: Hospital / Laboratory / Hospital Pharmacy tabs with an animated
  flow dot that pauses off-screen, on hover/focus, and under reduced motion.
- “What is live today” grid: six available cards, five coming-soon cards, and the
  reporting `In configuration` note.
- Solutions, white-label brand studio, journey, governance, demo and footer copy
  updated to the launch matrix.
- Demo form keeps every HubSpot field name; package interest is UI-only and is
  prefixed into the existing free-text field on submit.
- `privacy.html` and `terms.html` updated to HMIS terminology with no new claims.

**Visual reference:** Luma Health was inspected for rhythm and craft only — sticky
floating header, one idea per section, oversized editorial statements, a quiet
numbers band, restrained infographics and honest status labels. No Luma copy,
colours, typefaces, assets or logos were used; Telemex keeps cream/green/mint,
Manrope + DM Sans and sharp corners.

**Deferred:**

- `og.png` still carries the EMR-era artwork and needs a 1200×630 HMIS redraw.
- No Lighthouse run, no multi-viewport QA sweep beyond the responsive rules, and
  no live form submission test (needs a real inbox and HubSpot portal access).
- Deployment and smoke test on the production host are not done.
