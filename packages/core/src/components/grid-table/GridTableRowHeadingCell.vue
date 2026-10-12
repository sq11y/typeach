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
   * The content of the heading should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

defineSlots<GridTableRowHeadingCellSlots>();

const node = useTemplateRef("element");

const { rowId, onKeyDown } = useGridTableCell(node);
</script>
