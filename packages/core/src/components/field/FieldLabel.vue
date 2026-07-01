<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events vuejs-accessibility/label-has-for vuejs-accessibility/no-static-element-interactions -->
  <label :id="`${id}-label`" :for="id" @click="onClick">
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { useField } from "./hooks";

export interface FieldLabelSlots {
  /**
   * The label's content - should include an [accessible label](/p/labels).
   *
   * Some fields might have their own label where this one becomes incompatible - read the documentation for each field.
   */
  default: (data: void) => void;
}

defineSlots<FieldLabelSlots>();

const { id } = useField();

const onClick = () => {
  document.getElementById(id)?.focus();
};
</script>
