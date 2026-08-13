// @ts-check
import { defineConfig } from 'astro/config';

// Pure static HTML. No adapter, no server endpoints.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  prefetch: false,
});
