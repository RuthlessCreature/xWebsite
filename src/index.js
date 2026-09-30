const BASE = "https://xiaodu.tech";

const LANGS = {
  "zh-cn": { asset: "zh-CN", label: "简中" },
  "zh-tw": { asset: "zh-TW", label: "繁中" },
  "en": { asset: "en", label: "EN" },
  "ja": { asset: "ja", label: "日本語" },
  "es": { asset: "es", label: "ES" },
  "pt": { asset: "pt", label: "PT" },
  "ru": { asset: "ru", label: "RU" }
};

const SOLUTIONS = [
  { slug:"robotic-automation", id:"1", image:"https://images.pexels.com/photos/18471441/pexels-photo-18471441/free-photo-of-robots-are-working-in-a-factory-with-a-machine.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"machine-vision", id:"2", image:"https://images.pexels.com/photos/29320998/pexels-photo-29320998/free-photo-of-advanced-robotic-arm-in-mexico-city-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"automated-sampling-lab", id:"3", image:"https://images.pexels.com/photos/32778341/pexels-photo-32778341/free-photo-of-advanced-robotic-automation-in-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"custom-equipment-integration", id:"4", image:"https://images.pexels.com/photos/34222005/pexels-photo-34222005/free-photo-of-automated-factory-conveyor-system-in-operation.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"industrial-software-data", id:"5", image:"https://images.pexels.com/photos/32845700/pexels-photo-32845700/free-photo-of-engineer-at-control-room-monitoring-screens.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"intelligent-workflow-automation", id:"6", image:"https://images.pexels.com/photos/32529341/pexels-photo-32529341/free-photo-of-advanced-control-room-in-el-agustino-lima.jpeg?auto=compress&dpr=1&h=900&w=1600" }
];

const CASES = [
  { slug:"automated-coal-mineral-sampling", id:"1", image:"https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1600", related:["3","5"], scope:["solution.3.a","solution.3.b","solution.3.c","solution.5.b"] },
  { slug:"robot-machine-tending-inspection", id:"2", image:"https://images.pexels.com/photos/18471441/pexels-photo-18471441/free-photo-of-robots-are-working-in-a-factory-with-a-machine.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","2"], scope:["solution.1.a","solution.1.b","solution.2.b","solution.2.c"] },
  { slug:"laboratory-robotic-automation", id:"3", image:"https://images.pexels.com/photos/32778341/pexels-photo-32778341/free-photo-of-advanced-robotic-automation-in-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","3"], scope:["solution.3.b","solution.3.c","solution.1.b","solution.1.c"] },
  { slug:"flexible-robotic-workstation", id:"4", image:"https://images.pexels.com/photos/29320998/pexels-photo-29320998/free-photo-of-advanced-robotic-arm-in-mexico-city-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","4"], scope:["solution.1.a","solution.1.b","solution.1.c","solution.4.a"] },
  { slug:"conveyor-robot-retrofit", id:"5", image:"https://images.pexels.com/photos/34222005/pexels-photo-34222005/free-photo-of-automated-factory-conveyor-system-in-operation.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","4"], scope:["solution.4.b","solution.4.c","solution.1.b","solution.1.c"] },
  { slug:"production-equipment-data-platform", id:"6", image:"https://images.pexels.com/photos/32845700/pexels-photo-32845700/free-photo-of-engineer-at-control-room-monitoring-screens.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["5","6"], scope:["solution.5.a","solution.5.b","solution.5.c","solution.6.b"] },
  { slug:"warehouse-vision-handling", id:"7", image:"https://images.pexels.com/photos/36522028/pexels-photo-36522028/free-photo-of-automated-warehouse-robotic-system-with-blue-crates.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","2"], scope:["solution.1.a","solution.1.b","solution.2.a","solution.2.c"] },
  { slug:"remote-monitoring-service", id:"8", image:"https://images.pexels.com/photos/32529341/pexels-photo-32529341/free-photo-of-advanced-control-room-in-el-agustino-lima.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["5","6"], scope:["solution.5.a","solution.5.c","solution.6.b","solution.6.c"] }
];

