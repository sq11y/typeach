<template>
  <PeachyTableHeadingCell>
    <slot />
  </PeachyTableHeadingCell>
</template>

<script lang="ts" setup>
import { PeachyTableHeadingCell } from "../table";

export interface CalendarHeadingCellSlots {
  /**
   * The content of the heading should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

defineSlots<CalendarHeadingCellSlots>();
</script>
