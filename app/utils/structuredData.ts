import { site, services, generalFaq, formatPriceFrom } from "../../shared/utils/services.ts";
import type { Service, ServiceFaq } from "../../shared/utils/services.ts";
import { indexablePages } from "../../shared/utils/seo.ts";

const address = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.region,
  addressCountry: "RU",
};

const areaServed = [
  { "@type": "City", name: site.city },
  { "@type": "AdministrativeArea", name: site.region },
];

const businessId = (siteUrl: string) => `${siteUrl}/#business`;
const websiteId = (siteUrl: string) => `${siteUrl}/#website`;

const createBusinessSchema = (siteUrl: string) => ({
  "@type": "MovingCompany",
  "@id": businessId(siteUrl),
  name: site.name,
  url: `${siteUrl}/`,
  telephone: site.phone,
  image: `${siteUrl}/images/1.png`,
  logo: { "@type": "ImageObject", "@id": `${siteUrl}/#logo`, url: `${siteUrl}/logo.svg` },
  priceRange: formatPriceFrom(site.priceFrom),
  description: site.description,
  address,
  areaServed,
  openingHours: "Mo-Su 00:00-23:59",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "customer service",
    availableLanguage: "Russian",
    areaServed,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Наличные, безналичный расчет",
  sameAs: [site.profiUrl, site.avitoUrl],
});

const createWebsiteSchema = (siteUrl: string) => ({
  "@type": "WebSite",
  "@id": websiteId(siteUrl),
  name: site.name,
  url: `${siteUrl}/`,
  inLanguage: "ru-RU",
  publisher: { "@id": businessId(siteUrl) },
  hasPart: indexablePages().filter((page) => page.path !== "/").map((page) => ({
    "@type": "WebPage",
    "@id": `${siteUrl}${page.path}#webpage`,
    name: page.title,
    url: `${siteUrl}${page.path}`,
  })),
});

const createNavigationSchema = (siteUrl: string) => ({
  "@type": "ItemList",
  "@id": `${siteUrl}/#navigation`,
  name: "Разделы сайта",
  itemListElement: indexablePages().filter((page) => page.path !== "/").map((page, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SiteNavigationElement",
      "@id": `${siteUrl}${page.path}#navigation`,
      name: page.title,
      url: `${siteUrl}${page.path}`,
    },
  })),
});

const createBreadcrumbSchema = (url: string, items: { name: string; item: string }[]) => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: items.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: entry.name,
    item: entry.item,
  })),
});

const createFaqSchema = (url: string, faq: ServiceFaq[]) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: faq.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: { "@type": "Answer", text: entry.answer },
  })),
});

const createOfferSchema = (url: string, priceFrom?: number) => ({
  "@type": "Offer",
  url,
  availability: "https://schema.org/InStock",
  priceCurrency: "RUB",
  ...(priceFrom
    ? {
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: priceFrom,
          priceCurrency: "RUB",
          unitCode: "HUR",
          unitText: "час",
        },
      }
    : {}),
});

const createWebPageSchema = (
  siteUrl: string,
  url: string,
  seo: { title: string; description: string },
  about: string,
  withBreadcrumb = true,
) => ({
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name: seo.title,
  description: seo.description,
  inLanguage: "ru-RU",
  isPartOf: { "@id": websiteId(siteUrl) },
  about: { "@id": about },
  ...(withBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
});

const serviceUrl = (siteUrl: string, service: Service) => `${siteUrl}/uslugi/${service.slug}`;

const createServiceListSchema = (siteUrl: string, id: string) => ({
  "@type": "ItemList",
  "@id": id,
  name: `Услуги ${site.name}`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: serviceUrl(siteUrl, service),
  })),
});

export const createHomePageSchema = (siteUrl: string, seo: { title: string; description: string }) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      ...createBusinessSchema(siteUrl),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Услуги ${site.name}`,
        itemListElement: services.map((service) => ({
          ...createOfferSchema(serviceUrl(siteUrl, service), service.priceFrom),
          itemOffered: {
            "@type": "Service",
            name: `${service.title} в Перми`,
            url: serviceUrl(siteUrl, service),
            areaServed,
            provider: { "@id": businessId(siteUrl) },
          },
        })),
      },
    },
    createWebsiteSchema(siteUrl),
    createNavigationSchema(siteUrl),
    createWebPageSchema(siteUrl, `${siteUrl}/`, seo, businessId(siteUrl), false),
    createServiceListSchema(siteUrl, `${siteUrl}/#services`),
    createFaqSchema(`${siteUrl}/`, generalFaq),
  ],
});

export const createServicesPageSchema = (siteUrl: string, seo: { title: string; description: string }) => {
  const url = `${siteUrl}/uslugi`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createBusinessSchema(siteUrl),
      createWebsiteSchema(siteUrl),
      {
        ...createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
        "@type": "CollectionPage",
        mainEntity: { "@id": `${url}#services` },
      },
      createServiceListSchema(siteUrl, `${url}#services`),
      createBreadcrumbSchema(url, [
        { name: "Главная", item: `${siteUrl}/` },
        { name: "Услуги", item: url },
      ]),
    ],
  };
};

export const createPricePageSchema = (
  siteUrl: string,
  seo: { title: string; description: string },
  faq: ServiceFaq[],
) => {
  const url = `${siteUrl}/ceny`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createBusinessSchema(siteUrl),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Цены ${site.name}`,
          itemListElement: services.map((service) => ({
            ...createOfferSchema(serviceUrl(siteUrl, service), service.priceFrom),
            itemOffered: {
              "@type": "Service",
              name: `${service.title} в Перми`,
              url: serviceUrl(siteUrl, service),
            },
          })),
        },
      },
      createWebsiteSchema(siteUrl),
      createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
      createBreadcrumbSchema(url, [
        { name: "Главная", item: `${siteUrl}/` },
        { name: "Цены", item: url },
      ]),
      createFaqSchema(url, faq),
    ],
  };
};

export const createServicePageSchema = (siteUrl: string, service: Service) => {
  const url = serviceUrl(siteUrl, service);
  const serviceId = `${url}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createBusinessSchema(siteUrl),
        makesOffer: { "@type": "Offer", url, itemOffered: { "@id": serviceId } },
      },
      createWebsiteSchema(siteUrl),
      {
        "@type": "Service",
        "@id": serviceId,
        name: service.h1,
        serviceType: service.title,
        description: `${service.local.text} ${site.regionalTerms}`,
        url,
        image: siteUrl + service.image,
        provider: { "@id": businessId(siteUrl) },
        areaServed,
        offers: createOfferSchema(url, service.priceFrom),
      },
      createWebPageSchema(
        siteUrl,
        url,
        { title: service.metaTitle, description: service.metaDescription },
        serviceId,
      ),
      createBreadcrumbSchema(url, [
        { name: "Главная", item: `${siteUrl}/` },
        { name: "Услуги", item: `${siteUrl}/uslugi` },
        { name: service.title, item: url },
      ]),
      createFaqSchema(url, service.faq),
    ],
  };
};

export const createContactsPageSchema = (siteUrl: string, seo: { title: string; description: string }) => {
  const url = `${siteUrl}/contacts`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      createBusinessSchema(siteUrl),
      createWebsiteSchema(siteUrl),
      {
        ...createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
        "@type": "ContactPage",
        mainEntity: { "@id": businessId(siteUrl) },
      },
      createBreadcrumbSchema(url, [
        { name: "Главная", item: `${siteUrl}/` },
        { name: "Контакты", item: url },
      ]),
    ],
  };
};
