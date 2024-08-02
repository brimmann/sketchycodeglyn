import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  test: {
    browser: {
      enabled: true,
      name: "firefox",
      headless: true,
      provider: "playwright",
      // https://playwright.dev
      providerOptions: {},
    },
    reporters: ['verbose']
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "codeglynuikit",
      fileName: "codeglynuikit",
    },
    rollupOptions: {
      external: ["vue", "roughjs", "codeglynuikit"],
      output: {
        globals: {
          vue: "Vue",
          roughjs: "roughtjs",
          codeglynuikit: "codeglynuikit",
        },
      },
    },
    // cssCodeSplit: false
  },
});
