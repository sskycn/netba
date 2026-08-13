// @ts-check
import { defineConfig } from 'astro/config';

// Pure static HTML. No adapter, no server endpoints.
export default defineConfig({
  site: 'https://netba.net',
  output: 'static',
  trailingSlash: 'never',
  prefetch: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
