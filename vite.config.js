import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: resolve(__dirname, '.'),
  base: './',
  plugins: [injectHTML()],
});
