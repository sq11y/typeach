import { removeTimezoneOffset, getFirstDayOfYear } from "./date-modifiers";
import type { Weekday, Month } from "./date-types";

/**
 * Get a formatted version of the full date,
 * including day, month and year.
 */
export const formatDate = (date: Date, locale?: string): string => {
  return Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

/**
 * Get the number of the date.
 */
export const getDate = (date: Date): number => {
  return date.getDate();
};

/**
 * Get the weekday from the date.
 */
const getWeekday = (date: Date, locale?: string): string => {
  return Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
};

/**
 * Get the week number the date is part of.
 * @see https://stackoverflow.com/a/6117889
 */
export const getWeekNumber = (date: Date): number => {
  const updatedDate = new Date(date);

  updatedDate.setDate(updatedDate.getDate() + 4 - updatedDate.getDay());

  const firstDayOfYear = getFirstDayOfYear(date);

  return Math.floor(((+updatedDate - +firstDayOfYear) / 86400000 + 1) / 7);
};

/**
 * Get the number of the month.
 */
export const getMonth = (date: Date, locale?: string): Month => ({
  name: getNameOfMonth(date, locale),
  number: date.getMonth() + 1,
});

/**
 * Get the year for the date.
 */
export const getYear = (date: Date): number => {
  return date.getFullYear();
};

/**
 * Get the name of the weekdays, in order.
 */
export const getWeekdays = (startOfWeek: Weekday, locale?: string) => {
  const weekdays = Array.from({ length: 7 })
    .fill(undefined)
    .map((_, index) => ((startOfWeek + index) % 7) + 1);

  return weekdays.map((day) => {
    const input = new Date(`2006-01-0${day}`);
    return getWeekday(removeTimezoneOffset(input), locale);
  });
};

/**
 * Get the name of the month from a date.
 */
export const getNameOfMonth = (date: Date, locale?: string): string => {
  return Intl.DateTimeFormat(locale, { month: "long" }).format(date);
};

/**
 * Get the names of months in a year, in order.
 */
export const getMonths = (locale?: string): Month[] => {
  const months = Array.from({ length: 12 }).fill(undefined);

  return months.map((_, month) => {
    const date = new Date(`2006-${String(month + 1).padStart(2, "0")}-01`);
    return getMonth(date, locale);
  });
};
