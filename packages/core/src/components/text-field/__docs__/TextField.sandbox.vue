<!-- prettier-ignore -->
<template>
  <PeachyTextField v-model="modelValue">
    <PeachyFieldLabel>
      Who was <span style="color: var(--purple-80)">Aina Wifalk</span>?
    </PeachyFieldLabel>

    <PeachyTextFieldInput />
  </PeachyTextField>
</template>

<script lang="ts" setup>
import { PeachyFieldLabel, PeachyTextField, PeachyTextFieldInput } from "@typeach/core";

const modelValue = defineModel<string>();
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
}

/* ===== Container ===== */

input[type="text"],
input[type="search"] {
  background-color: var(--bg);
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);

  @include utils.transition(border-color);

  @include utils.enabled {
    @include utils.hover {
      border-color: var(--purple-60);
    }
  }

  @include utils.disabled {
    background-color: var(--grey-10);
    border-color: var(--grey-10);
  }
}

/* ===== Label ===== */

label {
  display: block;
  margin-block-end: var(--spacing-xs);
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--purple-80);
  box-shadow: 0 0 0 6px var(--purple-30);
  isolation: isolate;
}
</style>
