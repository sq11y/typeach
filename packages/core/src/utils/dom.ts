import type { ComputedRef, TemplateRef } from "vue";

import { isNullish } from "./null";

export type ElementRef =
  | TemplateRef<HTMLElement | undefined>
  | ComputedRef<HTMLElement | undefined>;

/**
 * Checks if an element is disabled.
 * Checks `disabled`, `aria-disabled` and the dataset.
 */
export const isDisabledElement = (el: HTMLElement): boolean => {
  const { disabled } = el.dataset;

  return (
    el.hasAttribute("disabled") ||
    el.getAttribute("aria-disabled") === "true" ||
    (!isNullish(disabled) && disabled !== "")
  );
};
