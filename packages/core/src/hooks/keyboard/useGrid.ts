import type { InjectionKey } from "vue";

import { isHtmlElement } from "../../utils";

import type { Elements } from "../useElements";

import { useSingleTabStop } from "./useSingleTabStop";

export interface Grid {
  /**
   * The `onKeydown` event you should apply to
   * each cell in the grid.
   */
  onKeyDown(rowId: string, event: KeyboardEvent): void;
}

export const GridKey: InjectionKey<Grid> = Symbol("grid");

export const useGrid = (getElements: Elements["getElements"]): Grid => {
  const { moveRelatively, moveToEdge, moveTo } = useSingleTabStop(getElements);

  return {
    onKeyDown(rowId, event) {
      const keys = [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];

      if (!isHtmlElement(event.target)) {
        return;
      }

      if (keys.includes(event.key)) {
        event.preventDefault();
      }

      const row = getElements().filter((e) => e.matches(`[data-elements-${rowId}="true"]`));

      const [firstCell, lastCell] = [row[0], row[row.length - 1]];

      const cell = event.target.closest(`[data-elements-${rowId}="true"]`);

      switch (event.key) {
        case "ArrowLeft":
          if (!firstCell?.isSameNode(cell)) {
            moveRelatively?.(-1);
          }

          break;

        case "ArrowRight":
          if (!lastCell?.isSameNode(cell)) {
            moveRelatively?.(1);
          }

          break;

        case "ArrowUp":
          return moveRelatively(row.length * -1);

        case "ArrowDown":
          return moveRelatively(row.length);

        case "PageUp":
          return moveRelatively?.(row.length * -10);

        case "PageDown":
          return moveRelatively?.(row.length * 10);

        case "Home":
          if (event.ctrlKey) {
            moveToEdge("start");
          } else if (firstCell) {
            moveTo(firstCell);
          }

          break;

        case "End":
          if (event.ctrlKey) {
            moveToEdge("end");
          } else if (lastCell) {
            moveTo(lastCell);
          }

          break;

        default:
          break;
      }
    },
  };
};