const UI = {
  "zh-cn": {home:"首页", solutions:"解决方案", cases:"项目案例", process:"交付流程", about:"关于我们", contact:"联系我们", scope:"典型交付范围", delivery:"项目如何推进", relatedCases:"相关项目案例", relatedSolutions:"相关解决方案", discuss:"讨论你的项目", ctaTitle:"把现场照片、图纸或需求发给 Nicole。", ctaText:"先判断能不能做、怎么做、风险在哪里，再进入正式方案。", back:"返回首页", global:"面向海外项目交付", project:"项目案例", solution:"解决方案", contactNicole:"联系 Nicole"},
  "zh-tw": {home:"首頁", solutions:"解決方案", cases:"專案案例", process:"交付流程", about:"關於我們", contact:"聯絡我們", scope:"典型交付範圍", delivery:"專案如何推進", relatedCases:"相關專案案例", relatedSolutions:"相關解決方案", discuss:"討論你的專案", ctaTitle:"把現場照片、圖紙或需求發給 Nicole。", ctaText:"先判斷能不能做、怎麼做、風險在哪裡，再進入正式方案。", back:"返回首頁", global:"面向海外專案交付", project:"專案案例", solution:"解決方案", contactNicole:"聯絡 Nicole"},
  "en": {home:"Home", solutions:"Solutions", cases:"Projects", process:"Delivery", about:"About", contact:"Contact", scope:"Typical Delivery Scope", delivery:"How the Project Moves Forward", relatedCases:"Related Project Cases", relatedSolutions:"Related Solutions", discuss:"Discuss Your Project", ctaTitle:"Send Nicole your site photos, drawings or requirements.", ctaText:"We assess feasibility, approach and risk first, then move into a formal proposal.", back:"Back to Home", global:"Built for International Project Delivery", project:"Project Case", solution:"Solution", contactNicole:"Contact Nicole"},
  "ja": {home:"ホーム", solutions:"ソリューション", cases:"プロジェクト事例", process:"導入プロセス", about:"会社情報", contact:"お問い合わせ", scope:"主な納入範囲", delivery:"プロジェクトの進め方", relatedCases:"関連プロジェクト", relatedSolutions:"関連ソリューション", discuss:"プロジェクトを相談", ctaTitle:"現場写真、図面、要件を Nicole へお送りください。", ctaText:"実現可能性、方法、リスクを整理してから正式提案へ進みます。", back:"ホームへ戻る", global:"海外プロジェクト対応", project:"プロジェクト事例", solution:"ソリューション", contactNicole:"Nicole に連絡"},
  "es": {home:"Inicio", solutions:"Soluciones", cases:"Proyectos", process:"Entrega", about:"Nosotros", contact:"Contacto", scope:"Alcance típico de entrega", delivery:"Cómo avanza el proyecto", relatedCases:"Proyectos relacionados", relatedSolutions:"Soluciones relacionadas", discuss:"Hablemos de su proyecto", ctaTitle:"Envíe a Nicole fotos de planta, planos o requisitos.", ctaText:"Primero evaluamos viabilidad, enfoque y riesgos; después preparamos la propuesta formal.", back:"Volver al inicio", global:"Preparados para proyectos internacionales", project:"Caso de proyecto", solution:"Solución", contactNicole:"Contactar con Nicole"},
  "pt": {home:"Início", solutions:"Soluções", cases:"Projetos", process:"Entrega", about:"Sobre nós", contact:"Contato", scope:"Escopo típico de entrega", delivery:"Como o projeto avança", relatedCases:"Projetos relacionados", relatedSolutions:"Soluções relacionadas", discuss:"Fale sobre seu projeto", ctaTitle:"Envie para Nicole fotos da planta, desenhos ou requisitos.", ctaText:"Primeiro avaliamos viabilidade, abordagem e riscos; depois avançamos para a proposta formal.", back:"Voltar ao início", global:"Preparados para projetos internacionais", project:"Caso de projeto", solution:"Solução", contactNicole:"Falar com Nicole"},
  "ru": {home:"Главная", solutions:"Решения", cases:"Проекты", process:"Реализация", about:"О компании", contact:"Контакты", scope:"Типовой объём поставки", delivery:"Как ведётся проект", relatedCases:"Связанные проекты", relatedSolutions:"Связанные решения", discuss:"Обсудить проект", ctaTitle:"Пришлите Nicole фото площадки, чертежи или требования.", ctaText:"Сначала оцениваем реализуемость, подход и риски, затем готовим формальное предложение.", back:"На главную", global:"Готовы к международным проектам", project:"Проектный кейс", solution:"Решение", contactNicole:"Связаться с Nicole"}
};

