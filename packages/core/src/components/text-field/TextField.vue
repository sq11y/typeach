<template>
  <div v-if="Object.keys($attrs).length">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { provideField } from "../field/hooks";

export interface TextFieldSlots {
  /**
   * The related text input and field sub-components.
   */
  default: () => void;
}

defineSlots<TextFieldSlots>();

const element = useTemplateRef("element");

provideField(element);
</script>
