/* ==========================================================================
   Telemex site behaviour. Vanilla, no dependencies.
   ========================================================================== */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReduced = () => reduced.matches;

/* ---------------------------------------------------------------- header -- */

const head = document.querySelector(".site-head");
if (head) {
  const sync = () => head.classList.toggle("is-stuck", window.scrollY > 12);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

/* ---------------------------------------------------------- mobile menu -- */

const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".nav-overlay");
if (menuBtn && overlay) {
  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    overlay.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () =>
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true"),
  );
  overlay.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
}

/* ------------------------------------------------------- headline splits -- */

const splitHeadline = (el) => {
  const source = [...el.childNodes];
  const frag = document.createDocumentFragment();
  let index = 0;

  const pushWords = (text, target) => {
    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (!part.trim()) {
        target.appendChild(document.createTextNode(part));
        return;
      }
      const w = document.createElement("span");
      w.className = "w";
      w.style.setProperty("--i", index++);
      const inner = document.createElement("span");
      inner.textContent = part;
      w.appendChild(inner);
      target.appendChild(w);
    });
  };

  source.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      pushWords(node.textContent, frag);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === "BR") {
        frag.appendChild(document.createElement("br"));
        return;
      }
      const clone = node.cloneNode(false);
      pushWords(node.textContent, clone);
      frag.appendChild(clone);
    }
  });

  el.textContent = "";
  el.appendChild(frag);
  el.classList.add("split-line");
};

document.querySelectorAll("[data-split]").forEach((el) => {
  if (prefersReduced()) return;
  splitHeadline(el);
});

/* --------------------------------------------------------------- reveals -- */

const revealEls = document.querySelectorAll("[data-reveal], [data-clip], [data-split]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* -------------------------------------------------------------- parallax -- */

const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;

const runParallax = () => {
  ticking = false;
  if (prefersReduced()) return;
  const viewport = window.innerHeight;
  parallaxEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -200 || rect.top > viewport + 200) return;
    const speed = parseFloat(el.dataset.parallax) || 0.08;
    const offset = (rect.top + rect.height / 2 - viewport / 2) * -speed;
    el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  });
};

const requestParallax = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(runParallax);
};

if (parallaxEls.length && !prefersReduced()) {
  requestParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
}

/* ------------------------------------------------------- horizontal rail -- */

const railWrap = document.querySelector(".rail-wrap");
const railTrack = document.querySelector(".rail-track");
let railTicking = false;

const runRail = () => {
  railTicking = false;
  if (!railWrap || !railTrack || prefersReduced()) return;
  if (window.innerWidth <= 1080) {
    railTrack.style.transform = "";
    return;
  }
  const rect = railWrap.getBoundingClientRect();
  const travel = railWrap.offsetHeight - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / Math.max(travel, 1), 0), 1);
  const distance = Math.max(railTrack.scrollWidth - window.innerWidth + 40, 0);
  railTrack.style.transform = `translate3d(${(-progress * distance).toFixed(1)}px, 0, 0)`;
};

const requestRail = () => {
  if (railTicking) return;
  railTicking = true;
  requestAnimationFrame(runRail);
};

if (railWrap) {
  requestRail();
  window.addEventListener("scroll", requestRail, { passive: true });
  window.addEventListener("resize", requestRail);
}

/* -------------------------------------------------------------- counters -- */

const counters = document.querySelectorAll("[data-count]");
if (counters.length && "IntersectionObserver" in window && !prefersReduced()) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const decimals = (el.dataset.count.split(".")[1] || "").length;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => countObserver.observe(el));
} else {
  counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
}

/* ------------------------------------------------------------------ tabs -- */

const wireTabs = (tabSelector, panelSelector, tabKey, panelKey) => {
  const tabs = [...document.querySelectorAll(tabSelector)];
  const panels = [...document.querySelectorAll(panelSelector)];
  if (!tabs.length || !panels.length) return;

  const select = (tab) => {
    const key = tab.dataset[tabKey];
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset[panelKey] !== key;
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const last = tabs.length - 1;
      let next = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[i === last ? 0 : i + 1];
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[i === 0 ? last : i - 1];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[last];
      if (!next) return;
      e.preventDefault();
      select(next);
      next.focus();
    });
  });
};

