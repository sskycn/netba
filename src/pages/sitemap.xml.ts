import type { APIRoute } from "astro";
import { routes, absoluteUrl } from "../data/seo";
import { localizePath } from "../i18n/locale";

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((path) => {
      const en = absoluteUrl(localizePath(path, "en"));
      const zh = absoluteUrl(localizePath(path, "zh"));
      const priority = path === "/" ? "1.0" : path === "/iot" || path === "/start" ? "0.9" : "0.8";
      return `  <url>
    <loc>${en}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zh}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>
  <url>
    <loc>${zh}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zh}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
