import { defineConfig } from 'astro/config';
import { PORT, SITE } from './src/consts';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // integrations: [mdx(), sitemap()],
  server: {
    // this is the astro3 default port anyway
    port: PORT
  },
  integrations: [tailwind()]
});