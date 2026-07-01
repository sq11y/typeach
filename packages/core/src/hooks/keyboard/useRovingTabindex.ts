import { toValue, type InjectionKey, type MaybeRefOrGetter } from "vue";

import { useSingleTabStop, type SingleTabStop } from "./useSingleTabStop";

import type { Elements } from "../useElements";

import type { Orientation } from "../../utils";

export interface RovingTabindex extends SingleTabStop {
  /**
   * The `onKeydown` event you should
   * apply to the elements.
   */
  onKeyDown(event: KeyboardEvent): void;
}

/* prettier-ignore */
export const RovingTabindexKey: InjectionKey<Pick<RovingTabindex, "onKeyDown">> = Symbol("roving-tabindex");

export const useRovingTabindex = (
  orientation: MaybeRefOrGetter<Orientation>,
  getElements: Elements["getElements"],
): RovingTabindex => {
  const { moveTo, moveRelatively, moveToEdge } = useSingleTabStop(getElements);

  return {
    moveTo,
    moveRelatively,
    moveToEdge,

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
          return moveRelatively(-1);

        case next:
          return moveRelatively(1);

        case "PageUp":
          return moveRelatively(-10);

        case "PageDown":
          return moveRelatively(10);

        case "Home":
          return moveToEdge("start");

        case "End":
          return moveToEdge("end");

        default:
          throw new Error(`Invalid event ${event.key}`);
      }
    },
  };
};
