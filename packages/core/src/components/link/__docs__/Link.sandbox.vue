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
  --transition-duration: 0.15s;
}

/* ===== Link & Icon ===== */

a {
  color: var(--blue-90);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);

  @media (prefers-reduced-motion: no-preference) {
    transition: outline var(--transition-duration) ease-in-out;
  }
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
