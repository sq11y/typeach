<!-- prettier-ignore -->
<template>
  <PeachySwitchField v-model="modelValue">
    <PeachySwitchButton :disabled="disabled">

      <LockIcon
        v-if="disabled"
        aria-label="Locked"
        class="lock"
      />

      Label

      <div class="switch">
        <PeachySwitchStateLabel class="switch__state-label" >
          Off
        </PeachySwitchStateLabel>

        <div class="switch__toggle">
          <div class="switch__toggle-indicator"></div>
        </div>

        <PeachySwitchStateLabel class="switch__state-label">
          On
        </PeachySwitchStateLabel>
      </div>
    </PeachySwitchButton>
  </PeachySwitchField>
</template>

<script lang="ts" setup>
/* prettier-ignore */
import {
  PeachySwitchField,
  PeachySwitchButton,
  PeachySwitchStateLabel
} from "@typeach/core";

/* @ts-expect-error @TODO */
import LockIcon from "./icons/lock.svg?component";

interface SwitchFieldProps {
  disabled?: boolean;
}

defineProps<SwitchFieldProps>();

const modelValue = defineModel<boolean>({ default: false });
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;
}

button[aria-checked] {
  position: relative;
  border: 0;

  @include utils.space-between;
  width: 15rem;

  background-color: transparent;
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);

  &:focus-visible {
    outline: 2px solid var(--blue-80);
    box-shadow: 0 0 0 6px var(--blue-30);
  }

  @include utils.enabled {
    cursor: pointer;

    &:hover .switch__toggle {
      border-color: var(--grey-60);
    }
  }

  @include utils.disabled {
    .switch {
      filter: grayscale(100%);
    }
  }
}

.lock {
  position: absolute;

  top: calc(var(--icon-size) * -0.5);
  right: calc(var(--icon-size) * -0.6);

  width: calc(var(--icon-size) + (2 * var(--spacing-xxs)));
  padding: var(--spacing-xxs);
  border-radius: 100%;

  background-color: var(--bg);
}

.switch {
  @include utils.center-flex(var(--spacing-s));
}

.switch__state-label {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
}

.switch__toggle {
  padding-inline: 0.0125em var(--relative-spacing-xl);

  border: var(--invisible-border);
  border-radius: var(--pill-border-radius);

  background-color: var(--grey-30);

  @include utils.transition("padding, border-color, background-color");
}

.switch__toggle-indicator {
  scale: 1;

  width: var(--icon-size);
  aspect-ratio: 1;

  border-radius: 100%;
  border: var(--invisible-border);

  background-color: var(--grey-50);

  @include utils.transition("scale, background-color");
}

button[aria-checked="true"] {
  .switch__toggle {
    padding-inline: var(--relative-spacing-xl) 0.0125em;
    background-color: var(--green-30);
  }

  .switch__toggle-indicator {
    scale: 0.825;
    background-color: var(--green-70);
  }

  @include utils.enabled {
    &:hover .switch__toggle {
      border-color: var(--green-60);
    }
  }
}
</style>
