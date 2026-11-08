<template>
  <div v-if="Object.keys($attrs).length" v-bind="$attrs">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { provideField } from "../field/hooks";

export interface TextFieldProps {
  /**
   * If the input should be readonly.
   */
  readonly?: boolean;
}

export interface TextFieldSlots {
  /**
   * The related text input and field sub-components.
   */
  default: () => void;
}

const props = defineProps<TextFieldProps>();

defineSlots<TextFieldSlots>();

const element = useTemplateRef("element");

provideField(element, () => props.readonly);
</script>
