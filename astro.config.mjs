import { defineConfig } from 'astro/config';
import { PORT } from './src/consts';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://trend10.com',
  // integrations: [mdx(), sitemap()],
  server: {
    // this is the astro3 default port anyway
    port: PORT
  },
  integrations: [tailwind()]
});