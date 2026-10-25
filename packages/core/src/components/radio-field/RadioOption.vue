<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { computed, provide } from "vue";
import { RadioOptionContextKey } from "./hooks";

export interface RadioOptionProps {
  /**
   * The radio's value.
   */
  value: string | undefined;
}

export interface RadioOptionSlots {
  /**
   * The radio option should include an [accessible label](/p/accessible-labels) and a radio input.
   */
  default: () => void;
}

const props = defineProps<RadioOptionProps>();

defineSlots<RadioOptionSlots>();

const valueRef = computed(() => props.value);

provide(RadioOptionContextKey, valueRef);
</script>
