import type { DateRange } from "./date-types";

/**
 * **Ensures** the start date is the _earlier_ date,
 * and the end date is the _later_ date.
 */
export const sortRange = (range: DateRange) => ({
  start: range.start < range.end ? range.start : range.end,
  end: range.start < range.end ? range.end : range.start,
});

/**
 * Check if the _date and time_ is within a range,
 * down to the the milliseconds.
 */
export const isDateTimeInRange = (date: Date, range: DateRange) => {
  const { start, end } = sortRange(range);

  return date >= start && date <= end;
};

/**
 * Check if the _date_ is within a range,
 * down to the date.
 */
export const isDateInRange = (date: Date, range: DateRange) => {
  const { start, end } = sortRange(range);

  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);

  return date >= start && date <= end;
};

/**
 * Check if two dates are the same.
 */
export const isSameDate = (comparerDate: Date, compareeDate: Date) =>
  comparerDate.getFullYear() === compareeDate.getFullYear() &&
  comparerDate.getMonth() === compareeDate.getMonth() &&
  comparerDate.getDate() === compareeDate.getDate();
