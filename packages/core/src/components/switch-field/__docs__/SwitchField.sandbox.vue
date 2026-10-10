<!-- prettier-ignore -->
<template>
  <PeachySwitchField v-model="modelValue" :disabled="disabled" class="field">
    <LockSvg
      v-if="disabled"
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
   * If the switch button should be disabled or not.
   */
  disabled?: boolean;
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

label {
  cursor: pointer;
}

/* ===== Track ===== */

button[aria-checked] {
  padding-inline: 0.0125em var(--relative-spacing-xl);

  border: var(--invisible-border);
  border-radius: var(--pill-border-radius);

  background-color: var(--grey-30);

  @include utils.transition("padding, border-color, background-color");

  &[aria-disabled="false"] {
    cursor: pointer;

    @include utils.hover {
      border-color: var(--grey-60);
    }

    &:active {
      background-color: var(--grey-50);
    }
  }
}

button[aria-checked="true"] {
  padding-inline: var(--relative-spacing-xl) 0.0125em;
  background-color: var(--purple-40);

  .thumb {
    background-color: var(--purple-70);
  }

  &[aria-disabled="false"] {
    @include utils.hover {
      border-color: var(--purple-60);
    }

    &:active {
      background-color: var(--purple-50);
    }
  }
}

/* ===== Thumb ===== */

.thumb {
  inline-size: 1em;
  aspect-ratio: 1;

  border-radius: 100%;
  border: var(--invisible-border);

  background-color: var(--grey-60);

  @include utils.transition("scale, background-color");
}

/* ===== Disabled ===== */

button[aria-checked][aria-disabled="true"] {
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

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
