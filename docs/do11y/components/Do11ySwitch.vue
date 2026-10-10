<template>
  <PeachySwitchField v-model="modelValue" class="button">
    <PeachyFieldLabel>
      <slot />
    </PeachyFieldLabel>

    <PeachySwitchTrack v-bind="$attrs" class="no-focus">
      <PeachySwitchThumb :class="c('thumb')">
        <component :is="icon" />
      </PeachySwitchThumb>
    </PeachySwitchTrack>
  </PeachySwitchField>
</template>

<script lang="ts" setup>
import type { Component } from "vue";

import {
  PeachyFieldLabel,
  PeachySwitchField,
  PeachySwitchThumb,
  PeachySwitchTrack,
  useBemClass,
} from "@typeach/core";

interface SwitchProps {
  /**
   * The icon to represent the switch.
   */
  icon: Component;
}

interface SwitchSlots {
  /**
   * The switch label.
   */
  default: () => void;
}

defineProps<SwitchProps>();

defineSlots<SwitchSlots>();

const modelValue = defineModel<boolean>({ required: true });

const c = useBemClass("switch");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

button[aria-checked] {
  padding: 0;
  background-color: transparent;
  border: 0;

  gap: var(--relative-spacing-m);

  .switch__thumb {
    padding-inline: var(--relative-spacing-xxs) var(--relative-spacing-l);
    padding-block: 0.0125em;

    border: var(--invisible-border);
    border-radius: var(--pill-border-radius);

    background-color: var(--grey-30);

    @include utils.transition("padding, background-color, color");
  }
}

button[aria-checked="true"] .switch__thumb {
  padding-inline: var(--relative-spacing-l) var(--relative-spacing-xxs);

  background-color: var(--green-30);
  color: var(--green-70);
}
</style>
