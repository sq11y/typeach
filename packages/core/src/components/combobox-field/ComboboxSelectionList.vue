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

export interface ComboboxSelectionListProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface ComboboxSelectionListSlots {
  /**
   * The selected list items.
   */
  default: () => void;
}

const props = withDefaults(defineProps<ComboboxSelectionListProps>(), {
  id: () => useId(),
});

defineSlots<ComboboxSelectionListSlots>();

const { sharedIds } = inject(FieldContextKey)!;

shareId(sharedIds, "selection-list", () => props.id);

const { multiselect } = inject(ListboxFieldContextKey)!;
</script>
