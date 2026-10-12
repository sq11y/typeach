<template>
  <PeachyTableCell role="gridcell">
    <slot />
  </PeachyTableCell>
</template>

<script lang="ts" setup>
import { PeachyTableCell } from "../table";

export interface CalendarCellSlots {
  /**
   * The content of the cell should include a single `Date`.
   */
  default: () => void;
}

defineSlots<CalendarCellSlots>();
</script>
