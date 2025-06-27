// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [svgr()],
  },

  integrations: [react()]
});