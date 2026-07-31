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
  moveRelatively(relativeIndex: number): "forwards" | "backwards" | undefined;

  /**
   * Move to the first (`start`)
   * or last (`end`) element.
   */
  moveToEdge(edge: "start" | "end"): void;

  /**
   * Move page by page, until there is no more pages.
   */
  moveByPages(pages: number, elementsPerPage: number): void;
}

export const useNavigableElements = (options: NavigableElementsOptions): NavigableElements => {
  const move = (
    direction: "forwards" | "backwards",
    getNextIndex: (index: number, length: number) => number,
    customFallback = false,
  ) => {
    const { getElements, moveTo, isMovedTo } = options;

    const elements = getElements();

    const index = elements.findIndex((e) => isMovedTo(e));

    let nextIndex = getNextIndex(index, elements.length);

    let element = elements[nextIndex];

    const newIndex = direction === "forwards" ? nextIndex++ : nextIndex--;

    if (newIndex < 0) {
      return customFallback ? "backwards" : moveToEdge("start");
    } else if (newIndex > elements.length - 1) {
      return customFallback ? "forwards" : moveToEdge("end");
    }

    element = elements[newIndex];

    if (element) {
      moveTo(element, elements[index]);
    }
  };

  const moveRelatively = (relativeIndex: number | 10 | 1 | -1 | -10, customFallback = false) => {
    const direction = relativeIndex > 0 ? "forwards" : "backwards";

    return move(direction, (index) => index + relativeIndex, customFallback);
  };

  const moveToEdge = (edge: "start" | "end"): undefined => {
    const direction = edge === "start" ? "forwards" : "backwards";

    move(direction, (_, length) => {
      return edge === "start" ? 0 : length - 1;
    });
  };

  const moveByPages = (pages: number, elementsPerPage: number) => {
    const newIndex = pages * elementsPerPage;

    const result = moveRelatively(newIndex, true);

    if (result && pages !== 0) {
      moveByPages(result === "forwards" ? pages - 1 : pages + 1, elementsPerPage);
    }
  };

  return {
    moveRelatively,
    moveToEdge,
    moveByPages,
  };
};
