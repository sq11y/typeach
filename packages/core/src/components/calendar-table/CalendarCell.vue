<template>
  <PeachyTableCell role="gridcell">
    <slot />
  </PeachyTableCell>
</template>

<script lang="ts" setup>
import { PeachyTableCell } from "../table";

export interface CalendarCellSlots {
  /**
   * Should include a single `Date`.
   */
  default: () => void;
}

defineSlots<CalendarCellSlots>();
</script>
