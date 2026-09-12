<template>
  <PeachyTableCell role="gridcell">
    <slot />
  </PeachyTableCell>
</template>

<script lang="ts" setup>
import { PeachyTableCell } from "../table";

export interface CalendarTableCellSlots {
  /**
   * The content of the cell should include a single `CellButton`.
   */
  default: () => void;
}

defineSlots<CalendarTableCellSlots>();
</script>
