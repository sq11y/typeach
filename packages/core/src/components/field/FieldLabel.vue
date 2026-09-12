<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events vuejs-accessibility/label-has-for vuejs-accessibility/no-static-element-interactions -->
  <label :id="id" :for="sharedIds.get('input')" @click="onClick">
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";

import { shareId } from "../../hooks";

import { FieldContextKey } from "./hooks";

export interface FieldLabelProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface FieldLabelSlots {
  /**
   * The label's content - should include an [accessible label](/p/accessible-labels).
   *
   * Some fields might have their own label where this one becomes incompatible - read the documentation for each field.
   */
  default: () => void;
}

const props = withDefaults(defineProps<FieldLabelProps>(), {
  id: () => useId(),
});

defineSlots<FieldLabelSlots>();

const { sharedIds } = inject(FieldContextKey)!;

shareId(sharedIds, "label", () => props.id);

const onClick = () => {
  document.getElementById(sharedIds.get("input"))?.focus();
};
</script>
