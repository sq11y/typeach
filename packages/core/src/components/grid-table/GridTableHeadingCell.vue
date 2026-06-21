<template>
  <PeachyTableHeadingCell
    ref="element"
    role="gridcell"
    :sorted="sorted"
    @keydown="onKeyDown(rowId, $event)"
  >
    <slot />
  </PeachyTableHeadingCell>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { useGridTableCell } from "./hooks";

import PeachyTableHeadingCell from "../table/TableHeadingCell.vue";

export interface GridTableHeadingCellProps {
  /**
   * Which order the column is currently sorted in.
   */
  sorted?: "ascending" | "descending";
}

export interface GridTableHeadingCellSlots {
  /**
   * Should contain an accessible label for the column.
   */
  default: (data: void) => void;
}

defineProps<GridTableHeadingCellProps>();

defineSlots<GridTableHeadingCellSlots>();

const node = useTemplateRef("element");

const { rowId, onKeyDown } = useGridTableCell(node);
</script>
