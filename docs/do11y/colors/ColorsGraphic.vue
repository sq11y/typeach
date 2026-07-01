<template>
  <div :class="c('graphic')">
    <div
      v-for="color of colors"
      :key="color"
      :style="`--background: var(--${color}-30);`"
      aria-hidden="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

const colors = ["brown", "red", "orange", "yellow", "green", "turquoise", "blue", "purple", "pink"];

const c = useBemClass("colors");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.colors__graphic {
  block-size: 20rem;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: var(--spacing-xs);

  @media (width < 32rem) {
    block-size: 18rem;
    gap: var(--spacing-xxs);
  }

  @media (width < 26rem) {
    block-size: 12rem;
  }

  > * {
    border-radius: var(--border-radius);
    border: 1px solid var(--bg);

    background: var(--background);
  }
}
</style>
