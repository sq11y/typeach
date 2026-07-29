<template>
  <div
    :id="id"
    ref="element"
    :aria-labelledby="`${id}-label`"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ')"
    :aria-invalid="hasErrors"
    :aria-multiselectable="multiselect"
    :aria-orientation="orientation"
    role="listbox"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, useTemplateRef } from "vue";

import type { Orientation } from "../../utils";

import { useElements, useListbox } from "../../hooks";
import { useField } from "../field/hooks";

import { ListboxFieldInjectionKey } from "./hooks";

export interface ListboxFieldInputProps {
  /**
   * If the listbox should allow multiple
   * options to be selected.
   */
  multiselect?: boolean;

  /**
   * If the element should be disabled.
   */
  disabled?: boolean;

  /**
   * The visual orientation of the items.
   *
   * This will decide the available
   * keyboard shortcuts.
   */
  orientation?: Orientation;
}

export interface ListboxFieldInputSlots {
  /**
   * The groups and/or options.
   */
  default: () => void;
}

const props = withDefaults(defineProps<ListboxFieldInputProps>(), {
  orientation: "vertical",
});

defineSlots<ListboxFieldInputSlots>();

/**
 * The currently selected values.
 */
const modelValue = defineModel<string[]>({ default: [] });

const { id, hasErrors, errorIds, descriptionIds } = useField();

const element = useTemplateRef("element");

const { getElements } = useElements("listbox", element);

const { onKeyDown, onSpace, moveTo } = useListbox(
  () => props.orientation,
  () => props.multiselect,
  modelValue,
  getElements,
);

provide(ListboxFieldInjectionKey, {
  onKeyDown,
  onSpace,
  moveTo,
  modelValue,
  multiselect: computed(() => props.multiselect),
});
</script>
