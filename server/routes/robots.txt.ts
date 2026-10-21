export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event).public;
  const siteUrl = normalizeSiteUrl(config.siteUrl);

  setHeader(event, "content-type", "text/plain; charset=utf-8");

  if (import.meta.dev || !canIndexSite(siteUrl, config.siteIndexable)) {
    return "User-agent: *\nDisallow: /\n";
  }

  return ["User-agent: *", "Allow: /", "", `Sitemap: ${siteUrl}/sitemap.xml`, ""].join("\n");
});
