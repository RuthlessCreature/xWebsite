const sites = [
  { host: "xiaodu.tech", home: "https://xiaodu.tech/en/", titleTopic: "industrial automation", headingTopic: "industrial automation", contact: "https://xiaodu.tech/zh-cn/contact/", sitemap: "https://xiaodu.tech/sitemap.xml" },
  { host: "www.staychina.org", home: "https://www.staychina.org/en", titleTopic: "China company setup", headingTopic: "company in China", contact: "https://www.staychina.org/en/contact", sitemap: "https://www.staychina.org/sitemap-index.xml", workerOrigin: "https://pwebsite.nostalgia-ho.workers.dev" },
  { host: "pomerol.trade", home: "https://pomerol.trade/en/", titleTopic: "China product sourcing", headingTopic: "China product sourcing", focusPage: "https://pomerol.trade/china-sourcing-agent/", focusTopic: "China sourcing agent", contact: "https://pomerol.trade/contact/", sitemap: "https://pomerol.trade/sitemap.xml" },
];
const key = "6ef27e4a81efe1ff6c679ee852d012f2";
const monitorErrors = [];

async function read(url, userAgent = "SEO-Monitor/2.0") {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": userAgent, "cache-control": "no-cache" },
        redirect: "follow",
        signal: AbortSignal.timeout(20_000),
      });
      if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
      return { text: await response.text(), status: response.status, finalUrl: response.url };
    } catch (error) {
      lastError = error;
      if (String(error).includes("HTTP ") || attempt === 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw lastError;
}
async function readSiteRoute(site, url, userAgent) {
  try {
    return await read(url, userAgent);
  } catch (error) {
    if (site.host !== "www.staychina.org" || !String(error).includes("HTTP 403")) throw error;
    const parsed = new URL(url);
    parsed.hostname = new URL(site.workerOrigin).hostname;
    console.warn(`Checking the blocked public route through its Worker origin: ${parsed}`);
    return read(parsed.toString(), userAgent);
  }
}

function sitemapLocations(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)]
    .map((match) => match[1].trim().replaceAll("&amp;", "&"));
}

