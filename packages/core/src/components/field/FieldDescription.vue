<template>
  <div :id="id" ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { provideElement } from "../../hooks";

export interface FieldDescriptionSlots {
  /**
   * The description for the field.
   */
  default: (data: void) => void;
}

defineSlots<FieldDescriptionSlots>();

const id = useId();

const element = useTemplateRef("element");

provideElement("field-description", element);
</script>
