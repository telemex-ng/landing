const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      mobileMenu.hidden = true;
    });
  });
}

const stageContent = {
  consult: {
    count: "01",
    title: "The chart is part of the consultation.",
    copy: "In-person or video care, live documentation, and patient context—side by side.",
  },
  chart: {
    count: "02",
    title: "A structured note that mirrors clinical thinking.",
    copy: "Move through history, physical examination, investigations, diagnosis, and treatment plan.",
  },
  coordinate: {
    count: "03",
    title: "Safer decisions, documented at the point of care.",
    copy: "Use clinical codes, allergy checks, CDS warnings, and reasoned overrides before finalising orders.",
  },
  engage: {
    count: "04",
    title: "The encounter becomes part of the whole record.",
    copy: "Publish an immutable visit summary and carry medications, orders, referrals, and follow-up into the timeline.",
  },
};

document.querySelectorAll(".stage-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.stage;
    const content = stageContent[key];
    if (!content) return;

    document.querySelectorAll(".stage-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    const screen = document.querySelector("[data-stage-screen]");
    if (screen) {
      screen.dataset.stageScreen = key;
      screen.animate(
        [
          { opacity: 0.45, transform: "translateY(6px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 280, easing: "ease-out" },
      );
    }

    document.querySelector("[data-stage-title]").textContent = content.title;
    document.querySelector("[data-stage-copy]").textContent = content.copy;
    document.querySelector("[data-stage-count]").textContent = content.count;
  });
});

document.querySelectorAll("[data-audience]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const audience = tab.dataset.audience;
    document.querySelectorAll("[data-audience]").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const selected = panel.dataset.panel === audience;
      panel.hidden = !selected;
      panel.classList.toggle("active", selected);
    });
  });
});

document.querySelectorAll(".colour-swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".colour-swatch").forEach((item) => item.classList.remove("active"));
    swatch.classList.add("active");
    document.querySelector("[data-brand-preview]").style.setProperty("--preview-brand", swatch.dataset.brandColor);
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const willOpen = !item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const loginDialog = document.querySelector("#login-dialog");
document.querySelectorAll('a[href="#login"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (typeof loginDialog?.showModal === "function") loginDialog.showModal();
  });
});
document.querySelector(".dialog-close")?.addEventListener("click", () => loginDialog?.close());
loginDialog?.addEventListener("click", (event) => {
  if (event.target === loginDialog) loginDialog.close();
});

// ---------------------------------------------------------------------------
// HubSpot demo form configuration
// Portal 147554530 lives on the EU1 shard, so submissions must go to
// api-eu1.hsforms.com (never api.hsforms.com).
// TODO: before production, move these two values out of source control —
// e.g. inject them at deploy time or read them from a generated env file:
//   window.__HUBSPOT_CONFIG__ = { portalId: "...", formId: "..." };
// and fall back to the literals below for local preview.
// ---------------------------------------------------------------------------
const HUBSPOT_PORTAL_ID = "147554530";
const HUBSPOT_FORM_ID = "c1dbe6fd-a16f-48df-be26-c664d2e22bd9";
const HUBSPOT_FORM_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

// Spam protection: the honeypot field ("website") must stay empty, and humans
// need at least a few seconds between page load and hitting submit. Bots that
// fill the hidden field or submit instantly are rejected silently — they see
// the normal success message but nothing is sent to HubSpot.
const DEMO_FORM_READY_AT = Date.now();
const MIN_SECONDS_BEFORE_SUBMIT = 3;

const demoForm = document.querySelector("#demo-form");
demoForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fields = [...demoForm.querySelectorAll("[required]")];
  fields.forEach((field) => field.classList.toggle("field-error", !field.checkValidity()));
  const firstInvalid = fields.find((field) => !field.checkValidity());
  const status = demoForm.querySelector(".form-status");

  if (firstInvalid) {
    status.textContent = "Please complete the highlighted fields before continuing.";
    firstInvalid.focus();
    return;
  }

  const data = new FormData(demoForm);

  // --- Spam protection: reject silently before touching HubSpot ---
  const honeypotValue = String(data.get("website") || "").trim();
  const elapsedSeconds = (Date.now() - DEMO_FORM_READY_AT) / 1000;
  if (honeypotValue || elapsedSeconds < MIN_SECONDS_BEFORE_SUBMIT) {
    console.warn(
      `Demo form submission blocked by spam protection (honeypot: ${Boolean(honeypotValue)}, elapsed: ${elapsedSeconds.toFixed(1)}s).`,
    );
    status.textContent = "Thanks — your demo request is in. Our team will be in touch shortly.";
    demoForm.reset();
    return;
  }

  const button = demoForm.querySelector('button[type="submit"]');
  const submitLabel = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "Submitting…";
  }
  status.classList.remove("error");
  status.textContent = "Sending your request…";

  const hsField = (name, value) => ({ objectTypeId: "0-1", name, value });
  const payload = {
    submittedAt: Date.now(),
    fields: [
      hsField("full_name", String(data.get("full_name") || "").trim()),
      hsField("email", String(data.get("email") || "").trim()),
      hsField("hospital_or_health_system", String(data.get("hospital_or_health_system") || "").trim()),
      hsField("your_role", String(data.get("your_role") || "")),
      hsField(
        "tell_us_about_your_consultation_workflow__teams__governance__or_current_system",
        String(data.get("tell_us_about_your_consultation_workflow__teams__governance__or_current_system") || "").trim(),
      ),
    ],
    context: {
      pageUri: window.location.href,
      pageName: "Telemex — Request a demo",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to be contacted about Telemex and understand my details will only be used to respond to this enquiry.",
      },
    },
  };

  try {
    const response = await fetch(HUBSPOT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HubSpot submission failed with status ${response.status}`);
    }

    const result = await response.json();
    console.info("HubSpot submission accepted:", result.inlineMessage || result.redirectUri || "OK");
    status.textContent = "Thanks — your demo request is in. Our team will be in touch shortly.";
    demoForm.reset();
  } catch (error) {
    console.error(error);
    status.classList.add("error");
    status.textContent = "We couldn't submit your request just now. Please email telemex.health@gmail.com directly.";
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = submitLabel;
    }
  }
});

document.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => field.classList.remove("field-error"));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelector("#current-year").textContent = new Date().getFullYear();
