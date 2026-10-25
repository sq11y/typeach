<template>
  <div
    ref="element"
    role="radiogroup"
    :aria-labelledby="sharedIds.get('label')"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ')"
    :aria-invalid="hasErrors"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, useId, useTemplateRef } from "vue";

import { RadioFieldContextKey } from "./hooks";

import { provideField } from "../field/hooks";

export interface RadioFieldSlots {
  /**
   * The related radio options and field sub-components.
   */
  default: () => void;
}

defineSlots<RadioFieldSlots>();

/**
 * The currently selected value.
 */
const modelValue = defineModel<string>();

const element = useTemplateRef("element");

const { sharedIds, errorIds, descriptionIds, hasErrors } = provideField(element, () => false);

provide(RadioFieldContextKey, {
  groupId: useId(),
  modelValue,
});
</script>
