<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, useTemplateRef } from "vue";

import { SwitchFieldContextKey } from "./hooks";

import { provideField } from "../field/hooks";

export interface SwitchFieldProps {
  /**
   * If the switch should be disabled.
   */
  disabled?: boolean;
}

export interface SwitchFieldSlots {
  /**
   * The related switch and field sub-components.
   */
  default: () => void;
}

const props = defineProps<SwitchFieldProps>();

defineSlots<SwitchFieldSlots>();

/**
 * If the switch is toggled on or not.
 */
const modelValue = defineModel<boolean>({ default: false });

const element = useTemplateRef("element");

provideField(element);

provide(SwitchFieldContextKey, {
  modelValue,
  disabled: computed(() => props.disabled),
});
</script>
