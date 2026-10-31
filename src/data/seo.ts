import { site } from "./site";
import type { Locale } from "../i18n/locale";
import { localizePath } from "../i18n/locale";

export type FaqItem = { q: string; a: string };

export const routes = [
  "/",
  "/start",
  "/license",
  "/query",
  "/architecture",
  "/storage",
  "/roadmap",
  "/iot",
  "/iot/start",
  "/iot/architecture",
  "/iot/license",
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
      license: absoluteUrl("/license"),
      programmingLanguage: "Rust",
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
      license: absoluteUrl("/iot/license"),
      programmingLanguage: "Rust",
      description:
        "NetbaIoT is a database-free, memory-first IoT protocol gateway for MQTT, TCP, and UDP.",
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
