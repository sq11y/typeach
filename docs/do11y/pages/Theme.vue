<template>
  <h1>Theme</h1>

  <div class="description"><code>pnpm i @typeach/theme</code></div>

  <RouterLink to="/p/colors">
    <h2>Colors <ArrowRight aria-hidden="true" /></h2>
    <ColorsGraphic />
  </RouterLink>

  <RouterLink to="/p/typography">
    <h2>Typography <ArrowRight aria-hidden="true" /></h2>
    <TypographyGraphic />
  </RouterLink>

  <RouterLink to="/p/spacing">
    <h2>Spacing <ArrowRight aria-hidden="true" /></h2>
    <SpacingGraphic />
  </RouterLink>
</template>

<script lang="ts" setup>
import ColorsGraphic from "../colors/ColorsGraphic.vue";
import TypographyGraphic from "../typography/HomoglyphGrid.vue";
import SpacingGraphic from "../spacing/SpacingGraphic.vue";

import ArrowRight from "../icons/arrow-right.svg?component";
</script>

<style lang="scss" scoped>
@use "@typeach/theme/utils";

h2 {
  @include utils.space-between;
  --icon-size: 0.875em;
}

a {
  display: block;
  color: inherit;
  text-decoration: none;
}

a:not(:first-of-type) {
  margin-block-start: calc(var(--prose-flow-scale) * 3em);
}
</style>
