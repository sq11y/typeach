<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref, useTemplateRef } from "vue";
import { provideField } from "../field/hooks";
import { ComboboxFieldContextKey } from "./hooks";
import { useCombobox } from "../../hooks";
import { ListboxFieldContextKey } from "../listbox-field/hooks";

export interface ComboboxFieldProps {
  /**
   * If the combobox should be disabled.
   */
  disabled?: boolean;

  /**
   * If one should be able to select more than one option.
   */
  multiselect?: boolean;
}

export interface ComboboxFieldSlots {
  /**
   * The selected options list, combobox input and listbox input.
   */
  default: () => void;
}

const props = defineProps<ComboboxFieldProps>();

defineSlots<ComboboxFieldSlots>();

/**
 * The selected values. When single select, there will be only one value in the array.
 */
const modelValue = defineModel<string[]>({ default: () => [] });

const element = useTemplateRef("element");

const { sharedIds } = provideField(element);

const multiselect = computed(() => props.multiselect);

const filter = ref("");

const open = ref(false);

const {
  optionsTracker,
  options,

  activeIndex,
  activeElementId,

  onClick,
  onBlur,
  onKeyDown,
  onOptionClick,
  onOptionMouseDown,
} = useCombobox(modelValue, multiselect, sharedIds, filter, open);

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

provide(ComboboxFieldContextKey, {
  filter,
});
</script>
