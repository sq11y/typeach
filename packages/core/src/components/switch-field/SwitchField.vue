<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, useId, useTemplateRef } from "vue";

import { SwitchFieldContextKey } from "./hooks";

import { provideField } from "../field/hooks";

export interface SwitchFieldSlots {
  /**
   * The related switch and field sub-components.
   */
  default: () => void;
}

/**
 * If the switch is toggled on or not.
 */
const modelValue = defineModel<boolean>({ default: false });

defineSlots<SwitchFieldSlots>();

const id = useId();

const element = useTemplateRef("element");

provideField(id, element);

provide(SwitchFieldContextKey, {
  id,
  modelValue,
});
</script>
