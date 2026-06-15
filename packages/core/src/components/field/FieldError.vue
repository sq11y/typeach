<template>
  <div :id="id" ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { provideElement } from "../../hooks";

export interface FieldErrorSlots {
  /**
   * The relevant help text for the error.
   */
  default: (data: void) => void;
}

defineSlots<FieldErrorSlots>();

const id = useId();

const element = useTemplateRef("element");

provideElement("field-error", element);
</script>
