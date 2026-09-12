<template>
  <div
    :id="id"
    ref="element"
    :aria-labelledby="sharedIds.get('label')"
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
import { useTemplateRef, computed, inject, provide, useId } from "vue";
import { shareId, useElements, useListbox } from "../../hooks";

import type { Orientation } from "../../utils";

import { ListboxFieldContextKey } from "./hooks";
import { FieldContextKey } from "../field/hooks";

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

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface ListboxFieldInputSlots {
  /**
   * The groups and/or options.
   */
  default: () => void;
}

const props = withDefaults(defineProps<ListboxFieldInputProps>(), {
  orientation: "vertical",
  id: () => useId(),
});

defineSlots<ListboxFieldInputSlots>();

/**
 * The currently selected values.
 */
const modelValue = defineModel<string[]>({ default: () => [] });

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "input", () => props.id);

const element = useTemplateRef("element");

const { getElements } = useElements("listbox", element);

const { onKeyDown, onSpace, moveTo } = useListbox(
  () => props.orientation,
  () => props.multiselect,
  modelValue,
  getElements,
);

provide(ListboxFieldContextKey, {
  onKeyDown,
  onSpace,
  moveTo,
  modelValue,
  multiselect: computed(() => props.multiselect),
});
</script>
