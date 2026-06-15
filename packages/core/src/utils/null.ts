export type Nullable<T> = T | null | undefined;

/**
 * Checks if a value is `null` or `undefined`.
 */
export const isNullish = <T>(value: Nullable<T>): value is null | undefined => {
  return value === null || value === undefined;
};
