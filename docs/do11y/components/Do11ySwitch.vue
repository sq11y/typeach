<template>
  <PeachySwitchField v-model="modelValue">
    <Do11yButton type="switch-button" v-bind="$attrs">
      <slot />

      <div class="switch">
        <div class="indicator">
          <component :is="icon" />
        </div>
      </div>
    </Do11yButton>
  </PeachySwitchField>
</template>

<script lang="ts" setup>
import type { Component } from "vue";

import { PeachySwitchField } from "@typeach/core";

import Do11yButton from "./Do11yButton.vue";

interface SwitchProps {
  icon: Component;
}

interface SwitchSlots {
  default: (data: void) => void;
}

defineProps<SwitchProps>();

defineSlots<SwitchSlots>();

const modelValue = defineModel<boolean>({ required: true });
</script>

<style lang="scss">
@use "@typeach/theme/utils";

button[aria-checked] {
  gap: var(--relative-spacing-m);

  .switch {
    padding-inline: var(--relative-spacing-xxs) var(--relative-spacing-l);
    padding-block: 0.0125em;

    border: var(--invisible-border);
    border-radius: var(--pill-border-radius);

    background-color: var(--grey-30);

    @include utils.transition("padding, background-color, color");
  }
}

button[aria-checked="true"] {
  .switch {
    padding-inline: var(--relative-spacing-l) var(--relative-spacing-xxs);

    background-color: var(--green-30);
    color: var(--green-70);
  }
}
</style>
