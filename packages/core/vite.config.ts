import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite-plus";

import vue from "@vitejs/plugin-vue";
import docs from "v-custom-block";
import dts from "unplugin-dts/vite";

import { dependencies, peerDependencies } from "./package.json";
import { compilerOptions } from "./tsconfig.app.json";

const externals = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];

const alias: Record<string, string> = {};

Object.entries(compilerOptions.paths).forEach(([pckg, [path]]) => {
  const url = new URL(path.replace(/\/\*/, ""), import.meta.url);
  alias[pckg.replace(/\/\*/, "")] = fileURLToPath(url);
});

export default defineConfig({
  plugins: [
    vue(),
    docs("docs"),
    dts({ processor: "vue", tsconfigPath: "./tsconfig.app.json", entryRoot: "src" }),
  ],

  resolve: {
    alias,
  },

  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
      name: "Typeach",
      fileName: "typeach",
      formats: ["es"],
    },

    rollupOptions: {
      external: (id) => externals.some((dep) => id === dep || id.startsWith(`${dep}/`)),
    },
  },
});
