<template>
  <div :class="c('graphic')">
    <div v-for="(row, i) of rows" :key="i" :class="c('row')">
      <div
        v-for="color of row"
        :key="color"
        :style="`--background: var(--${color}-30);`"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

const rows = [
  ["red", "yellow", "blue"],
  ["green", "brown", "purple"],
];

const c = useBemClass("spacing");
</script>

<style>
.spacing__graphic {
  block-size: 20rem;

  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-m);

  @media (width < 32rem) {
    block-size: 18rem;
    gap: var(--spacing-s);
  }

  @media (width < 26rem) {
    block-size: 12rem;
  }
}

.spacing__row {
  display: grid;
  grid-template-columns: 2fr 3fr 4fr;
  gap: var(--spacing-m);

  @media (width < 32rem) {
    gap: var(--spacing-s);
  }

  &:first-child {
    grid-template-columns: 2fr 3fr 4fr;
  }

  &:last-child {
    grid-template-columns: 4fr 3fr 2fr;
  }

  > * {
    border-radius: var(--border-radius);
    border: var(--invisible-border);
    background-color: var(--background);
  }
}
</style>
