import { watch } from "vue";

import { isDisabledElement, isFocusedRovingTabindexElement } from "../../utils";

import { useNavigableElements, type NavigableElements } from "./useNavigableElements";

import type { Elements } from "../useElements";

export interface SingleTabStop extends NavigableElements {
  /**
   * Move directly to the element.
   */
  moveTo(element: HTMLElement): void;
}

export const useSingleTabStop = (getElements: Elements["getElements"]): SingleTabStop => {
  const updateTabindex = (tabbable: HTMLElement | undefined, elements: HTMLElement[]) => {
    elements
      .filter((e) => !tabbable?.isSameNode(e))
      .forEach((e) => e.setAttribute("tabindex", "-1"));

    tabbable?.setAttribute("tabindex", "0");
  };

  const moveTo = (element: HTMLElement) => {
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

  const { moveRelatively, moveToEdge } = useNavigableElements({
    getElements,
    isMovedTo: isFocusedRovingTabindexElement,
    moveTo,
  });

  return {
    moveTo,
    moveRelatively,
    moveToEdge,
  };
};
