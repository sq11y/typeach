<template>
  <Header />

  <main>
    <article class="prose">
      <RouterView />
    </article>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { useDocumentOutline } from "@typeach/core";
import { kebabCase } from "change-case";

import Header from "./Header.vue";
import Footer from "./Footer.vue";

import "../style/index.scss";

useDocumentOutline(undefined, (heading) => {
  if (!heading.id) {
    heading.id = kebabCase(heading.textContent);
  }
});
</script>
