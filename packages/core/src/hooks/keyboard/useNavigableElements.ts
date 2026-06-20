import { toValue, type MaybeRefOrGetter } from "vue";

import type { Elements } from "../useElements";

export type NavigableElementsOptions = {
  /**
   * A function that returns
   * the relevant elements.
   */
  getElements: Elements["getElements"];

  /**
   * What should happen when moving
   * to the matching element?
   */
  moveTo(element: HTMLElement, previousElement?: HTMLElement): void;

  /**
   * How can we know if the element
   * is the one currently moved to?
   */
  isMovedTo(element: HTMLElement): boolean;
};

export interface NavigableElements {
  /**
   * Move relative to the
   * currently moved to element.
   */
  moveRelatively(relativeIndex: number): void;

  /**
   * Move to the first (`start`)
   * or last (`end`) element.
   */
  moveToEdge(edge: "start" | "end"): void;
}

export const useNavigableElements = (
  options: MaybeRefOrGetter<NavigableElementsOptions>,
): NavigableElements => {
  const move = (
    direction: "forwards" | "backwards",
    getNextIndex: (index: number, length: number) => number,
  ) => {
    const { getElements, moveTo, isMovedTo } = toValue(options);

    const elements = getElements();

    const index = elements.findIndex((e) => isMovedTo(e));

    let nextIndex = getNextIndex(index, elements.length);

    let element = elements[nextIndex];

    element = elements[direction === "forwards" ? nextIndex++ : nextIndex--];

    if (element) {
      moveTo(element, elements[index]);
    }
  };

  const moveRelatively = (relativeIndex: number | 10 | 1 | -1 | -10) => {
    const direction = relativeIndex > 0 ? "forwards" : "backwards";

    move(direction, (index) => {
      return index + relativeIndex;
    });
  };

  const moveToEdge = (edge: "start" | "end") => {
    const direction = edge === "start" ? "forwards" : "backwards";

    move(direction, (_, length) => {
      return edge === "start" ? 0 : length - 1;
    });
  };

  return {
    moveRelatively,
    moveToEdge,
  };
};
