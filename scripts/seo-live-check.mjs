const sites = [
  { host: "xiaodu.tech", contact: "https://xiaodu.tech/zh-cn/contact/", sitemap: "https://xiaodu.tech/sitemap.xml" },
  { host: "www.staychina.org", contact: "https://www.staychina.org/en/contact", sitemap: "https://www.staychina.org/sitemap-index.xml" },
  { host: "pomerol.trade", contact: "https://pomerol.trade/contact/", sitemap: "https://pomerol.trade/sitemap.xml" },
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
  const sitemap = await read(site.sitemap);
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

  for (const bot of ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]) {
    await read(`${base}/`, bot);
  }
  console.log(`${site.host}: robots, llms, sitemap, IndexNow key, contact details and 5 crawler requests passed`);
}