async function collectPageUrls(site, sitemapUrl, visited = new Set()) {
  if (visited.has(sitemapUrl)) return [];
  visited.add(sitemapUrl);
  const { text: xml } = await readSiteRoute(site, sitemapUrl);
  const locations = sitemapLocations(xml);
  if (/<sitemapindex\b/i.test(xml)) {
    return (await Promise.all(locations.map((url) => collectPageUrls(site, url, visited)))).flat();
  }
  return locations.filter((url) => url.startsWith(`https://${site.host}/`));
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "gi"))];
}
function attrs(tag) {
  const result = {};
  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)) result[match[1].toLowerCase()] = match[3];
  return result;
}
function clean(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim();
}
function normalizedUrl(value) {
  const url = new URL(value);
  if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
  url.hash = "";
  return url.toString();
}
function inspectPage(html, requestedUrl) {
  const title = tags(html, "title").map((match) => clean(match[1]));
  const h1 = tags(html, "h1").map((match) => clean(match[1]));
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attrs(match[0]));
  const descriptions = metas.filter((item) => item.name?.toLowerCase() === "description").map((item) => item.content || "");
  const robots = metas.filter((item) => item.name?.toLowerCase() === "robots").map((item) => item.content || "");
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attrs(match[0])).filter((item) => item.rel?.toLowerCase().split(/\s+/).includes("canonical")).map((item) => item.href || "");
  const social = Object.fromEntries(metas.filter((item) => item.property?.toLowerCase().startsWith("og:") || item.name?.toLowerCase().startsWith("twitter:")).map((item) => [item.property || item.name, item.content || ""]));
  return { title, h1, descriptions, robots, canonicals, social, requestedUrl };
}
function structuredTypes(html) {
  const types = new Set();
  const nodes = [];
  const errors = [];
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const visit = (value) => {
        if (Array.isArray(value)) return value.forEach(visit);
        if (!value || typeof value !== "object") return;
        const nodeTypes = Array.isArray(value["@type"]) ? value["@type"] : [value["@type"]];
        for (const type of nodeTypes) if (type) types.add(type);
        if (nodeTypes.some((type) => ["Organization", "WebSite"].includes(type))) nodes.push(value);
        for (const child of Object.values(value)) visit(child);
      };
      visit(JSON.parse(match[1]));
    } catch (error) {
      errors.push(String(error));
    }
  }
  return { types, nodes, errors };
}
function normalizedEntityId(value) {
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname.replace(/\/$/, "")}${url.hash}`;
  } catch {
    return "";
  }
}
function validateSiteEntities(html, site) {
  const { nodes } = structuredTypes(html);
  const root = new URL(site.home).origin;
  const organizationId = `${root}#organization`;
  const websiteId = `${root}#website`;
  const organization = nodes.find((node) => normalizedEntityId(node["@id"]) === organizationId && (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes("Organization"));
  const website = nodes.find((node) => normalizedEntityId(node["@id"]) === websiteId && (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes("WebSite"));
  const errors = [];
  if (!organization) errors.push(`JSON-LD is missing the site-root Organization entity ${organizationId}`);
  else {
    if (!organization.name) errors.push("Organization is missing name");
    if (organization.email !== "abd.yusuf.ibrahim.mustafa@gmail.com") errors.push("Organization email does not match Yusuf's unified contact");
    if (!/132\D*4269\D*4270/.test(organization.telephone || "")) errors.push("Organization telephone does not match Yusuf's unified contact");
    const points = Array.isArray(organization.contactPoint) ? organization.contactPoint : [organization.contactPoint];
    if (!points.some((point) => point?.name === "Yusuf" && point.email === "abd.yusuf.ibrahim.mustafa@gmail.com" && /132\D*4269\D*4270/.test(point.telephone || ""))) {
      errors.push("Organization ContactPoint is missing Yusuf's unified contact details");
    }
  }
  if (!website) errors.push(`JSON-LD is missing the site-root WebSite entity ${websiteId}`);
  else if (normalizedEntityId(website.publisher?.["@id"]) !== organizationId) errors.push("WebSite publisher does not reference the site-root Organization entity");
  return errors;
}
function validatePage(page) {
  const errors = [];
  if (page.title.length !== 1 || !page.title[0]) errors.push("title must appear exactly once and be non-empty");
  if (page.h1.length !== 1 || !page.h1[0]) errors.push("H1 must appear exactly once and be non-empty");
  if (page.descriptions.length !== 1 || !page.descriptions[0]) errors.push("meta description must appear exactly once and be non-empty");
  if (page.canonicals.length !== 1 || !page.canonicals[0]) errors.push("canonical must appear exactly once and be non-empty");
  else if (normalizedUrl(page.canonicals[0]) !== normalizedUrl(page.requestedUrl)) errors.push(`canonical mismatch: ${page.canonicals[0]}`);
  if (page.robots.some((content) => /\bnoindex\b/i.test(content))) errors.push("sitemap page is marked noindex");
  return errors;
}

for (const site of sites) {
  try {
  const base = `https://${site.host}`;
  const [{ text: robots }, { text: llms }, { text: contact }, { text: keyFile }] = await Promise.all([
    readSiteRoute(site, `${base}/robots.txt`), readSiteRoute(site, `${base}/llms.txt`), readSiteRoute(site, site.contact), readSiteRoute(site, `${base}/${key}.txt`),
  ]);
  const sitemapUrls = [...robots.matchAll(/^Sitemap:\s*(\S+)\s*$/gim)].map((match) => match[1]);
  if (sitemapUrls.length !== 1 || sitemapUrls[0] !== site.sitemap) {
    throw new Error(`${site.host}: robots.txt must declare only the canonical sitemap ${site.sitemap}; got ${sitemapUrls.join(", ") || "none"}`);
  }
  if (!llms.includes(site.sitemap)) throw new Error(`${site.host}: llms.txt must reference the same canonical sitemap as robots.txt`);
  if (!/^Content-Signal:\s*search=yes,\s*ai-input=yes,\s*ai-train=no\s*$/im.test(robots)) throw new Error(`${site.host}: robots.txt content signals must allow search and AI input while blocking training`);
  if (!/OAI-SearchBot|Claude-SearchBot|PerplexityBot/i.test(robots)) throw new Error(`${site.host}: AI search crawlers are not explicitly covered`);
  for (const crawler of ["360Spider", "Sogou web spider", "Sogou inst spider"]) {
    if (!robots.toLowerCase().includes(`user-agent: ${crawler.toLowerCase()}`)) throw new Error(`${site.host}: ${crawler} is not explicitly allowed in robots.txt`);
  }
  if (!/^User-agent:\s*Applebot\s*$[\s\S]*?^Allow:\s*\/\s*$/im.test(robots)) throw new Error(`${site.host}: Applebot search access is not explicitly allowed`);
  if (!/^User-agent:\s*Applebot-Extended\s*$[\s\S]*?^Disallow:\s*\/\s*$/im.test(robots)) throw new Error(`${site.host}: Applebot-Extended training access is not explicitly blocked`);
  if (!llms.trim()) throw new Error(`${site.host}: llms.txt is empty`);
  if (keyFile.trim() !== key) throw new Error(`${site.host}: IndexNow key verification failed`);
  if (!contact.includes("abd.yusuf.ibrahim.mustafa@gmail.com") || !/132\D*4269\D*4270/.test(contact) || !/Yusuf/i.test(contact)) {
    throw new Error(`${site.host}: contact page does not contain the unified contact details`);
  }

  const homepage = await readSiteRoute(site, site.home);
  const homepagePage = inspectPage(homepage.text, site.home);
  if (homepagePage.h1.length !== 1 || !homepagePage.title[0]?.toLowerCase().includes(site.titleTopic.toLowerCase()) || !homepagePage.h1[0]?.toLowerCase().includes(site.headingTopic.toLowerCase())) {
    throw new Error(`${site.host}: homepage title/H1 do not cover the configured topic`);
  }
  if (site.host === "xiaodu.tech" && !homepagePage.title[0]?.toLowerCase().includes("zhuhai xiaodu")) {
    throw new Error(`${site.host}: homepage title must distinguish the Zhuhai company from the unrelated Xiaodu brand`);
  }
  if (homepagePage.canonicals.length !== 1 || normalizedUrl(homepagePage.canonicals[0]) !== normalizedUrl(site.home)) {
    throw new Error(`${site.host}: homepage canonical does not match ${site.home}`);
  }
  for (const property of ["og:site_name", "og:title", "og:description", "og:url", "og:image", "twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    if (!homepagePage.social[property]) throw new Error(`${site.host}: homepage social metadata is missing ${property}`);
  }
  if (homepagePage.social["twitter:card"] !== "summary_large_image") throw new Error(`${site.host}: homepage twitter card must be summary_large_image`);
  if (new URL(homepagePage.social["og:image"]).protocol !== "https:") throw new Error(`${site.host}: homepage og:image must use HTTPS`);

  if (site.focusPage) {
    const focusResponse = await read(site.focusPage);
    const focus = inspectPage(focusResponse.text, site.focusPage);
    if (!focus.title[0]?.toLowerCase().includes(site.focusTopic.toLowerCase()) || !focus.h1[0]?.toLowerCase().includes(site.focusTopic.toLowerCase())) {
      throw new Error(`${site.host}: focused landing page does not target ${site.focusTopic}`);
    }
    if (focus.canonicals.length !== 1 || normalizedUrl(focus.canonicals[0]) !== normalizedUrl(site.focusPage)) {
      throw new Error(`${site.host}: focused landing page canonical does not match its URL`);
    }
  }
  const pageUrls = [...new Set((await Promise.all(sitemapUrls.map((url) => collectPageUrls(site, url)))).flat())];
  if (!pageUrls.length) throw new Error(`${site.host}: sitemap contains no canonical page URLs`);
  const failures = [];
  let pageFailures = 0;
  const pages = [];
  let next = 0;
  await Promise.all(Array.from({ length: 12 }, async () => {
    while (next < pageUrls.length) {
      const url = pageUrls[next++];
      try {
        const { text, status } = await readSiteRoute(site, url);
        const page = inspectPage(text, url);
        const errors = validatePage(page);
        const structured = structuredTypes(text);
        if (structured.errors.length) errors.push(`invalid JSON-LD: ${structured.errors.join(", ")}`);
        errors.push(...validateSiteEntities(text, site));
        if (site.host === "xiaodu.tech" && !structured.types.has("WebPage")) errors.push("JSON-LD is missing WebPage");
        if (site.host === "xiaodu.tech" && !page.title[0]?.toLowerCase().includes("zhuhai xiaodu") && !page.title[0]?.includes("珠海小度智能科技有限公司")) errors.push("title must use the distinct Zhuhai Xiaodu entity name");
        if (site.host === "xiaodu.tech" && page.title[0]?.length > 70) errors.push("title exceeds 70 characters");
        if (status !== 200 || errors.length) {
          pageFailures += 1;
          failures.push(`${url}: HTTP ${status}; ${errors.join("; ")}`);
        }
        pages.push(page);
      } catch (error) {
        pageFailures += 1;
        failures.push(`${url}: ${String(error)}`);
      }
    }
  }));
  const titles = new Map();
  for (const page of pages) {
    const title = page.title[0];
    if (title) titles.set(title, [...(titles.get(title) || []), page.requestedUrl]);
  }
  for (const [title, urls] of titles) if (urls.length > 1) failures.push(`${site.host}: duplicate title "${title}" on ${urls.join(", ")}`);
  if (failures.length) {
    monitorErrors.push(...failures);
    console.error(`${site.host}: ${failures.length} sitemap SEO checks failed:\n${failures.slice(0, 30).join("\n")}`);
  }

  for (const bot of ["Googlebot", "bingbot", "Baiduspider", "YandexBot", "DuckDuckBot", "Applebot", "360Spider", "Sogou web spider/4.0", "Sogou inst spider/4.0", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]) {
    try {
      const response = await readSiteRoute(site, `${base}/`, bot);
      console.log(`${site.host}: ${bot} probe returned HTTP ${response.status}`);
    } catch (error) {
      monitorErrors.push(`${site.host}: ${bot} probe failed: ${String(error)}`);
      console.error(`${site.host}: ${bot} probe failed: ${String(error)}`);
    }
  }
  console.log(`${site.host}: ${pageUrls.length - pageFailures}/${pageUrls.length} URLs passed status, unique title, H1, description, canonical and indexability checks`);
  } catch (error) {
    monitorErrors.push(`${site.host}: site audit failed: ${String(error)}`);
    console.error(`${site.host}: site audit failed: ${String(error)}`);
  }
}

if (monitorErrors.length) {
  console.error(`SEO monitor finished with ${monitorErrors.length} reported issue(s).`);
  process.exitCode = 1;
}



