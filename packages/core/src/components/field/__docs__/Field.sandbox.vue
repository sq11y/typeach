<!-- prettier-ignore -->
<template>
  <PeachyTextareaField class="field">
    <PeachyFieldLabel>
      Who was <span style="color: var(--purple-80)">Aina Wifalk</span>?
    </PeachyFieldLabel>

    <PeachyTextareaFieldInput v-model="modelValue" disabled />

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
  PeachyTextareaFieldInput,
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

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--purple-80);
  box-shadow: 0 0 0 6px var(--purple-30);
  isolation: isolate;
}

svg {
  block-size: var(--icon-size);
  flex-shrink: 0;
  margin-block-start: 0.1em;
}
</style>
