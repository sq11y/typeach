import { START_LOCATION } from "vue-router";

import type { Options } from "do11y";
import { createPinia } from "pinia";

import { theme } from "./shiki.ts";
import { nextTick } from "vue";

export default {
  async setup(app, router) {
    const pinia = createPinia();
    app.use(pinia);

    const Do11yCodeBlock = (await import("./components/Do11yCodeBlock.vue")).default;
    app.component("Do11yCodeBlock", Do11yCodeBlock);

    const Do11yMeta = (await import("./components/meta/Do11yMeta.vue")).default;
    app.component("Do11yMeta", Do11yMeta);

    router.beforeEach((to) => {
      if (to.meta.title) {
        document.title = `${to.meta.title as string} | Typeach`;
      } else {
        document.title = "Typeach";
      }

      if (to.meta.description) {
        const meta = document.createElement("meta");

        meta.name = "description";
        meta.content = to.meta.description as string;

        document.head.appendChild(meta);
      }
    });

    router.afterEach(async (to, from) => {
      if (from !== START_LOCATION) {
        await nextTick();

        const heading = document.querySelector("h1");

        if (heading) {
          heading.tabIndex = 0;
          heading.focus();
        }
      }
    });
  },

  highlighter: {
    themes: [theme],
  },
} satisfies Options;
