import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind(),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'km', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: true,
      strategy: 'prefix'
    }
  }
});