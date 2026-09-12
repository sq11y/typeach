<template>
  <PeachyLink url="https://chuffed.org/project/115245-dahnoun-mutual-aid">
    Donate to Palestine.
  </PeachyLink>
</template>

<script setup lang="ts">
import { PeachyLink } from "@typeach/core";
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-radius: 8px;
}

/* ===== Link ===== */

a {
  color: var(--blue-80);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
