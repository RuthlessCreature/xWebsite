const host = "xiaodu.tech";
const base = `https://${host}`;
const key = "6ef27e4a81efe1ff6c679ee852d012f2";
const keyUrl = `${base}/${key}.txt`;

const keyResponse = await fetch(keyUrl, { cache: "no-store" });
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) {
  throw new Error(`IndexNow verification file is not available at ${keyUrl}`);
}

const sitemapResponse = await fetch(`${base}/sitemap.xml`, { cache: "no-store" });
if (!sitemapResponse.ok) throw new Error(`Sitemap request failed: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim()))]
  .filter((url) => url.startsWith(`${base}/`));
if (!urls.length) throw new Error("No canonical URLs found in sitemap");

const submission = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: keyUrl, urlList: urls })
});
if (!submission.ok) {
  throw new Error(`IndexNow submission failed: HTTP ${submission.status} ${await submission.text()}`);
}
console.log(`IndexNow accepted ${urls.length} URLs for ${host} (HTTP ${submission.status})`);

