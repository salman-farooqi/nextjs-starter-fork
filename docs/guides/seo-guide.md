# SEO

The starter provides Next.js metadata helpers, structured-data generators,
robots, sitemap, and `llms.txt`. These files contain placeholder product facts.
Replace them before a public launch.

## Site URL and defaults

`NEXT_PUBLIC_SITE_URL` supplies canonical and sitemap URLs.
`DEFAULT_SEO` in `src/lib/constants.ts` owns the site name, title suffix,
locale, and social handle.

`buildSeoMetadata()` in `src/lib/seo/metadata.ts` creates titles, descriptions,
canonical URLs, Open Graph fields, Twitter cards, and robots directives.

Use page metadata that describes the rendered page. Canonicals should resolve
to the public URL and use one trailing-slash policy.

## Structured data

`JsonLd` serializes a schema and escapes `<` before placing it in a script tag.
The repository includes generators for organization, website, breadcrumb, FAQ,
blog, collection, item list, and vacation rental schemas.

Render only a schema that matches visible page content. The starter does not
have a real organization logo, site search, blog, or vacation rental inventory.
Remove or replace those claims instead of publishing placeholder JSON-LD.

Use the `Breadcrumbs` compound when a page has a visible breadcrumb trail. It
keeps the navigation and BreadcrumbList data aligned.

## Robots and sitemap

`src/app/robots.ts` blocks all crawlers outside production. Its production rules
block selected training crawlers and private routes. Crawler names and product
policy change, so review the list with the project owner.

`src/app/sitemap.ts` currently contains only the home page. Add public canonical
pages when they exist. `lastModified` should come from content data for dynamic
pages, not the time of every request.

## `llms.txt`

`src/app/llms.txt/route.ts` is a plain-text summary for tools that choose to read
it. It is not a substitute for accessible HTML, metadata, robots, or sitemap.
The current file contains starter copy. Update it with real pages and remove
claims the app cannot prove. Delete the route if the project does not maintain
it.

## Social images

Set a real Open Graph image and alt text for public pages. If the project adds a
generated image route, test its fonts, dimensions, cache behavior, and failure
path. The architecture document must not claim an image route exists until the
file exists.

## Review checklist

- Titles and descriptions match visible content.
- Canonical URLs point to the public deployment.
- Preview deployments remain non-indexable.
- JSON-LD contains real names, URLs, images, prices, and dates.
- Sitemap contains canonical public pages only.
- Robots rules match product policy.
- Social previews render with the deployed image.
- Rich Results Test and schema validation report no relevant errors.

SEO does not require every page to emit every schema. Accurate, small metadata
is better than a large graph of invented facts.
