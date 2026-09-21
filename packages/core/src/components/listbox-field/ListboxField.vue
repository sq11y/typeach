<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, useTemplateRef } from "vue";
import { provideField } from "../field/hooks";
import { useCombobox } from "../../hooks";
import { ListboxFieldContextKey, ListboxFieldStandaloneContextKey } from "./hooks";

export interface ListboxFieldProps {
  /**
   * If one should be able to select more than one option.
   */
  multiselect?: boolean;
}

export interface ListboxFieldSlots {
  /**
   * The listbox input and field sub-components.
   */
  default?: () => void;
}

const props = defineProps<ListboxFieldProps>();

defineSlots<ListboxFieldSlots>();

const modelValue = defineModel<string[]>({ default: () => [] });

const element = useTemplateRef("element");

const { sharedIds } = provideField(element);

const multiselect = computed(() => props.multiselect);

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
} = useCombobox(modelValue, multiselect, sharedIds);

provide(ListboxFieldContextKey, {
  modelValue,
  activeIndex,
  optionsTracker,
  options,
  activeElementId,
  multiselect,

  onClick,
  onBlur,
  onKeyDown,
  onOptionClick,
  onOptionMouseDown,
});

provide(ListboxFieldStandaloneContextKey, true);
</script>
