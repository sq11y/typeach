<template>
  <PeachyTableCell role="gridcell">
    <slot />
  </PeachyTableCell>
</template>

<script lang="ts" setup>
import PeachyTableCell from "../table/TableCell.vue";

export interface CalendarTableCellSlots {
  /**
   * The content of the cell.
   */
  default: () => void;
}

defineSlots<CalendarTableCellSlots>();
</script>
