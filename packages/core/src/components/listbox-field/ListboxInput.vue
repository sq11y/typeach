<template>
  <!-- eslint-disable-next-line vuejs-accessibility/interactive-supports-focus -->
  <div
    v-if="open === undefined || open"
    :id="id"
    :aria-multiselectable="multiselect"
    :aria-labelledby="sharedIds.get('label')"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ')"
    :aria-invalid="hasErrors"
    :aria-activedescendant="activeElementId"
    :tabindex="isStandaloneListbox ? 0 : -1"
    role="listbox"
    @keydown="isStandaloneListbox ? onKeyDown($event) : undefined"
  >
    <slot />
  </div>
</template>

<!-- TODO: add orientation -->

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { FieldContextKey } from "../field/hooks";
import { ListboxFieldContextKey, ListboxFieldStandaloneContextKey } from "./hooks";

export interface SelectFieldListboxProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface SelectFieldListboxSlots {
  /**
   * The groups and options.
   */
  default: () => void;
}

const props = withDefaults(defineProps<SelectFieldListboxProps>(), {
  id: () => useId(),
});

defineSlots<SelectFieldListboxSlots>();

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "listbox", () => props.id);

const { open, multiselect, activeElementId, onKeyDown } = inject(ListboxFieldContextKey)!;

const isStandaloneListbox = inject(ListboxFieldStandaloneContextKey, false);
</script>
