<!-- prettier-ignore -->
<template>
  <PeachyTextField>
    <PeachyFieldLabel>
      Who was <span style="color: var(--purple-80)">Aina Wifalk</span>?
    </PeachyFieldLabel>

    <PeachyTextInput v-model="modelValue" />
  </PeachyTextField>
</template>

<script lang="ts" setup>
import { PeachyFieldLabel, PeachyTextField, PeachyTextInput } from "@typeach/core";

const modelValue = defineModel<string>();
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);

  --transition-duration: 0.15s;
}

/* ===== Container ===== */

input[type="text"],
input[type="search"] {
  min-inline-size: 14rem;

  background-color: var(--bg);
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  @media (hover: hover) {
    &:hover:not(:read-only) {
      border-color: var(--purple-60);
    }
  }

  &:read-only {
    background-color: var(--grey-10);
    border-color: var(--grey-10);
  }
}

/* ===== Label ===== */

label {
  display: block;
  margin-block-end: var(--spacing-xs);
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
