import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const base = process.env.GITHUB_PAGES ? '/funeraria' : '/';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  },
  base
});