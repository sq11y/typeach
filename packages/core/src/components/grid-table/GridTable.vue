<template>
  <PeachyTable ref="element" role="grid">
    <slot />
  </PeachyTable>
</template>

<script lang="ts" setup>
import { computed, provide, useTemplateRef } from "vue";

import { GridKey, useElements, useGrid } from "../../hooks";

import PeachyTable from "../table/Table.vue";

export interface GridTableSlots {
  /**
   * The content of the table should only contain valid children for the [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role).
   */
  default: () => void;
}

defineSlots<GridTableSlots>();

const node = useTemplateRef("element");

const element = computed<HTMLElement>(() => node.value?.$el);

const { getElements } = useElements("table", element);

const { onKeyDown } = useGrid(getElements);

provide(GridKey, {
  onKeyDown,
});
</script>
