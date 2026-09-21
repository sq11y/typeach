import type { ComputedRef, TemplateRef } from "vue";

import { isNullish, type Nullable } from "./null";

export type ElementRef =
  | TemplateRef<HTMLElement | undefined>
  | ComputedRef<HTMLElement | undefined>;

export type MaybeHtmlElement = Nullable<Node | Element | EventTarget>;

/**
 * Checks if a node, element or event target
 * is a HTML element.
 */
export const isHtmlElement = <T extends HTMLElement>(el: MaybeHtmlElement): el is T => {
  return el instanceof HTMLElement;
};

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

/**
 * Checks if an element or event target
 * is a HTML element, and is the active element.
 */
export const isFocusedHtmlElement = (el: MaybeHtmlElement): boolean => {
  return !isNullish(el) && el === document.activeElement;
};

/**
 * Checks if an element is the current or most recently
 * focused element according to the roving tabindex pattern.
 */
export const isFocusedRovingTabindexElement = (el: HTMLElement): boolean => {
  return isFocusedHtmlElement(el) || el.getAttribute("tabindex") === "0";
};

/**
 * Sort elements by the order they appear in the DOM.
 */
export const sortElementsByAppearance = (elements: HTMLElement[]): HTMLElement[] => {
  return [...elements].sort((a, b) => {
    return a === b ? 0 : a.compareDocumentPosition(b) & 2 ? 1 : -1;
  });
};

/**
 * Check if an element has block scroll.
 */
export const elementHasBlockScroll = (element: HTMLElement) => {
  return element.clientHeight < element.scrollHeight;
};

/**
 * Scroll a child element into the area.
 */
export const scrollElementIntoArea = (element: HTMLElement, area: HTMLElement) => {
  const { offsetHeight, offsetTop } = element;
  const { offsetHeight: parentOffsetHeight, scrollTop } = area;

  const isAbove = offsetTop < scrollTop;
  const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

  const scrollMarginBottom = getComputedStyle(element).scrollMarginTop || "0px";
  const scrollMarginTop = getComputedStyle(element).scrollMarginBottom || "0px";

  if (isAbove) {
    area.scrollTo(0, offsetTop - parseInt(scrollMarginTop));
  } else if (isBelow) {
    area.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight + parseInt(scrollMarginBottom));
  }
};
