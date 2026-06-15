import { defineConfig } from "vite-plus";

import svg from "vite-svg-loader";

/* @ts-expect-error due to mismatching types for vite and vite-plus */
export default defineConfig((env) => ({
  base: env.mode === "production" ? "/typeach/" : undefined,

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

    rules: {
      "no-dupe-keys": "off",
      "no-func-assign": "off",
      "no-unreachable": "off",
      "no-var": "error",

      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-destructuring": "error",

      "typescript/ban-ts-comment": "error",
      "typescript/no-empty-object-type": "error",
      "typescript/no-explicit-any": "error",
      "typescript/no-namespace": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-function-type": "error",

      "vite-plus/prefer-vite-plus-imports": "error",
    },

    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
}));
