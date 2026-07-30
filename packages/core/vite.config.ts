import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite-plus";

import vue from "@vitejs/plugin-vue";

import { compilerOptions } from "./tsconfig.app.json";

const alias: Record<string, string> = {};

Object.entries(compilerOptions.paths).forEach(([pckg, [path]]) => {
  const url = new URL(path.replace(/\/\*/, ""), import.meta.url);
  alias[pckg.replace(/\/\*/, "")] = fileURLToPath(url);
});

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias,
  },

  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
      name: "Typeach",
      fileName: "typeach",
    },

    rollupOptions: {
      external: ["vue", "pinia"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
