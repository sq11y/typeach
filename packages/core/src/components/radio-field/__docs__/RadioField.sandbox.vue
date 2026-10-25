<!-- prettier-ignore -->
<template>
  <PeachyRadioField v-model="modelValue">
    <PeachyFieldLabel>
      Preferred commute
    </PeachyFieldLabel>

    <div class="radio-options">
      <PeachyRadioOption class="radio" value="bus">
        <PeachyRadioOptionInput class="no-focus" />
        Bus
      </PeachyRadioOption>

      <PeachyRadioOption class="radio" value="tram">
        <PeachyRadioOptionInput class="no-focus" />
        Tram
      </PeachyRadioOption>

      <PeachyRadioOption class="radio" value="train">
        <PeachyRadioOptionInput class="no-focus" />
        Train
      </PeachyRadioOption>
    </div>
  </PeachyRadioField>
</template>

<script lang="ts" setup>
/* prettier-ignore */
import {
  PeachyFieldLabel,
  PeachyRadioField,
  PeachyRadioOption,
  PeachyRadioOptionInput
} from "@typeach/core";

const modelValue = defineModel<string>({ default: "tram" });
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-width: 1px;
  --border-shape: var(--border-width) solid;

  --transition-duration: 0.15s;
}

.radio-options {
  margin-block-start: var(--spacing-xs);
  margin-inline-start: var(--relative-spacing-s);

  > * {
    margin-block-start: var(--spacing-xxs);
  }
}

.radio {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  max-inline-size: max-content;

  padding: 0 var(--spacing-xxs);

  border-radius: var(--pill-border-radius);
}

input[type="radio"] {
  appearance: none;
  background-color: transparent;

  padding: 0;
  margin: 0;

  position: relative;
  inline-size: 1em;
  block-size: 1em;

  border: var(--border-shape) var(--grey-60);
  border-radius: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      border-color var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out;
  }

  &:hover {
    border-color: var(--purple-80);
  }

  &:checked {
    border-color: var(--purple-80);
    background-color: var(--purple-30);
  }

  &:checked::before {
    content: "";
    position: absolute;
    inset: 0.175em;
    border-radius: inherit;

    background-color: var(--purple-70);

    @media (forced-colors: active) {
      background-color: CanvasText;
    }
  }
}

/* ===== Global ===== */

.radio:has(:focus-visible),
*:focus-visible:not(.no-focus) {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

.no-focus:focus-visible {
  outline: none;
}
</style>
