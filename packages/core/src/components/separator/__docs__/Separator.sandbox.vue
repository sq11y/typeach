<template>
  <PeachySeparator />
</template>

<script setup lang="ts">
import { PeachySeparator } from "@typeach/core";
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-shape: 1px solid;
}

/* ===== Separator ===== */

hr[aria-orientation="horizontal"] {
  inline-size: 15rem;

  border: 0;
  border-block-start: var(--border-shape) var(--brown-60);
}

hr[aria-orientation="vertical"] {
  block-size: 15rem;

  border: 0;
  border-inline-start: var(--border-shape) var(--brown-60);
}
</style>
