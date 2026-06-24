<template>
  <button
    ref="element"
    :aria-pressed="selected"
    :aria-disabled="disabled"
    :aria-current="isSameDate(date, new Date()) ? 'date' : undefined"
    :tabindex="isFocused ? 0 : -1"
    @focus="focusedDate = date"
    @keydown="onKeyDown"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, useTemplateRef, nextTick } from "vue";

import { isSameDate } from "../../utils";

import { useCalendarGrid, useContext } from "../../hooks";

import { CalendarTableKey } from "./hooks";
import { watchImmediate } from "@vueuse/core";

export interface CalendarTableCellButtonProps {
  /**
   * The date.
   */
  date: Date;

  /**
   * If the button is disabled or not.
   */
  disabled?: boolean;

  /**
   * If the date is currently selected or not.
   */
  selected?: boolean;
}

export interface CalendarTableCellButtonEmits {
  /**
   * The event triggered on click.
   */
  click: [event: MouseEvent];
}

export interface CalendarTableCellButtonSlots {
  /**
   * The content of the button - should include an [accessible label](/p/labels).
   *
   * The label should ensure the full date is announced for screen readers.
   */
  default: (data: void) => void;
}

const props = defineProps<CalendarTableCellButtonProps>();

const emit = defineEmits<CalendarTableCellButtonEmits>();

defineSlots<CalendarTableCellButtonSlots>();

const element = useTemplateRef("element");

const { focusedDate, allowFocus } = useContext(CalendarTableKey);

const { onKeyDown } = useCalendarGrid(focusedDate);

const isFocused = computed(() => isSameDate(props.date, focusedDate.value));

watchImmediate(isFocused, async (newIsFocused) => {
  if (newIsFocused && allowFocus.value) {
    await nextTick();
    element.value?.focus();
  }
});
</script>
