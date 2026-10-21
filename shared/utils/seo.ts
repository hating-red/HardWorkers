import { services } from "./services.ts";

export const normalizeSiteUrl = (value: string): string => {
  const url = new URL(value.trim());
  if (!/^https?:$/.test(url.protocol) || url.username || url.password ||
      url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NUXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query or hash");
  }
  return url.origin;
};

export const isPublicSiteUrl = (value: string): boolean => {
  const { hostname } = new URL(normalizeSiteUrl(value));
  return !/^(localhost|127\..*|0\.0\.0\.0|\[::1\]|example\.(com|org|net))$/.test(hostname) &&
    !/\.(localhost|local|test|invalid|example)$/.test(hostname) &&
    !/\.example\.(com|org|net)$/.test(hostname);
};

export const canIndexSite = (url: string, enabled: unknown): boolean =>
  isPublicSiteUrl(url) && (enabled === true || enabled === "true");

export const indexablePages = () => [
  { path: "/", title: "Главная", changefreq: "weekly", priority: "1.0" },
  { path: "/uslugi", title: "Услуги", changefreq: "monthly", priority: "0.8" },
  { path: "/ceny", title: "Цены", changefreq: "monthly", priority: "0.8" },
  { path: "/contacts", title: "Контакты", changefreq: "monthly", priority: "0.8" },
  ...services.map((service) => ({
    path: `/uslugi/${service.slug}`,
    title: service.title,
    changefreq: "monthly",
    priority: service.popular ? "0.9" : "0.7",
  })),
];

export const escapeXml = (value: string): string => value.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
})[character]!);

export const serializeJsonLd = (value: unknown): string =>
  JSON.stringify(value).replace(/</g, "\\u003c");
