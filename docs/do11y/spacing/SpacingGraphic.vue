<template>
  <div :class="c('graphic')">
    <div :class="c('row')" v-for="row of rows">
      <div v-for="color of row" aria-hidden="true" :style="`--background: var(--${color}-30);`" />
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
  height: 20rem;

  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-m);

  @media (width < 32rem) {
    height: 18rem;
    gap: var(--spacing-s);
  }

  @media (width < 26rem) {
    height: 12rem;
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
