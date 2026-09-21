import { site } from "./site";
import type { Locale } from "../i18n/locale";
import { localizePath } from "../i18n/locale";

export type FaqItem = { q: string; a: string };

export const routes = [
  "/",
  "/start",
  "/query",
  "/architecture",
  "/storage",
  "/roadmap",
  "/iot",
  "/iot/start",
  "/iot/architecture",
] as const;

export const ogImage = {
  path: "/og.png",
  width: 1200,
  height: 630,
  alt: "Netba — NetbaDB and NetbaIoT",
} as const;

export function absoluteUrl(path: string): string {
  const rest = path === "/" ? "/" : path.replace(/\/$/, "");
  return new URL(rest, site.url).href;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/favicon.svg"),
    sameAs: [site.db.github, site.iot.github],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ["en", "zh-CN"],
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function softwareJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: site.db.name,
      url: absoluteUrl("/start"),
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Relational database",
      operatingSystem: "Linux, macOS",
      softwareVersion: site.db.version,
      license: "https://www.gnu.org/licenses/agpl-3.0.html",
      programmingLanguage: "Rust",
      codeRepository: site.db.github,
      isAccessibleForFree: true,
      description:
        "NetbaDB is a strongly typed relational database core written in Rust. Native Protocol v2 is the only database network frontend.",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: site.iot.name,
      url: absoluteUrl("/iot"),
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "IoT gateway",
      operatingSystem: "Linux, macOS",
      softwareVersion: site.iot.version,
      license: "https://www.gnu.org/licenses/agpl-3.0.html",
      programmingLanguage: "Rust",
      codeRepository: site.iot.github,
      isAccessibleForFree: true,
      description:
        "NetbaIoT is a database-free, memory-first IoT protocol gateway for HTTP, MQTT 3.1.1, TCP, and UDP.",
    },
  ];
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizePath(item.path, locale)),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
