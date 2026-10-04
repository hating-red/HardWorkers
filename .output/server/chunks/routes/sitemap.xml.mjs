globalThis.__timing__.logStart('Load chunks/routes//sitemap.xml');import { d as defineEventHandler, u as useRuntimeConfig, s as setHeader } from '../nitro/nitro.mjs';
import { s as services } from '../_/services.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const sitemap_xml = defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public;
  const lastmod = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const entries = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/uslugi", changefreq: "monthly", priority: "0.8" },
    { path: "/ceny", changefreq: "monthly", priority: "0.8" },
    ...services.map((service) => ({
      path: `/uslugi/${service.slug}`,
      changefreq: "monthly",
      priority: service.popular ? "0.9" : "0.7"
    }))
  ];
  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (entry) => [
        "  <url>",
        `    <loc>${siteUrl}${entry.path}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        "  </url>"
      ].join("\n")
    ),
    "</urlset>",
    ""
  ].join("\n");
});

export { sitemap_xml as default };;globalThis.__timing__.logEnd('Load chunks/routes//sitemap.xml');
//# sourceMappingURL=sitemap.xml.mjs.map