function esc(value="") {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

function get(obj, path) {
  return path.split(".").reduce((acc,key) => acc && acc[key], obj);
}

async function loadDict(env, lang) {
  const asset = LANGS[lang]?.asset || "en";
  const url = new URL("/i18n/" + asset + ".json", BASE);
  const res = await env.ASSETS.fetch(url);
  if (!res.ok) throw new Error("translation unavailable");
  return res.json();
}

function languageOptions(current) {
  return Object.entries(LANGS).map(([key,value]) =>
    `<option value="${key}" ${key===current?"selected":""}>${esc(value.label)}</option>`
  ).join("");
}

function alternates(path) {
  const items = Object.keys(LANGS).map(lang =>
    `<link rel="alternate" hreflang="${LANGS[lang].asset}" href="${BASE}/${lang}/${path}">`
  ).join("");
  return items + `<link rel="alternate" hreflang="x-default" href="${BASE}/en/${path}">`;
}

function orgJsonLd() {
  return JSON.stringify({
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd.",
    "url":BASE,
    "email":"13923387986@163.com",
    "telephone":"+86 139 2338 7986",
    "contactPoint":{"@type":"ContactPoint","name":"Nicole Fan","telephone":"+86 139 2338 7986","email":"13923387986@163.com","contactType":"sales"}
  });
}

function header(lang, ui, dict) {
  return `
  <header class="site-header">
    <div class="header-top"><div class="shell header-top-inner"><span>${esc(ui.global)}</span><div class="header-contact"><a href="tel:+8613923387986">Nicole Fan · +86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></div></div></div>
    <div class="shell nav-shell detail-nav-shell">
      <a class="brand" href="/${lang}/"><span class="brand-mark">XD</span><span class="brand-copy"><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></span></a>
      <nav class="detail-nav"><a href="/${lang}/#solutions">${esc(ui.solutions)}</a><a href="/${lang}/#cases">${esc(ui.cases)}</a><a href="/${lang}/#process">${esc(ui.process)}</a><a href="/${lang}/#about">${esc(ui.about)}</a></nav>
      <div class="nav-actions"><label class="language-picker"><span>🌐</span><select data-language>${languageOptions(lang)}</select></label><a class="header-cta" href="#contact">${esc(ui.contact)}</a></div>
    </div>
  </header>`;
}

function contact(lang, ui) {
  return `
  <section class="contact-section" id="contact">
    <div class="shell contact-layout">
      <div class="contact-main"><span class="eyebrow light">${esc(ui.discuss)}</span><h2>${esc(ui.ctaTitle)}</h2><p>${esc(ui.ctaText)}</p><div class="contact-actions"><a class="btn btn-light" href="tel:+8613923387986">${esc(ui.contactNicole)}</a><a class="btn btn-outline-light" href="mailto:13923387986@163.com">13923387986@163.com</a></div></div>
      <aside class="contact-person"><span class="contact-label">Business Contact</span><strong>Nicole Fan</strong><a href="tel:+8613923387986">+86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></aside>
    </div>
  </section>`;
}

function shellPage({lang, title, description, canonicalPath, body, dict, ui, schema}) {
  const canonical = `${BASE}/${lang}/${canonicalPath}`;
  return `<!doctype html>
<html lang="${esc(LANGS[lang].asset)}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} | Zhuhai Xiaodu Intelligent Technology</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${alternates(canonicalPath)}
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${orgJsonLd()}</script>
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ""}
</head>
<body class="detail-page">
${header(lang,ui,dict)}
<main>${body}</main>
${contact(lang,ui)}
<footer class="site-footer"><div class="shell footer-layout"><div><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></div><div class="footer-contact"><span>Nicole Fan</span><a href="tel:+8613923387986">+86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></div><p>© 2026 Zhuhai Xiaodu Intelligent Technology Co., Ltd.</p></div></footer>
<script src="/app.js" defer></script>
</body></html>`;
}

function processCards(dict) {
  return ["1","2","3","4","5"].map(id => `<article><span>0${id}</span><strong>${esc(dict.process[id].title)}</strong><p>${esc(dict.process[id].text)}</p></article>`).join("");
}

function solutionPage(lang, dict, item) {
  const ui=UI[lang], data=dict.solution[item.id];
  const related = CASES.filter(c=>c.related.includes(item.id)).slice(0,3);
  const body=`
  <section class="detail-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.9),rgba(9,27,40,.28)),url('${item.image}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/">← ${esc(ui.back)}</a><span class="detail-type">${esc(ui.solution)}</span><h1>${esc(data.title)}</h1><p>${esc(data.text)}</p><a class="btn btn-primary" href="#contact">${esc(ui.discuss)} →</a></div></div></section>
  <section class="section detail-scope"><div class="shell"><div class="section-head"><div><span class="eyebrow">${esc(ui.scope)}</span><h2>${esc(data.title)}</h2></div><p>${esc(data.text)}</p></div><div class="detail-cap-grid"><article><span>01</span><strong>${esc(data.a)}</strong></article><article><span>02</span><strong>${esc(data.b)}</strong></article><article><span>03</span><strong>${esc(data.c)}</strong></article></div></div></section>
  <section class="section process-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">PROJECT DELIVERY</span><h2>${esc(ui.delivery)}</h2></div><p>${esc(dict.process.desc)}</p></div><div class="process-grid">${processCards(dict)}</div></div></section>
  ${related.length ? `<section class="section cases-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">PROJECTS</span><h2>${esc(ui.relatedCases)}</h2></div></div><div class="detail-related-grid">${related.map(c=>`<a class="case-card" href="/${lang}/cases/${c.slug}/"><img src="${c.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(dict.case[c.id].market)}</span><h3>${esc(dict.case[c.id].title)}</h3><p>${esc(dict.case[c.id].text)}</p></div></a>`).join("")}</div></div></section>` : ""}
  `;
  const schema={"@context":"https://schema.org","@type":"Service","name":data.title,"description":data.text,"provider":{"@type":"Organization","name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd."},"areaServed":"Worldwide"};
  return shellPage({lang,title:data.title,description:data.text,canonicalPath:`solutions/${item.slug}/`,body,dict,ui,schema});
}

function casePage(lang, dict, item) {
  const ui=UI[lang], data=dict.case[item.id];
  const scopes=item.scope.map((path,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(get(dict,path) || "")}</strong></article>`).join("");
  const related=item.related.map(id=>SOLUTIONS.find(s=>s.id===id)).filter(Boolean);
  const body=`
  <section class="detail-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.91),rgba(9,27,40,.2)),url('${item.image}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/">← ${esc(ui.back)}</a><span class="detail-type">${esc(data.market)}</span><h1>${esc(data.title)}</h1><p>${esc(data.text)}</p><a class="btn btn-primary" href="#contact">${esc(ui.discuss)} →</a></div></div></section>
  <section class="section detail-scope"><div class="shell"><div class="section-head"><div><span class="eyebrow">${esc(ui.project)}</span><h2>${esc(ui.scope)}</h2></div><p>${esc(data.text)}</p></div><div class="detail-cap-grid detail-cap-grid-four">${scopes}</div></div></section>
  <section class="section process-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">DELIVERY</span><h2>${esc(ui.delivery)}</h2></div><p>${esc(dict.process.desc)}</p></div><div class="process-grid">${processCards(dict)}</div></div></section>
  <section class="section cases-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">SOLUTIONS</span><h2>${esc(ui.relatedSolutions)}</h2></div></div><div class="detail-related-grid">${related.map(s=>`<a class="case-card" href="/${lang}/solutions/${s.slug}/"><img src="${s.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(ui.solution)}</span><h3>${esc(dict.solution[s.id].title)}</h3><p>${esc(dict.solution[s.id].text)}</p></div></a>`).join("")}</div></div></section>
  `;
  const schema={"@context":"https://schema.org","@type":"Article","headline":data.title,"description":data.text,"author":{"@type":"Organization","name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd."},"about":data.market};
  return shellPage({lang,title:data.title,description:data.text,canonicalPath:`cases/${item.slug}/`,body,dict,ui,schema});
}

async function homePage(request, env, lang, dict) {
  const assetReq = new Request(new URL("/index.html", request.url), request);
  const baseRes = await env.ASSETS.fetch(assetReq);
  const ui=UI[lang];
  const links = Object.keys(LANGS).map(code => `<link rel="alternate" hreflang="${LANGS[code].asset}" href="${BASE}/${code}/">`).join("") + `<link rel="canonical" href="${BASE}/${lang}/"><link rel="alternate" hreflang="x-default" href="${BASE}/en/">`;
  return new HTMLRewriter()
    .on("html",{element(e){e.setAttribute("lang",LANGS[lang].asset)}})
    .on("head",{element(e){e.append(links,{html:true});e.append(`<script type="application/ld+json">${orgJsonLd()}</script>`,{html:true})}})
    .on("title",{element(e){e.setInnerContent(dict.meta.title)}})
    .on('meta[name="description"]',{element(e){e.setAttribute("content",dict.meta.description)}})
    .on("[data-i18n]",{element(e){const v=get(dict,e.getAttribute("data-i18n"));if(typeof v==="string")e.setInnerContent(v)}})
    .on("[data-route]",{element(e){e.setAttribute("href",`/${lang}/${e.getAttribute("data-route")}/`)}})
    .transform(baseRes);
}

function sitemap() {
  const urls=[];
  for(const lang of Object.keys(LANGS)){
    urls.push(`${BASE}/${lang}/`);
    for(const s of SOLUTIONS) urls.push(`${BASE}/${lang}/solutions/${s.slug}/`);
    for(const c of CASES) urls.push(`${BASE}/${lang}/cases/${c.slug}/`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc><changefreq>monthly</changefreq><priority>${u.split("/").length<=5?"1.0":"0.8"}</priority></url>`).join("")}</urlset>`;
}

export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    const path=url.pathname;

    if(path==="/") return Response.redirect(BASE+"/zh-cn/",301);
    if(path==="/sitemap.xml") return new Response(sitemap(),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=3600"}});
    if(path==="/robots.txt") return new Response(`User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`,{headers:{"content-type":"text/plain; charset=utf-8"}});

    const match=path.match(/^\/(zh-cn|zh-tw|en|ja|es|pt|ru)(?:\/(.*))?$/);
    if(!match) return env.ASSETS.fetch(request);

    const lang=match[1], rest=(match[2]||"").replace(/\/+$/,"");
    const dict=await loadDict(env,lang);

    if(!rest) return homePage(request,env,lang,dict);

    const solutionMatch=rest.match(/^solutions\/([^/]+)$/);
    if(solutionMatch){
      const item=SOLUTIONS.find(x=>x.slug===solutionMatch[1]);
      if(item) return new Response(solutionPage(lang,dict,item),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    }

    const caseMatch=rest.match(/^cases\/([^/]+)$/);
    if(caseMatch){
      const item=CASES.find(x=>x.slug===caseMatch[1]);
      if(item) return new Response(casePage(lang,dict,item),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    }

    return new Response("Not Found",{status:404,headers:{"content-type":"text/plain; charset=utf-8"}});
  }
};
