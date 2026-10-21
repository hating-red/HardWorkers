interface PageSeo {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  schema: (siteUrl: string) => unknown;
}

export const usePageSeo = (page: PageSeo) => {
  const config = useRuntimeConfig().public;
  const baseUrl = normalizeSiteUrl(config.siteUrl);
  const canonical = baseUrl + page.path;
  const imagePath = page.image || "/images/1.png";
  const imageUrl = baseUrl + imagePath;
  const imageAlt = page.imageAlt || `${site.name}: переезды и грузчики в Перми`;
  const dimensions = imageSize(imagePath);

  useSeoMeta({
    title: page.title,
    description: page.description,
    robots: !import.meta.dev && canIndexSite(baseUrl, config.siteIndexable)
      ? "index, follow, max-image-preview:large"
      : "noindex, nofollow",
    ogTitle: page.title,
    ogDescription: page.description,
    ogUrl: canonical,
    ogImage: imageUrl,
    ogImageAlt: imageAlt,
    ogImageWidth: dimensions.width,
    ogImageHeight: dimensions.height,
    ogImageType: "image/png",
    twitterCard: "summary_large_image",
    twitterTitle: page.title,
    twitterDescription: page.description,
    twitterImage: imageUrl,
    twitterImageAlt: imageAlt,
  });

  useHead({
    link: [{ key: "canonical", rel: "canonical", href: canonical }],
    script: [{
      key: "page-schema",
      type: "application/ld+json",
      innerHTML: serializeJsonLd(page.schema(baseUrl)),
    }],
  });
};
