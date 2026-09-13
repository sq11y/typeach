<template>
  <div v-if="Object.keys($attrs).length">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { provideField } from "../field/hooks";

export interface TextareaFieldSlots {
  /**
   * The related textarea input and field sub-components.
   */
  default: () => void;
}

defineSlots<TextareaFieldSlots>();

const element = useTemplateRef("element");

provideField(element);
</script>
