<template>
  <PeachyTableCell
    ref="element"
    :heading="heading"
    role="gridcell"
    @keydown="onKeyDown(rowId, $event)"
  >
    <slot />
  </PeachyTableCell>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { useGridTableCell } from "./hooks";

import PeachyTableCell from "../table/TableCell.vue";

export interface GridTableCellProps {
  /**
   * If the cell is a heading for
   * the current row.
   */
  heading?: boolean;
}

export interface GridTableCellSlots {
  /**
   * The content of the cell.
   */
  default: (data: void) => void;
}

defineProps<GridTableCellProps>();

defineSlots<GridTableCellSlots>();

const node = useTemplateRef("element");

const { rowId, onKeyDown } = useGridTableCell(node);
</script>
