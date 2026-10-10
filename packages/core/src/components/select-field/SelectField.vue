<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref, useTemplateRef } from "vue";

import { provideField } from "../field/hooks";
import { useCombobox } from "../../hooks";

import { ListboxFieldContextKey } from "../listbox-field/hooks";

export interface SelectFieldProps {
  /**
   * If the select should be disabled.
   */
  disabled?: boolean;

  /**
   * If one should be able to select more than one option.
   */
  multiselect?: boolean;
}

export interface SelectFieldSlots {
  /**
   * The related select button and listbox input.
   */
  default: () => void;
}

const props = defineProps<SelectFieldProps>();

defineSlots<SelectFieldSlots>();

/**
 * The selected values. When single select, there will be only one value in the array.
 */
const modelValue = defineModel<string[]>({ default: () => [] });

const element = useTemplateRef("element");

const { sharedIds } = provideField(element);

const multiselect = computed(() => props.multiselect);

const open = ref(false);

const {
  options,
  optionsTracker,

  activeIndex,
  activeElementId,

  onClick,
  onBlur,
  onKeyDown,
  onOptionClick,
  onOptionMouseDown,
} = useCombobox(modelValue, multiselect, sharedIds, undefined, open);

provide(ListboxFieldContextKey, {
  modelValue,

  open,
  activeIndex,
  activeElementId,

  disabled: computed(() => props.disabled),
  optionsTracker,
  options,

  multiselect,

  onClick,
  onBlur,
  onKeyDown,
  onOptionClick,
  onOptionMouseDown,
});
</script>
