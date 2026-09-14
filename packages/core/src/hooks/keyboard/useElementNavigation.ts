import type { Elements } from "../useElements";

import { navigateList, navigateListByPage, navigateListCustom, PageMove, type Move } from "./utils";

export type ElementNavigationOptions = {
  /**
   * A function that returns the elements.
   */
  getElements: Elements["getElements"];

  /**
   * What should happen when navgating to an element?
   */
  navigateTo(element: HTMLElement, previousElement?: HTMLElement): void;

  /**
   * How can we know if the element is the one currently navigated to?
   */
  isNavigatedTo(element: HTMLElement): boolean;
};

export interface ElementNavigation {
  /**
   * Navigate.
   */
  navigate(move: Move): void;

  /**
   * Navigate page by page, until there is no more pages.
   */
  navigateByPage(pages: number, size: number): void;

  /**
   * Navigate relative to the current element.
   */
  navigateCustom(relativeIndex: number): void;
}

/**
 * Helps with navigating a list of elements.
 */
export const useElementNavigation = (options: ElementNavigationOptions): ElementNavigation => {
  const navigateToElement = (getNextIndex: (index: number, max: number) => number) => {
    const { getElements, navigateTo, isNavigatedTo } = options;

    const elements = getElements();

    const index = elements.findIndex((e) => isNavigatedTo(e));

    const newIndex = getNextIndex(index, elements.length - 1);

    let element = elements[newIndex];

    element = elements[newIndex];

    if (element) {
      navigateTo(element, elements[index]);
    }
  };

  return {
    navigate(move: Move) {
      return navigateToElement((index, max) => navigateList(index, move, max));
    },

    navigateByPage(pages, size) {
      return navigateToElement((index, max) => {
        const move = pages < 0 ? PageMove.Backward : PageMove.Forward;

        return navigateListByPage(index, move, max, pages, size);
      });
    },

    navigateCustom(relativeMove: number) {
      return navigateToElement((index, max) => navigateListCustom(index, relativeMove, max));
    },
  };
};
