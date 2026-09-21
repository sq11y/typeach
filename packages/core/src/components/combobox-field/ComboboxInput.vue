<template>
  <input
    :id="id"
    v-model="filter"
    :placeholder="placeholder"
    :aria-activedescendant="activeElementId"
    :aria-controls="sharedIds.get('listbox')"
    :aria-expanded="open"
    :aria-labelledby="`${sharedIds.get('label')} ${sharedIds.get('selection-list')}`"
    aria-autocomplete="list"
    aria-haspopup="listbox"
    role="combobox"
    type="text"
    @blur="onBlur"
    @keydown="onKeyDown"
    @click="onClick"
  />
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { ComboboxFieldContextKey } from "./hooks";
import { FieldContextKey } from "../field/hooks";
import { ListboxFieldContextKey } from "../listbox-field/hooks";

export interface ComboboxFieldInputProps {
  /**
   * The placeholder for the input.
   */
  placeholder?: string;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

const props = withDefaults(defineProps<ComboboxFieldInputProps>(), {
  id: () => useId(),
  placeholder: undefined,
});

const { sharedIds } = inject(FieldContextKey)!;

const {
  open,
  activeElementId,

  onBlur,
  onKeyDown,
  onClick,
} = inject(ListboxFieldContextKey)!;

const { filter } = inject(ComboboxFieldContextKey)!;

shareId(sharedIds, "input", () => props.id);
</script>
