export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export const localeLabel: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const storageKey = "netba-lang";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPath(pathname: string): Locale {
  const path = pathname.replace(/\/$/, "") || "/";
  return path === "/zh" || path.startsWith("/zh/") ? "zh" : "en";
}

export function stripLocale(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/zh") return "/";
  if (path.startsWith("/zh/")) return path.slice(3);
  return path;
}

export function localizePath(pathname: string, locale: Locale): string {
  const rest = stripLocale(pathname);
  if (locale === defaultLocale) return rest;
  return rest === "/" ? `/${locale}` : `/${locale}${rest}`;
}
