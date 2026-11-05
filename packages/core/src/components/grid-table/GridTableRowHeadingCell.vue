<template>
  <PeachyTableRowHeadingCell ref="element" role="gridcell" @keydown="onKeyDown(rowId, $event)">
    <slot />
  </PeachyTableRowHeadingCell>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { useGridTableCell } from "./hooks";

import { PeachyTableRowHeadingCell } from "../table";

export interface GridTableRowHeadingCellSlots {
  /**
   * The content of the heading should only contain [valid children for the HTML th element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th#technical_summary).
   */
  default: () => void;
}

defineSlots<GridTableRowHeadingCellSlots>();

const node = useTemplateRef("element");

const { rowId, onKeyDown } = useGridTableCell(node);
</script>