wireTabs("[data-flow-tab]", "[data-flow-panel]", "flowTab", "flowPanel");
wireTabs("[data-role-tab]", "[data-role-panel]", "roleTab", "rolePanel");

// Pause the flow dot when its diagram leaves the viewport.
const flowTrack = document.querySelector(".flow-track");
if (flowTrack && "IntersectionObserver" in window) {
  new IntersectionObserver(
    (entries) => entries.forEach((e) => flowTrack.classList.toggle("is-paused", !e.isIntersecting)),
    { threshold: 0.2 },
  ).observe(flowTrack);
}

/* ------------------------------------------------------------------- FAQ -- */

document.querySelectorAll(".faq-item > button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = !item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (open) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

/* ------------------------------------------------------------------ form -- */

const HUBSPOT_PORTAL_ID = "147554530";
const HUBSPOT_FORM_ID = "c1dbe6fd-a16f-48df-be26-c664d2e22bd9";
const HUBSPOT_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const FREE_TEXT = "tell_us_about_your_consultation_workflow__teams__governance__or_current_system";
const FORM_READY_AT = Date.now();
const MIN_SECONDS = 3;

const demoForm = document.querySelector("#demo-form");

// Package interest is UI-only: fold it into the existing free-text field.
document.addEventListener(
  "submit",
  (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== "demo-form") return;
    const interest = form.querySelector("#package-interest");
    const textarea = form.querySelector(`[name="${FREE_TEXT}"]`);
    const value = interest ? interest.value.trim() : "";
    if (!textarea || !value || textarea.value.startsWith("Package interest:")) return;
    textarea.value = `Package interest: ${value}\n${textarea.value}`.trimEnd();
  },
  true,
);

demoForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fields = [...demoForm.querySelectorAll("[required]")];
  fields.forEach((f) => f.classList.toggle("field-error", !f.checkValidity()));
  const firstInvalid = fields.find((f) => !f.checkValidity());
  const status = demoForm.querySelector(".form-status");

  if (firstInvalid) {
    status.textContent = "Please complete the highlighted fields before continuing.";
    firstInvalid.focus();
    return;
  }

  const data = new FormData(demoForm);
  const honeypot = String(data.get("website") || "").trim();
  const elapsed = (Date.now() - FORM_READY_AT) / 1000;
  if (honeypot || elapsed < MIN_SECONDS) {
    status.textContent = "Thanks, your request is in. Our team will be in touch shortly.";
    demoForm.reset();
    return;
  }

  const button = demoForm.querySelector('button[type="submit"]');
  const label = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "Sending…";
  }
  status.classList.remove("error");
  status.textContent = "Sending your request…";

  const field = (name, value) => ({ objectTypeId: "0-1", name, value });
  const payload = {
    submittedAt: Date.now(),
    fields: [
      field("full_name", String(data.get("full_name") || "").trim()),
      field("email", String(data.get("email") || "").trim()),
      field("hospital_or_health_system", String(data.get("hospital_or_health_system") || "").trim()),
      field("your_role", String(data.get("your_role") || "")),
      field(FREE_TEXT, String(data.get(FREE_TEXT) || "").trim()),
    ],
    context: { pageUri: window.location.href, pageName: "Telemex demo request" },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to be contacted about Telemex and understand my details will only be used to respond to this enquiry.",
      },
    },
  };

  try {
    const response = await fetch(HUBSPOT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HubSpot submission failed (${response.status})`);
    status.textContent = "Thanks, your request is in. Our team will be in touch shortly.";
    demoForm.reset();
  } catch (error) {
    console.error(error);
    status.classList.add("error");
    status.textContent = "We couldn't submit just now. Please email telemex.health@gmail.com directly.";
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = label;
    }
  }
});

document.querySelectorAll("input, select, textarea").forEach((f) => {
  f.addEventListener("input", () => f.classList.remove("field-error"));
});

/* ------------------------------------------------------------------ misc -- */

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  requestParallax();
  requestRail();
});
