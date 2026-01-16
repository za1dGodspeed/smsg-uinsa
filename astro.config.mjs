import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://smsg-uinsa.vercel.app',

  vite: {
      plugins: [tailwindcss()]
  },

  adapter: netlify(),
  integrations: [react()]
});