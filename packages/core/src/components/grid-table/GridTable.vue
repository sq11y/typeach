<template>
  <PeachyTable ref="element" role="grid">
    <slot />
  </PeachyTable>
</template>

<script lang="ts" setup>
import { useTemplateRef, computed, provide } from "vue";
import { useElements, useGrid, GridKey } from "../../hooks";

import { PeachyTable } from "../table";

export interface GridTableSlots {
  /**
   * The content of the table should only contain [valid children for the HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table#technical_summary).
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
