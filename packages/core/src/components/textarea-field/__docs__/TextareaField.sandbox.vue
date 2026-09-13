<!-- prettier-ignore -->
<template>
  <PeachyTextareaField v-model="modelValue">
    <PeachyFieldLabel>
      Who is <span style="color: var(--purple-80)">Valerie Thomas</span>?
    </PeachyFieldLabel>

    <PeachyTextareaFieldInput />
  </PeachyTextareaField>
</template>

<script lang="ts" setup>
import { PeachyFieldLabel, PeachyTextareaField, PeachyTextareaFieldInput } from "@typeach/core";

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

textarea {
  min-inline-size: 14rem;
  inline-size: 100%;
  min-block-size: 4em;
  field-sizing: content;
  resize: none;

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
  cursor: pointer;
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
