import { toValue, type InjectionKey, type MaybeRefOrGetter } from "vue";

import { useSingleTabStop, type SingleTabStop } from "./useSingleTabStop";

import type { Elements } from "../useElements";

import type { Orientation } from "../../utils";

import { Move } from "../../hooks";

export interface RovingTabindex extends SingleTabStop {
  /**
   * The `onKeydown` event you should
   * apply to the elements.
   */
  onKeyDown: (event: KeyboardEvent) => void;
}

export const RovingTabindexKey: InjectionKey<RovingTabindex> = Symbol("roving-tabindex");

/**
 * Helps with roving tabindex.
 */
export const useRovingTabindex = (
  orientation: MaybeRefOrGetter<Orientation>,
  getElements: Elements["getElements"],
): RovingTabindex => {
  /* prettier-ignore */
  const {
    navigate,
    navigateByPage,
    navigateCustom,
    navigateTo,
    getCurrentTabStop
  } = useSingleTabStop(getElements);

  return {
    navigate,
    navigateByPage,
    navigateCustom,
    navigateTo,
    getCurrentTabStop,

    onKeyDown(event: KeyboardEvent) {
      const vertical = toValue(orientation) === "vertical";

      const previous = vertical ? "ArrowUp" : "ArrowLeft";

      const next = vertical ? "ArrowDown" : "ArrowRight";

      const keys = [next, previous, "PageUp", "PageDown", "Home", "End"];

      if (keys.includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case previous:
          return navigate(Move.Backward);

        case next:
          return navigate(Move.Forward);

        case "PageUp":
          return navigateCustom(-10);

        case "PageDown":
          return navigateCustom(10);

        case "Home":
          return navigate(Move.Start);

        case "End":
          return navigate(Move.End);

        default:
          return;
      }
    },
  };
};
