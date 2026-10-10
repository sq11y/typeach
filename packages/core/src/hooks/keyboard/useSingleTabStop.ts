import { watch } from "vue";

import { isDisabledElement, isFocusedRovingTabindexElement } from "../../utils";

import { useElementNavigation, type ElementNavigation } from "./useElementNavigation";

import type { Elements } from "../useElements";

export interface SingleTabStop extends ElementNavigation {
  /**
   * Navigate directly to the element.
   */
  navigateTo: (element: HTMLElement) => void;

  /**
   * Get the currently tab stop.
   */
  getCurrentTabStop: () => HTMLElement | undefined;
}

/**
 * Helps ensure only one of the elements
 * are in the tab-order at a time.
 */
export const useSingleTabStop = (getElements: Elements["getElements"]): SingleTabStop => {
  const updateTabindex = (tabbable: HTMLElement | undefined, elements: HTMLElement[]) => {
    elements
      .filter((e) => !tabbable?.isSameNode(e))
      .forEach((e) => e.setAttribute("tabindex", "-1"));

    tabbable?.setAttribute("tabindex", "0");
  };

  const navigateTo = (element: HTMLElement) => {
    updateTabindex(element, getElements());
    element.focus();
  };

  watch(getElements, (newElements) => {
    let [firstElement] = newElements;

    const focusedElement = newElements.find((e) => e.matches(":focus"));

    if (!focusedElement && firstElement && isDisabledElement(firstElement)) {
      firstElement = newElements.find((element) => !isDisabledElement(element));
    }

    updateTabindex(focusedElement || firstElement, newElements);
  });

  const { navigate, navigateByPage, navigateCustom } = useElementNavigation({
    getElements,
    isNavigatedTo: isFocusedRovingTabindexElement,
    navigateTo,
  });

  return {
    navigateTo,
    navigate,
    navigateByPage,
    navigateCustom,

    getCurrentTabStop() {
      return getElements().find((element) => element.matches(":focus") || element.tabIndex === 0);
    },
  };
};
