<!-- prettier-ignore -->
<template>
  <PeachyButton @click="onClick">
    Log quote
  </PeachyButton>
</template>

<script lang="ts" setup>
import { PeachyButton } from "@typeach/core";

const onClick = () => {
  /* prettier-ignore */
  const quoteByJeanBaptisteAndréGodin = "Créez toujours, au profit du peuple, les instruments de son bien-être, et vous aurez créé les instruments de sa puissance et de son émancipation.";

  console.log(quoteByJeanBaptisteAndréGodin);
};
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
    &:hover:not([aria-disabled="true"]) {
      border-color: var(--pink-70);
    }
  }

  &:active:not([aria-disabled="true"]) {
    background-color: var(--pink-50);
    border-color: var(--pink-70);
  }
}

/* ===== Disabled ===== */

button[aria-disabled="true"] {
  background-color: var(--grey-30);
  border-color: var(--grey-30);
  color: var(--grey-70);

  @media (forced-colors: active) {
    color: GrayText;
    border-color: GrayText;
  }
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
