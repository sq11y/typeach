<!-- prettier-ignore -->
<template>
  <PeachyTextareaField class="field">
    <PeachyFieldLabel>
      Who was <span style="color: var(--purple-80)">Aina Wifalk</span>?
    </PeachyFieldLabel>

    <PeachyTextareaInput v-model="modelValue" />

    <PeachyFieldError class="error-text">
      <WarningSvg aria-hidden="true" />

      No. That's Marie Van Brittain Brown. Aina Wifalk invented the first modern walker.
    </PeachyFieldError>
  </PeachyTextareaField>
</template>

<script lang="ts" setup>
import {
  PeachyFieldError,
  PeachyFieldLabel,
  PeachyTextareaField,
  PeachyTextareaInput,
} from "@typeach/core";

import WarningSvg from "./icons/warning.svg?component";

const modelValue = defineModel<string>({
  default: "The co-inventor of one of the earliest home security systems.",
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);

  --icon-size: 1.25em;

  --transition-duration: 0.15s;
}

/** ===== Container =====  */

.field {
  max-inline-size: 20rem;
}

/* ===== Container ===== */

textarea {
  min-block-size: 4em;
  field-sizing: content;
  resize: none;

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
    &:hover:not([aria-disabled="true"]) {
      border-color: var(--purple-60);
    }
  }

  &[aria-disabled="true"] {
    background-color: var(--grey-10);
    border-color: var(--grey-10);
  }
}

/* ===== Label ===== */

label {
  display: block;
  margin-block-end: var(--spacing-xs);
}

/* ===== Error ===== */

.error-text {
  display: flex;
  align-items: start;
  gap: var(--spacing-xxs);

  margin-block-start: var(--spacing-xs);

  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  color: var(--red-70);
}

/* ===== Global ===== */

svg {
  block-size: var(--icon-size);
}

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

svg {
  block-size: var(--icon-size);
  flex-shrink: 0;
}
</style>
