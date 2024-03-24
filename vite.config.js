import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: resolve(__dirname, "."),
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
    },
  },

  plugins: [injectHTML()],
});
