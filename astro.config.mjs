import { defineConfig } from 'astro/config';
import { excludeArtworkMasters } from './scripts/exclude-artwork-masters.mjs';

export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  integrations: [{ name: 'exclude-artwork-masters', hooks: { 'astro:build:done': ({ dir }) => excludeArtworkMasters(dir) } }],
});
