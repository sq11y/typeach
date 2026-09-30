<template>
  <Header />

  <main>
    <aside v-if="isLargeScreen && hasTableOfContent">
      <div>
        <TableOfContent />
      </div>
    </aside>

    <article class="prose">
      <RouterView />
    </article>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMediaQuery } from "@vueuse/core";

import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TableOfContent from "./TableOfContent.vue";

import "../style/index.scss";

const route = useRoute();

const isLargeScreen = useMediaQuery("(width >= 76rem)");

const hasTableOfContent = computed(() => {
  return route.path.startsWith("/c") || route.path.startsWith("/f");
});
</script>
