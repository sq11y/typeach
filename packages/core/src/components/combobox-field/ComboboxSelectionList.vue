<template>
  <ul v-if="multiselect" :id="id">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { FieldContextKey } from "../field/hooks";
import { ListboxFieldContextKey } from "../listbox-field/hooks";

export interface SelectFieldSelectionListProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface ComboboxFieldSelectionListSlots {
  /**
   * The selected list items.
   */
  default: () => void;
}

const props = withDefaults(defineProps<SelectFieldSelectionListProps>(), {
  id: () => useId(),
});

defineSlots<ComboboxFieldSelectionListSlots>();

const { sharedIds } = inject(FieldContextKey)!;

shareId(sharedIds, "selection-list", () => props.id);

const { multiselect } = inject(ListboxFieldContextKey)!;
</script>
