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
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import "../style/index.scss";
</script>
