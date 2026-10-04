const address = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: "Пермь",
  addressRegion: "Пермский край",
  addressCountry: "RU",
};

const areaServed = { "@type": "City", name: "Пермь" };

const businessId = (siteUrl: string) => `${siteUrl}/#business`;
const websiteId = (siteUrl: string) => `${siteUrl}/#website`;

const createBusinessSchema = (siteUrl: string, description: string) => ({
  "@type": "MovingCompany",
  "@id": businessId(siteUrl),
  name: site.name,
  url: `${siteUrl}/`,
  telephone: site.phone,
  image: `${siteUrl}/images/1.png`,
  priceRange: formatPriceFrom(site.priceFrom),
  description,
  address,
  areaServed,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Наличные, безналичный расчет",
  sameAs: [site.profiUrl, site.avitoUrl],
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    datePublished: review.date,
    reviewBody: review.text.replace(/\n/g, " "),
    reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5, worstRating: 1 },
    publisher: { "@type": "Organization", name: review.source },
    url: review.sourceUrl,
  })),
});

const createWebsiteSchema = (siteUrl: string) => ({
  "@type": "WebSite",
  "@id": websiteId(siteUrl),
  name: site.name,
  url: `${siteUrl}/`,
  inLanguage: "ru-RU",
  publisher: { "@id": businessId(siteUrl) },
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
      ...createBusinessSchema(siteUrl, seo.description),
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
      createBusinessSchema(siteUrl, seo.description),
      createWebsiteSchema(siteUrl),
      createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
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
        ...createBusinessSchema(siteUrl, seo.description),
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
        ...createBusinessSchema(siteUrl, service.metaDescription),
        makesOffer: { "@type": "Offer", url, itemOffered: { "@id": serviceId } },
      },
      createWebsiteSchema(siteUrl),
      {
        "@type": "Service",
        "@id": serviceId,
        name: service.h1,
        serviceType: service.title,
        description: service.local.text,
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
