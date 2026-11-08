<template>
  <div v-if="Object.keys($attrs).length" v-bind="$attrs">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { provideField } from "../field/hooks";

export interface TextareaFieldProps {
  /**
   * If the input should be readonly.
   */
  readonly?: boolean;
}

export interface TextareaFieldSlots {
  /**
   * The related textarea input and field sub-components.
   */
  default: () => void;
}

const props = defineProps<TextareaFieldProps>();

defineSlots<TextareaFieldSlots>();

const element = useTemplateRef("element");

provideField(element, () => props.readonly);
</script>
