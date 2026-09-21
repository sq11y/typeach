<template>
  <button
    :id="id"
    :aria-activedescendant="activeElementId"
    :aria-controls="sharedIds.get('listbox')"
    :aria-expanded="open"
    :aria-labelledby="sharedIds.get('label')"
    aria-autocomplete="none"
    aria-haspopup="listbox"
    role="combobox"
    type="button"
    @blur="onBlur"
    @keydown="onKeyDown"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";

import { shareId } from "../../hooks";

import { FieldContextKey } from "../field/hooks";
import { ListboxFieldContextKey } from "../listbox-field/hooks";

export interface SelectFieldButtonProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface SelectFieldButtonSlots {
  /**
   * The accessibel label of the button should include the selected items.
   */
  default: () => void;
}

const props = withDefaults(defineProps<SelectFieldButtonProps>(), {
  id: () => useId(),
});

defineSlots<SelectFieldButtonSlots>();

const { sharedIds } = inject(FieldContextKey)!;

const { open, activeElementId, onBlur, onKeyDown, onClick } = inject(ListboxFieldContextKey)!;

shareId(sharedIds, "input", () => props.id);
</script>
