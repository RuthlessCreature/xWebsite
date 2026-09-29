(() => {
  const supported = ["zh-CN","zh-TW","en","ja","es","pt","ru"];
  const selector = document.querySelector("[data-language]");
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelector("[data-year]");

  const getPath = (obj, path) => path.split(".").reduce((acc, key) => acc && acc[key], obj);

  const detectLanguage = () => {
    const urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang && supported.includes(urlLang)) return urlLang;

    const saved = localStorage.getItem("site-language");
    if (saved && supported.includes(saved)) return saved;

    const raw = navigator.language || "en";
    if (/^zh-(TW|HK|MO)/i.test(raw)) return "zh-TW";
    if (/^zh/i.test(raw)) return "zh-CN";
    if (/^ja/i.test(raw)) return "ja";
    if (/^es/i.test(raw)) return "es";
    if (/^pt/i.test(raw)) return "pt";
    if (/^ru/i.test(raw)) return "ru";
    return "en";
  };

  const applyLanguage = async (lang) => {
    try {
      const response = await fetch(`/i18n/${lang}.json`, { cache: "no-cache" });
      if (!response.ok) throw new Error("translation load failed");
      const dictionary = await response.json();

      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const value = getPath(dictionary, node.dataset.i18n);
        if (typeof value === "string") node.textContent = value;
      });

      if (dictionary.meta?.title) document.title = dictionary.meta.title;
      const description = document.querySelector('meta[name="description"]');
      if (description && dictionary.meta?.description) {
        description.setAttribute("content", dictionary.meta.description);
      }

      if (selector) selector.value = lang;
      localStorage.setItem("site-language", lang);
      history.replaceState(null, "", `${location.pathname}?lang=${encodeURIComponent(lang)}${location.hash}`);
    } catch (error) {
      console.error("Language switch failed:", error);
    }
  };

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

  selector?.addEventListener("change", (event) => applyLanguage(event.target.value));
  applyLanguage(detectLanguage());
})();
