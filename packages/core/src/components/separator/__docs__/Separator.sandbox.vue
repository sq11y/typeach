<template>
  <PeachySeparator />
</template>

<script setup lang="ts">
import { PeachySeparator } from "@typeach/core";
</script>

<style lang="scss">
@use "@typeach/theme";

:root {
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
}

hr {
  inline-size: 15rem;

  border: 0;
  border-block-start: var(--border);
}
</style>
