import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://harmonizacao-facial.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !/\/admin(\/|$)/.test(page) }),
  ],
});
