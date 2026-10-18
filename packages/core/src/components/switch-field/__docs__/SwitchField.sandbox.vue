<!-- prettier-ignore -->
<template>
  <PeachySwitchField v-model="modelValue" :readonly="readonly" class="field">
    <LockSvg
      v-if="readonly"
      aria-hidden="true"
      class="lock"
    />

    <PeachyFieldLabel>
      Universal health care
    </PeachyFieldLabel>

    <PeachySwitchTrack>
      <PeachySwitchThumb class="thumb" />
    </PeachySwitchTrack>
  </PeachySwitchField>
</template>

<script lang="ts" setup>
/* prettier-ignore */
import {
  PeachyFieldLabel,
  PeachySwitchField,
  PeachySwitchTrack,
  PeachySwitchThumb
} from "@typeach/core";

import LockSvg from "./icons/lock.svg?component";

interface SwitchFieldProps {
  /**
   * If the switch button should be readonly.
   */
  readonly?: boolean;
}

defineProps<SwitchFieldProps>();

const modelValue = defineModel<boolean>({ default: true });
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;

  --transition-duration: 0.15s;
}

/* ===== Container ===== */

.field {
  position: relative;

  @include utils.dock;
  justify-content: center;
  gap: var(--spacing-xs) var(--spacing-l);

  background-color: transparent;
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);
}

label:has(+ [aria-readonly="true"]) {
  @media (forced-colors: active) {
    color: GrayText;
  }
}

/* ===== Track ===== */

button[aria-checked] {
  padding-inline: 0.0125em var(--relative-spacing-xl);

  border: var(--invisible-border);
  border-radius: var(--pill-border-radius);

  background-color: var(--grey-30);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      padding var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  @media (hover: hover) {
    &:hover:not([aria-readonly="true"]) {
      border-color: var(--grey-60);
    }
  }

  &:active:not([aria-readonly="true"]) {
    background-color: var(--grey-50);
  }
}

button[aria-checked="true"] {
  padding-inline: var(--relative-spacing-xl) 0.0125em;
  background-color: var(--purple-40);

  .thumb {
    background-color: var(--purple-70);
  }

  @media (hover: hover) {
    &:hover:not([aria-readonly="true"]) {
      border-color: var(--purple-60);
    }
  }

  &:active:not([aria-readonly="true"]) {
    background-color: var(--purple-50);
  }
}

/* ===== Thumb ===== */

.thumb {
  inline-size: 1em;
  aspect-ratio: 1;

  border-radius: 100%;
  border: var(--invisible-border);

  background-color: var(--grey-60);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      scale var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out;
  }
}

/* ===== Readonly ===== */

button[aria-checked][aria-readonly="true"] {
  filter: grayscale(100%);
}

.lock {
  position: absolute;

  inset-block: calc(var(--icon-size) * -0.5);
  inset-inline-end: calc(var(--icon-size) * -0.6);

  inline-size: calc(var(--icon-size) + (2 * var(--spacing-xxs)));
  padding: var(--spacing-xxs);
  border-radius: 100%;

  background-color: var(--bg);
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
