# SEO deployment

The public brand is ТрудягиН. Business facts are maintained in
`shared/utils/services.ts`: phone, address, hours, service area and service content.
The website serves Perm and Perm Krai. Regional routes and prices are agreed in advance.

## Domain and build settings

The production default is `https://trydiagin-perm.ru`, confirmed by the site owner.
To override it, set `NUXT_PUBLIC_SITE_URL` before building to an HTTP(S) origin
without a path, query string or fragment. The build rejects localhost and example domains unless
`NUXT_PUBLIC_SITE_INDEXABLE=false` is explicitly set for a private preview.

Pages, robots.txt and sitemap.xml are prerendered. Set the following before
`npm run build` or `npm run generate`, and rebuild when changing them:

- `NUXT_PUBLIC_SITE_URL`: public domain.
- `NUXT_PUBLIC_SITE_INDEXABLE=true`: production; use `false` for private previews.
- `NUXT_PUBLIC_YANDEX_VERIFICATION`: optional Yandex Webmaster verification token.
- `NUXT_PUBLIC_GOOGLE_VERIFICATION`: optional Search Console verification token.
- `NUXT_PUBLIC_METRIKA_ID`: optional existing Yandex Metrika counter ID.

## Docker Compose deployment

Use Docker Compose v2 (`docker compose version`). From the project directory,
build and start the site, or deploy subsequent code changes, with:

```sh
docker compose up -d --build
```

`docker-compose.yml` preserves the image and container name `hardworkers`,
the binding `127.0.0.1:2000:3000`, and the restart policy `unless-stopped`.
Compose recreates its container when the image or configuration changes.
Use `up` for this web service; `run` is for one-off commands and does not
publish the configured ports by default.

### First switch from docker run

If the existing `hardworkers` container was started with `docker run`, Compose
cannot adopt it. Build the image first while the old container still serves
the site:

```sh
docker compose build
```

Only after that build succeeds, remove the old container and start the
Compose-managed replacement (there will be a short interruption):

```sh
docker rm -f hardworkers
docker compose up -d --no-build
```

This removal is needed only for the initial migration. Future deployments
use `docker compose up -d --build`.

### Optional settings and logs

The production defaults work without a `.env` file. To configure optional
Google verification or Metrika values, use a `.env` file in the project root;
`.env.example` lists the supported settings. The Yandex token is already
embedded in the homepage. Compose reads `.env` for interpolation and passes
the settings as build arguments, so rebuild after changing them.

```sh
docker compose config --quiet
docker compose logs -f hardworkers
docker compose ps
```

For manual Docker builds without Compose, the equivalent optional overrides are:

```sh
docker build --build-arg NUXT_PUBLIC_SITE_URL="${NUXT_PUBLIC_SITE_URL:-https://trydiagin-perm.ru}" \
  --build-arg NUXT_PUBLIC_YANDEX_VERIFICATION="$NUXT_PUBLIC_YANDEX_VERIFICATION" \
  --build-arg NUXT_PUBLIC_GOOGLE_VERIFICATION="$NUXT_PUBLIC_GOOGLE_VERIFICATION" \
  --build-arg NUXT_PUBLIC_METRIKA_ID="$NUXT_PUBLIC_METRIKA_ID" \
  -t hardworkers .
```

Changing runtime environment variables alone does not regenerate the static HTML.
For a private local build: `NUXT_PUBLIC_SITE_INDEXABLE=false npm run build`.
Development always emits noindex and disallows crawling.

## Public URLs

`shared/utils/seo.ts` supplies the sitemap and explicit prerender route list:

- `/`
- `/uslugi`
- `/ceny`
- `/contacts`
- `/uslugi/transportnye-uslugi`
- `/uslugi/gruzchiki`
- `/uslugi/kvartirnyy-pereezd`
- `/uslugi/ofisnyy-pereezd`
- `/uslugi/upakovka`
- `/uslugi/vyvoz-musora`
- `/uslugi/ekspedirovanie`
- `/uslugi/evakuator`

Canonical URLs omit query parameters and trailing slashes (except the root).
The Node server redirects trailing-slash versions of these pages with HTTP 301.
When deploying generated static output, configure the host to use the same URL
convention, enable real 404 responses and redirect HTTP/alternate hosts to the
chosen HTTPS domain. Do not rewrite unknown routes to the homepage with HTTP 200.

The sitemap omits lastmod because the project does not track reliable per-page
modification dates. API responses have X-Robots-Tag: noindex, nofollow. Do not block
JS, CSS or image assets in robots.txt. Private previews block crawling and emit
noindex; neither mechanism is a substitute for access control.

## Verification and launch

Run `npm run test:seo` with Node 22.6 or newer, then build with the real domain.
Check `/robots.txt`, `/sitemap.xml`, all 12 pages, a missing service (HTTP 404),
and a known URL with a trailing slash (HTTP 301 on the Node server).
Each page should contain one canonical, title, description and JSON-LD graph
in the initial HTML. Check service-to-service navigation in the browser too.

The graph links MovingCompany (a LocalBusiness/Organization subtype), WebSite,
WebPage, Service, BreadcrumbList and the visible FAQ where applicable. Contacts
use ContactPage; the service index uses CollectionPage. Phone, address, hours
and areaServed match the visible business information. No coordinates, legal
name, email, registration details or map profile IDs have been invented.
Customer reviews remain visible, but are not marked up as self-reviews for stars.

After deployment, submit the sitemap in Yandex Webmaster and Google Search Console
and request recrawling for the homepage, contacts, prices and service pages.
Confirm/create the business profiles using the same brand, phone, address and
hours. Add their verified public URLs to sameAs when available.

Sitelinks and rich results are selected by the search engine, not guaranteed by
JSON-LD. Reference documentation:

- [Google sitelinks](https://developers.google.com/search/docs/appearance/sitelinks)
- [Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
