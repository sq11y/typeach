import {
  computed,
  ref,
  toValue,
  watch,
  type ComputedRef,
  type MaybeRefOrGetter,
  type Ref,
} from "vue";

import {
  splitDaysIntoWeeks,
  getDaysOfCalendarMonth,
  getMonth,
  getYear,
  Weekday,
  type Week,
  type Month,
} from "../utils";

export interface Calendar {
  /**
   * The current year in the calendar.
   */
  year: ComputedRef<number>;

  /**
   * The current month in the calendar.
   */
  month: ComputedRef<Month>;

  /**
   * The weeks in the calendar.
   * The days include padding days.
   */
  weeks: ComputedRef<Week[]>;
}

/**
 * Helps you with the dates
 * needed for a calendar.
 */
export const useCalendar = (
  date: Ref<Date>,
  startOfWeek: MaybeRefOrGetter<Weekday> = Weekday.Monday,
  locale: MaybeRefOrGetter<string> = "en",
): Calendar => {
  const daysOfMonth = ref(getDaysOfCalendarMonth(date.value, toValue(startOfWeek)));

  const year = computed(() => getYear(date.value));

  const month = computed(() => getMonth(date.value, toValue(locale)));

  const weeks = computed(() => splitDaysIntoWeeks(daysOfMonth.value));

  const key = computed(() => `${year.value}${month.value.number}`);

  watch(key, () => {
    daysOfMonth.value = getDaysOfCalendarMonth(date.value, toValue(startOfWeek));
  });

  /* prettier-ignore */
  watch(() => toValue(startOfWeek), (newStartOfWeek) => {
    daysOfMonth.value = getDaysOfCalendarMonth(date.value, newStartOfWeek);
  });

  return { year, month, weeks };
};
