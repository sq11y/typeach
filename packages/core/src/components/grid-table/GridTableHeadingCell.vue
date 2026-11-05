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

import { PeachyTableHeadingCell } from "../table";

export interface GridTableHeadingCellProps {
  /**
   * Which order the column is currently sorted in.
   */
  sorted?: "ascending" | "descending";
}

export interface GridTableHeadingCellSlots {
  /**
   * The content of the heading should only contain [valid children for the HTML th element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th#technical_summary).
   */
  default: () => void;
}

defineProps<GridTableHeadingCellProps>();

defineSlots<GridTableHeadingCellSlots>();

const node = useTemplateRef("element");

const { rowId, onKeyDown } = useGridTableCell(node);
</script>
