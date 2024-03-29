/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {},
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["kute.js"],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    port: 8080,
  },
});
