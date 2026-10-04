globalThis.__timing__.logStart('Load chunks/routes//robots.txt');import { d as defineEventHandler, u as useRuntimeConfig, s as setHeader } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const robots_txt = defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public;
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  return ["User-agent: *", "Allow: /", "", `Sitemap: ${siteUrl}/sitemap.xml`, ""].join("\n");
});

export { robots_txt as default };;globalThis.__timing__.logEnd('Load chunks/routes//robots.txt');
//# sourceMappingURL=robots.txt.mjs.map
