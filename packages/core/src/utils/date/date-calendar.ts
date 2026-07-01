import { getWeekNumber } from "./date-format";
import { Weekday, type Week } from "./date-types";

import {
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getNextDay,
  getPreviousDay,
} from "./date-modifiers";

/**
 * Get all the days of the month.
 */
export const getDaysOfMonth = (date: Date): Date[] => {
  const days: Date[] = [];

  let day = getFirstDayOfMonth(date);

  while (day.getMonth() === date.getMonth()) {
    days.push(day);
    day = getNextDay(day);
  }

  return days;
};

/**
 * Get all the days of the month,
 * with filler days before and after,
 * for a monthly calendar view.
 */
export const getDaysOfCalendarMonth = (date: Date, startOfWeek: Weekday): Date[] => {
  const days = getDaysOfMonth(date);

  const { daysBefore, daysAfter } = beforeAndAfterMonth(date, startOfWeek);

  return [...daysBefore, ...days, ...daysAfter];
};

/**
 * Will split the input into arrays with 7 items,
 * and provide the week number based on the first day in that array.
 *
 * @caveat
 * Does not check that the dates are actually within the correct week,
 * it expects you have the necessary dates in the right order.
 */
export const splitDaysIntoWeeks = (days: Date[]): Week[] => {
  const weeks: Date[][] = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks.map((days) => ({
    days,
    number: getWeekNumber(days[days.length - 1]!),
  }));
};

/**
 * Adds missing days necessary
 * to create a calendar grid.
 */
const beforeAndAfterMonth = (date: Date, startOfWeek: Weekday) => {
  const firstOfMonth = getFirstDayOfMonth(date);
  const firstDayOfMonth = firstOfMonth.getDay() === 0 ? 7 : firstOfMonth.getDay();

  const lastOfMonth = getLastDayOfMonth(date);
  const lastDayOfMonth = lastOfMonth.getDay() === 0 ? 7 : lastOfMonth.getDay();
  const lastOfWeek = startOfWeek === Weekday.Monday ? 7 : startOfWeek - 1;

  const daysBefore: Date[] = [];
  const daysAfter: Date[] = [];

  let daysBeforeCount = (7 - startOfWeek + firstDayOfMonth) % 7;
  let dayBefore = getPreviousDay(firstOfMonth);

  while (daysBeforeCount > 0) {
    daysBefore.push(dayBefore);

    dayBefore = getPreviousDay(dayBefore);
    daysBeforeCount -= 1;
  }

  daysBefore.reverse();

  let daysAfterCount = (7 - lastDayOfMonth + lastOfWeek) % 7;
  let dayAfter = getNextDay(lastOfMonth);

  while (daysAfterCount > 0) {
    daysAfter.push(dayAfter);

    dayAfter = getNextDay(dayAfter);
    daysAfterCount -= 1;
  }

  return {
    daysBefore,
    daysAfter,
  };
};
