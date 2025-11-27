// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), partytown(), sitemap(), db()],

  vite: {
    plugins: [tailwindcss()]
  }
});