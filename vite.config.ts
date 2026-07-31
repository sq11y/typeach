import { defineConfig } from "vite-plus";

import svg from "vite-svg-loader";

/* @ts-expect-error due to mismatching types for vite and vite-plus */
export default defineConfig((env) => ({
  base: env.command === "build" ? "/typeach/" : undefined,

  resolve: {
    dedupe: ["vue-router"],
  },

  plugins: [svg()],

  staged: {
    "*": "vp check --fix",
  },

  lint: {
    ignorePatterns: ["**/dist/**"],

    plugins: ["eslint", "typescript", "unicorn", "oxc", "vue"],

    options: {
      typeAware: true,
      typeCheck: true,
    },

    categories: {
      correctness: "error",
    },

    env: {
      browser: true,
      builtin: true,
    },

    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
}));
