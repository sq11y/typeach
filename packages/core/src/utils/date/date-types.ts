export type Week = {
  /**
   * The days in the week.
   */
  days: Date[];

  /**
   * The week number.
   */
  number: number;
};

export type Month = {
  /**
   * The localized name for the month.
   */
  name: string;

  /**
   * The number of the month.
   */
  number: number;
};

/**
 * A range for date.
 */
export type DateRange = {
  /**
   * The earlier date.
   */
  start: Date;

  /**
   * The later date.
   */
  end: Date;
};

/**
 * The index for a JS `day`.
 */
export enum Weekday {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}
