import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSiteUrl, canIndexSite, escapeXml, indexablePages, serializeJsonLd } from "../shared/utils/seo.ts";
import { services, site, generalFaq } from "../shared/utils/services.ts";
import {
  createHomePageSchema, createServicesPageSchema, createPricePageSchema,
  createServicePageSchema, createContactsPageSchema,
} from "../app/utils/structuredData.ts";

const origin = "https://hardworkers-seo-check.ru";
const seo = { title: "Page title", description: "Page description" };

test("canonical origin normalizes trailing slashes and rejects malformed configuration", () => {
  assert.equal(normalizeSiteUrl(` ${origin}/ `), origin);
  for (const value of ["", "not a URL", "ftp://host.ru", `${origin}/page`, `${origin}?q=1`, `${origin}#hash`, "https://user:pass@host.ru"]) {
    assert.throws(() => normalizeSiteUrl(value), value);
  }
});

test("indexing requires a public domain and an explicit enabled setting", () => {
  assert.ok(canIndexSite(origin, true));
  assert.ok(canIndexSite(origin, "true"));
  for (const flag of [false, "false", undefined, "0"]) assert.equal(canIndexSite(origin, flag), false);
  for (const url of ["http://localhost:3000", "http://127.0.0.1:3000", "http://[::1]:3000", "https://example.com", "https://staging.example.org", "https://preview.test"]) {
    assert.equal(canIndexSite(url, true), false, url);
  }
});

test("sitemap routes include all services and contacts without duplicates or query URLs", () => {
  const paths = indexablePages().map((page) => page.path);
  assert.equal(paths.length, services.length + 4);
  assert.equal(new Set(paths).size, paths.length);
  assert.ok(paths.includes("/contacts"));
  for (const service of services) assert.ok(paths.includes(`/uslugi/${service.slug}`));
  assert.ok(paths.every((path) => !/[?#]/.test(path) && (path === "/" || !path.endsWith("/"))));
  assert.equal(new Set(services.map((service) => service.metaTitle)).size, services.length);
  assert.equal(new Set(services.map((service) => service.metaDescription)).size, services.length);
});

test("JSON-LD and XML serialization cannot break out of their containers", () => {
  const input = { text: '</script><script>alert("test")</script>' };
  const output = serializeJsonLd(input);
  assert.ok(!output.includes("<"));
  assert.deepEqual(JSON.parse(output), input);
  assert.equal(escapeXml('&<>"\''), "&amp;&lt;&gt;&quot;&apos;");
});

test("every page uses the same business identity, contact details and regional coverage", () => {
  const schemas = [
    createHomePageSchema(origin, seo), createServicesPageSchema(origin, seo),
    createPricePageSchema(origin, seo, generalFaq), createContactsPageSchema(origin, seo),
    ...services.map((service) => createServicePageSchema(origin, service)),
  ];
  for (const schema of schemas) {
    const graph = JSON.parse(serializeJsonLd(schema))["@graph"];
    const business = graph.find((node: Record<string, unknown>) => node["@type"] === "MovingCompany");
    assert.equal(business["@id"], `${origin}/#business`);
    assert.equal(business.telephone, site.phone);
    assert.equal(business.address.streetAddress, site.street);
    assert.equal(business.address.addressLocality, "Пермь");
    assert.equal(business.address.addressRegion, "Пермский край");
    assert.equal(business.openingHoursSpecification.dayOfWeek.length, 7);
    assert.equal(business.areaServed[1].name, "Пермский край");
    assert.equal(business.description, site.description);
    assert.equal(business.review, undefined);
    assert.equal(business.aggregateRating, undefined);
    const website = graph.find((node: Record<string, unknown>) => node["@type"] === "WebSite");
    assert.equal(website.publisher["@id"], business["@id"]);
    assert.equal(new Set(graph.map((node: Record<string, unknown>) => node["@id"])).size, graph.length);
  }
});

test("service graphs match the visible service, breadcrumbs, FAQs and hourly minimum", () => {
  for (const service of services) {
    const graph = JSON.parse(serializeJsonLd(createServicePageSchema(origin, service)))["@graph"];
    const entity = graph.find((node: Record<string, unknown>) => node["@type"] === "Service");
    assert.equal(entity.url, `${origin}/uslugi/${service.slug}`);
    assert.equal(entity.name, service.h1);
    assert.equal(entity.offers.priceSpecification?.minPrice, service.priceFrom);
    assert.equal(entity.offers.price, undefined);
    const breadcrumb = graph.find((node: Record<string, unknown>) => node["@type"] === "BreadcrumbList");
    assert.equal(breadcrumb.itemListElement.at(-1).item, entity.url);
    const faq = graph.find((node: Record<string, unknown>) => node["@type"] === "FAQPage");
    assert.deepEqual(faq.mainEntity.map((question: { name: string }) => question.name), service.faq.map((entry) => entry.question));
  }
});
