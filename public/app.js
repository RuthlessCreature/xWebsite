(() => {
  const supported = ["zh-cn","zh-tw","en","ja","es","pt","ru"];
  const selector = document.querySelector("[data-language]");
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelector("[data-year]");

  const prefixFromLocale = (raw = "") => {
    if (/^zh-(TW|HK|MO)/i.test(raw)) return "zh-tw";
    if (/^zh/i.test(raw)) return "zh-cn";
    if (/^ja/i.test(raw)) return "ja";
    if (/^es/i.test(raw)) return "es";
    if (/^pt/i.test(raw)) return "pt";
    if (/^ru/i.test(raw)) return "ru";
    return "en";
  };

  const currentParts = location.pathname.split("/").filter(Boolean);
  const currentLang = supported.includes(currentParts[0]) ? currentParts[0] : prefixFromLocale(navigator.language);

  if (selector) selector.value = currentLang;
  if (year) year.textContent = new Date().getFullYear();

  const syncHeader = () => header?.classList.toggle("scrolled", window.scrollY > 8);
  syncHeader();
  addEventListener("scroll", syncHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    addEventListener("resize", () => {
      if (innerWidth > 1100) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  selector?.addEventListener("change", (event) => {
    const next = event.target.value;
    if (!supported.includes(next)) return;
    const parts = location.pathname.split("/").filter(Boolean);
    if (supported.includes(parts[0])) parts[0] = next;
    else parts.unshift(next);
    const nextPath = "/" + parts.join("/") + (location.pathname.endsWith("/") ? "/" : "");
    location.href = nextPath + location.hash;
  });
})();
