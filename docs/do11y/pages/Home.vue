<template>
  <PeachyVisuallyHidden>
    <h1>Typeach - component library for Vue.</h1>
  </PeachyVisuallyHidden>

  <blockquote>
    <h1 :class="c('title')">
      “The power of the Web is in its universality. Access by everyone regardless of disability is
      an essential aspect”
    </h1>
    <footer>
      -
      <!-- prettier-ignore -->
      <cite>
        Tim Berners-Lee,
        <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">W3C</a> Director and inventor of the World Wide Web
      </cite>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
import { PeachyVisuallyHidden, useBemClass } from "@typeach/core";

const c = useBemClass("home");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

main:has(.home__title) {
  align-self: stretch;
  @include utils.center;
}

.home__title {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xxxxl);
  line-height: var(--line-height-xxxxl);
  text-align: center;
  text-wrap: pretty;

  @media (width < 32rem) {
    font-size: var(--font-size-xxxl);
    line-height: var(--line-height-xxxl);
  }
}

blockquote footer {
  text-align: center;
}
</style>
