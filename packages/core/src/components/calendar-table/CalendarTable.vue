<template>
  <PeachyTable role="grid">
    <slot />
  </PeachyTable>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";

import { useMounted } from "@vueuse/core";

import { PeachyTable } from "../table";

import { CalendarTableKey } from "./hooks";

export interface CalendarTableProps {
  /**
   * If the date should be focused on mount.
   */
  autoFocus?: boolean;
}

export interface CalendarTableSlots {
  /**
   * The content of the table.
   * Should only contain valid children for the `table` element.
   */
  default: (data: void) => void;
}

const props = defineProps<CalendarTableProps>();

defineSlots<CalendarTableSlots>();

/**
 * The focused date.
 */
const focusedDate = defineModel<Date>({ default: new Date() });

const mounted = useMounted();

provide(CalendarTableKey, {
  focusedDate,
  allowFocus: computed(() => !!props.autoFocus || mounted.value),
});
</script>
