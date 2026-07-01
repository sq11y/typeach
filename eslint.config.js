import eslint from "eslint-config-sq11y";

export default [
  ...eslint,

  {
    name: "typeach",
    files: ["**/*.{vue,ts}"],

    rules: {
      "vue/require-toggle-inside-transition": ["error", { additionalDirectives: ["hidden"] }],
    },
  },
];
