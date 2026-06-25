<template>
  <div :class="c('graphic')" v-for="row of rows">
    <div v-for="color of row" aria-hidden="true" :style="`--background: var(--${color}-30);`" />
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
  display: grid;
  grid-template-columns: 2fr 3fr 4fr;
  grid-template-rows: calc(9.75rem + (var(--spacing-m) - var(--spacing-s)));
  gap: var(--spacing-m);

  > * {
    border-radius: var(--border-radius);
    border: var(--invisible-border);

    background-color: var(--background);
  }
}

.spacing__graphic + .spacing__graphic {
  margin-block-start: var(--spacing-m);
  grid-template-columns: 4fr 3fr 2fr;
}
</style>
