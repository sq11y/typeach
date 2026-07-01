import type { Weekday } from "./date-types";

/**
 * Add/remove days from a date.
 */
const getRelativeDate = (date: Date, days: number) => {
  const updatedDate = new Date(date);

  updatedDate.setDate(updatedDate.getDate() + days);

  return updatedDate;
};

/**
 * Add/remove months from a date.
 */
const getRelativeMonth = (date: Date, months: number) => {
  const updatedDate = new Date(date);

  updatedDate.setMonth(updatedDate.getMonth() + months);

  return updatedDate;
};

/**
 * Add/remove years from a date.
 */
const getRelativeYear = (date: Date, years: number) => {
  const dateCopy = new Date(date);

  dateCopy.setFullYear(dateCopy.getFullYear() + years);

  return dateCopy;
};

/**
 * Get the next day.
 */
export const getNextDay = (date: Date): Date => {
  return getRelativeDate(date, 1);
};

/**
 * Get the day before.
 */
export const getPreviousDay = (date: Date): Date => {
  return getRelativeDate(date, -1);
};

/**
 * Get the same day, next week.
 */
export const getNextWeek = (date: Date): Date => {
  return getRelativeDate(date, 7);
};

/**
 * Get the same day, last week.
 */
export const getPreviousWeek = (date: Date): Date => {
  return getRelativeDate(date, -7);
};

/**
 * Get the same day, next month.
 */
export const getNextMonth = (date: Date): Date => {
  return getRelativeMonth(date, 1);
};

/**
 * Get the same day, last month.
 */
export const getPreviousMonth = (date: Date): Date => {
  return getRelativeMonth(date, -1);
};

/**
 * Get the same day, next year.
 */
export const getNextYear = (date: Date): Date => {
  return getRelativeYear(date, 1);
};

/**
 * Get the same day, last year.
 */
export const getPreviousYear = (date: Date): Date => {
  return getRelativeYear(date, -1);
};

/**
 * Get the first day of the week.
 */
export const getFirstDayOfWeek = (date: Date, startOfWeek: Weekday): Date => {
  const updatedDate = new Date(date);

  const weekday: Weekday = updatedDate.getDay();

  const diff = weekday >= startOfWeek ? weekday - startOfWeek : 6 - weekday;

  updatedDate.setDate(updatedDate.getDate() - diff);

  return updatedDate;
};

/**
 * Get the last day of the week.
 */
export const getLastDayOfTheWeek = (date: Date, startOfWeek: Weekday): Date => {
  const updatedDate = getFirstDayOfWeek(date, startOfWeek);

  return getRelativeDate(updatedDate, 6);
};

/**
 * Get the first day of the month.
 */
export const getFirstDayOfMonth = (date: Date): Date => {
  const year = `${date.getFullYear()}`.padStart(4, "0");

  const month = `${date.getMonth() + 1}`.padStart(2, "0");

  const updatedDate = new Date(`${year}-${month}-01`);

  return removeTimezoneOffset(updatedDate);
};

/**
 * Get the last day of the month.
 */
export const getLastDayOfMonth = (date: Date): Date => {
  const updatedDate = getFirstDayOfMonth(date);

  updatedDate.setMonth(updatedDate.getMonth() + 1);
  updatedDate.setDate(updatedDate.getDate() - 1);

  return updatedDate;
};

/**
 * Get the first day of the year.
 */
export const getFirstDayOfYear = (date: Date): Date => {
  return new Date(date.getFullYear(), 0, 1);
};

/**
 * Get the last day of the year.
 */
export const getLastDayOfYear = (date: Date): Date => {
  return new Date(date.getFullYear(), 11, 31);
};

/**
 * Remove timezone offset.
 */
export const removeTimezoneOffset = (date: Date): Date => {
  const updatedDate = new Date(date);

  const offset = updatedDate.getTimezoneOffset();

  updatedDate.setMinutes(updatedDate.getMinutes() + offset);

  return updatedDate;
};
