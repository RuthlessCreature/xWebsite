const sites = [
  { host: "xiaodu.tech", home: "https://xiaodu.tech/en/", titleTopic: "industrial automation", headingTopic: "industrial automation", contact: "https://xiaodu.tech/zh-cn/contact/", sitemap: "https://xiaodu.tech/sitemap.xml" },
  { host: "www.staychina.org", home: "https://www.staychina.org/en/", titleTopic: "China company setup", headingTopic: "company in China", contact: "https://www.staychina.org/en/contact", sitemap: "https://www.staychina.org/sitemap-index.xml" },
  { host: "pomerol.trade", home: "https://pomerol.trade/en/", titleTopic: "China sourcing agent", headingTopic: "China sourcing agent", contact: "https://pomerol.trade/contact/", sitemap: "https://pomerol.trade/sitemap.xml" },
];

const key = "6ef27e4a81efe1ff6c679ee852d012f2";

async function read(url, userAgent = "SEO-Monitor/1.0") {
  const response = await fetch(url, {
    headers: { "user-agent": userAgent, "cache-control": "no-cache" },
    redirect: "follow",
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
}

for (const site of sites) {
  const base = `https://${site.host}`;
  const robots = await read(`${base}/robots.txt`);
  const llms = await read(`${base}/llms.txt`);
  let sitemap;
  try {
    sitemap = await read(site.sitemap);
  } catch (error) {
    if (site.host !== "www.staychina.org" || !String(error).includes("HTTP 403")) throw error;
    console.warn("www.staychina.org sitemap blocks the GitHub runner; checking the same deployed Worker route via its workers.dev origin.");
    sitemap = await read("https://pwebsite.nostalgia-ho.workers.dev/sitemap-index.xml");
  }
  const contact = await read(site.contact);
  const keyFile = await read(`${base}/${key}.txt`);

  if (!robots.includes("Sitemap:") && !robots.includes("Sitemap:".toLowerCase())) {
    throw new Error(`${site.host}: robots.txt does not declare a sitemap`);
  }
  if (!/OAI-SearchBot|Claude-SearchBot|PerplexityBot/i.test(robots)) {
    throw new Error(`${site.host}: search-oriented AI crawlers are not explicitly covered`);
  }
  if (!llms.trim() || !sitemap.includes(site.host)) {
    throw new Error(`${site.host}: llms.txt or sitemap is empty/mis-hosted`);
  }
  if (keyFile.trim() !== key) throw new Error(`${site.host}: IndexNow key verification failed`);
  if (!contact.includes("abd.yusuf.ibrahim.mustafa@gmail.com") || !/132\D*4269\D*4270/.test(contact) || !/Yusuf/i.test(contact)) {
    throw new Error(`${site.host}: contact page does not contain the unified contact details`);
  }

  const homepage = await read(site.home);
  const title = homepage.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
  const headings = [...homepage.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const visibleHeading = headings[0]?.[1]?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() || "";
  const canonicalTag = homepage.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)?.[0] || "";
  const canonical = canonicalTag.match(/\bhref=["']([^"']+)["']/i)?.[1] || "";
  if (headings.length !== 1 || !title.toLowerCase().includes(site.titleTopic.toLowerCase()) || !visibleHeading.toLowerCase().includes(site.headingTopic.toLowerCase())) {
    throw new Error(`${site.host}: homepage must have one H1 and title covering "${site.titleTopic}" and H1 covering "${site.headingTopic}"`);
  }
  if (canonical !== site.home) throw new Error(`${site.host}: homepage canonical "${canonical}" does not match "${site.home}"`);
 
  for (const bot of ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]) {
    try {
      await read(`${base}/`, bot);
    } catch (error) {
      if (site.host !== "www.staychina.org" || !String(error).includes("HTTP 403")) throw error;
      console.warn(`${bot} requests to www.staychina.org are blocked from the GitHub runner; checking the deployed Worker origin instead.`);
      await read("https://pwebsite.nostalgia-ho.workers.dev/", bot);
    }
  }
  console.log(`${site.host}: robots, llms, sitemap, IndexNow key, contact details and 5 crawler requests passed`);
}

