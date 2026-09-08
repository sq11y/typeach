<template>
  <blockquote>
    <h1 :class="c('title')">
      “The power of the Web is in its universality. Access by everyone regardless of disability is
      an essential aspect.”
    </h1>

    <cite :class="c('cite')">
      - Tim Berners-Lee, W3C Director and inventor of the World Wide Web
    </cite>
  </blockquote>
</template>

<script setup lang="ts">
import { useBemClass } from "@typeach/core";

const c = useBemClass("home");
</script>

<style lang="scss">
html:has(.home__title) {
  background-color: var(--pink-bg);
}

main:has(.home__title) {
  place-content: center;
}

.home__title {
  margin-block-end: var(--spacing-xs);

  font-size: var(--font-size-xxxxl);
  line-height: var(--line-height-xxxxl);
  text-wrap: pretty;

  color: var(--pink-80);

  @media (width < 32rem) {
    font-size: var(--font-size-xxxl);
    line-height: var(--line-height-xxxl);
  }
}

.home__cite {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  color: var(--pink-80);
}
</style>
