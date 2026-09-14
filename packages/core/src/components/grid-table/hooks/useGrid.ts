import { isHtmlElement } from "../../../utils";

import { Move, type Elements, useSingleTabStop } from "../../../hooks";

export interface GridContext {
  /**
   * The `onKeydown` event you should apply to
   * each cell in the grid.
   */
  onKeyDown(rowId: string, event: KeyboardEvent): void;
}

export const useGrid = (getElements: Elements["getElements"]): GridContext => {
  const { navigate, navigateByPage, navigateCustom, navigateTo } = useSingleTabStop(getElements);

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
            navigateCustom(-1);
          }

          break;

        case "ArrowRight":
          if (!lastCell?.isSameNode(cell)) {
            navigateCustom(1);
          }

          break;

        case "ArrowUp":
          return navigateByPage(-1, row.length);

        case "ArrowDown":
          return navigateByPage(1, row.length);

        case "PageUp":
          return navigateByPage(-9, row.length);

        case "PageDown":
          return navigateByPage(9, row.length);

        case "Home":
          if (event.ctrlKey) {
            navigate(Move.Start);
          } else if (firstCell) {
            navigateTo(firstCell);
          }

          break;

        case "End":
          if (event.ctrlKey) {
            navigate(Move.End);
          } else if (lastCell) {
            navigateTo(lastCell);
          }

          break;

        default:
          break;
      }
    },
  };
};
