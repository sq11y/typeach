<!-- prettier-ignore -->
<template>
  <PeachyCopyButton
    v-slot="{ isCopying }"
    :content="excerptFromIfIMustDieByRefaatAlareer"
  >
    {{ isCopying ? "Copied poem excerpt" : "Copy poem excerpt" }}
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";

const excerptFromIfIMustDieByRefaatAlareer = "If I must die, let it bring hope, let it be a tale";
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-shape: 1px solid;
  --transition-duration: 0.15s;
}

/* ===== Button ===== */

button {
  padding-block: var(--relative-spacing-s);
  padding-inline: var(--relative-spacing-xxl);

  border: var(--border-shape) var(--pink-40);
  border-radius: var(--pill-border-radius);

  background-color: var(--pink-30);
  color: var(--pink-80);

  font-size: var(--font-size-l);
  line-height: var(--line-height-l);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--pink-70);
    }
  }

  &:active {
    background-color: var(--pink-50);
    border-color: var(--pink-70);
  }
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
