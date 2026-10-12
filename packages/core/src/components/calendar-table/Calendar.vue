<template>
  <PeachyTable role="grid">
    <slot />
  </PeachyTable>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { useMounted } from "@vueuse/core";

import { CalendarContextKey } from "./hooks";

import { PeachyTable } from "../table";

export interface CalendarProps {
  /**
   * If the date should be focused on mount.
   */
  autoFocus?: boolean;
}

export interface CalendarSlots {
  /**
   * The content of the table should only contain [valid children for the HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table#technical_summary).
   */
  default: () => void;
}

const props = defineProps<CalendarProps>();

defineSlots<CalendarSlots>();

/**
 * The focused date.
 */
const focusedDate = defineModel<Date>({ default: () => new Date() });

const mounted = useMounted();

provide(CalendarContextKey, {
  focusedDate,
  allowFocus: computed(() => props.autoFocus || mounted.value),
});
</script>
