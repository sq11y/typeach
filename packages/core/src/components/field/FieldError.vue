<template>
  <div :id="id" ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { provideElement } from "../../hooks";

export interface FieldErrorProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface FieldErrorSlots {
  /**
   * The relevant help text for the error.
   */
  default: () => void;
}

withDefaults(defineProps<FieldErrorProps>(), {
  id: () => useId(),
});

defineSlots<FieldErrorSlots>();

const element = useTemplateRef("element");

provideElement("field-error", element);
</script>
