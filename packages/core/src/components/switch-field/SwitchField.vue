<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, useId, useTemplateRef } from "vue";

import { useFieldProvider } from "../field/hooks";

import { SwitchFieldInjectionKey } from "./hooks";

export interface SwitchFieldSlots {
  /**
   * The related switch and field sub-components.
   */
  default: (data: void) => void;
}

/**
 * If the switch is toggled on or not.
 */
const modelValue = defineModel<boolean>({ default: false });

defineSlots<SwitchFieldSlots>();

const id = useId();

const element = useTemplateRef("element");

useFieldProvider(id, element);

provide(SwitchFieldInjectionKey, {
  id,
  modelValue,
});
</script>
