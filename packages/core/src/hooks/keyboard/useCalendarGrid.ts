import type { Ref } from "vue";

import {
  Weekday,
  getFirstDayOfMonth,
  getFirstDayOfWeek,
  getLastDayOfMonth,
  getLastDayOfTheWeek,
  getNextDay,
  getNextMonth,
  getNextWeek,
  getNextYear,
  getPreviousDay,
  getPreviousMonth,
  getPreviousWeek,
  getPreviousYear,
} from "../../utils";

export interface CalendarGrid {
  /**
   * The `onKeydown` event which should be applied
   * to each cell in the grid.
   */
  onKeyDown(event: KeyboardEvent): void;
}

export const useCalendarGrid = (date: Ref<Date>, startOfWeek = Weekday.Monday): CalendarGrid => ({
  onKeyDown(event) {
    const keys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
    ];

    if (keys.includes(event.key)) {
      event.preventDefault();
    }

    switch (event.key) {
      case "ArrowLeft":
        date.value = getPreviousDay(date.value);
        break;

      case "ArrowRight":
        date.value = getNextDay(date.value);
        break;

      case "ArrowUp":
        date.value = getPreviousWeek(date.value);
        break;

      case "ArrowDown":
        date.value = getNextWeek(date.value);
        break;

      case "PageUp":
        /* prettier-ignore */
        date.value = event.shiftKey
          ? getPreviousYear(date.value)
          : getPreviousMonth(date.value);

        break;

      case "PageDown":
        /* prettier-ignore */
        date.value = event.shiftKey
          ? getNextYear(date.value)
          : getNextMonth(date.value);

        break;

      case "Home":
        date.value = event.shiftKey
          ? getFirstDayOfMonth(date.value)
          : getFirstDayOfWeek(date.value, startOfWeek);

        break;

      case "End":
        date.value = event.shiftKey
          ? getLastDayOfMonth(date.value)
          : getLastDayOfTheWeek(date.value, startOfWeek);

        break;

      default:
        break;
    }
  },
});
