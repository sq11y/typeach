<template>
  <div :id="id" ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { provideElement } from "../../hooks";

export interface FieldDescriptionProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface FieldDescriptionSlots {
  /**
   * The description for the field.
   */
  default: () => void;
}

withDefaults(defineProps<FieldDescriptionProps>(), {
  id: () => useId(),
});

defineSlots<FieldDescriptionSlots>();

const element = useTemplateRef("element");

provideElement("field-description", element);
</script>
