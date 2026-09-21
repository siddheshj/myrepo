const STORAGE_KEY = "sj-theme";
const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const themeBtn = document.querySelector("[data-theme-toggle]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  if (themeBtn) {
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  }
}

if (themeBtn) {
  applyTheme(currentTheme());
  themeBtn.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const io = reduce
  ? null
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

document.querySelectorAll(".reveal, .step").forEach((el) => {
  if (reduce) el.classList.add("is-in");
  else io.observe(el);
});

const form = document.querySelector("[data-contact-form]");
const status = document.querySelector("[data-form-status]");

if (form) {
  form.addEventListener("submit", async (event) => {
    if (!form.dataset.ajax) return;
    event.preventDefault();
    if (status) status.textContent = "Sending…";
    const body = new URLSearchParams(new FormData(form)).toString();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error("Request failed");
      window.location.href = "/thank-you";
    } catch {
      if (status) {
        status.textContent =
          "The form could not be sent from this preview. Email sudhirvj@gmail.com, or try again on the Netlify site.";
      }
    }
  });
}

if (header) {
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    },
    { passive: true }
  );
}
