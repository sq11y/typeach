<template>
  <component :is="`h${level}`" :id="id">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { useId, inject } from "vue";
import { shareId } from "../../hooks";

import { DialogContextKey } from "./hooks";

export interface DialogHeadingProps {
  /**
   * The level of the heading.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface DialogHeadingSlots {
  /**
   * The heading.
   *
   * Kep in mind that a heading element should only contain [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements#technical_summary).
   */
  default: () => void;
}

const props = withDefaults(defineProps<DialogHeadingProps>(), {
  level: 1,
  id: () => useId(),
});

defineSlots<DialogHeadingSlots>();

const { sharedIds } = inject(DialogContextKey)!;

shareId(sharedIds, "heading", () => props.id);
</script>
