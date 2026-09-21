export enum Move {
  Forward = 1,
  Backward,

  JumpForward,
  JumpBackward,

  End,
  Start,
}

export const Moves = [
  Move.Forward,
  Move.Backward,
  Move.JumpForward,
  Move.JumpBackward,
  Move.End,
  Move.Start,
] as const;

export enum PageMove {
  Forward = 1,
  Backward,
}

/* prettier-ignore */
export const PageMoves = [
  PageMove.Forward,
  PageMove.Backward,
] as const;

export const isMove = <T>(move: Move | T): move is Move => {
  return Moves.includes(move as Move);
};

export const isPageMove = <T>(move: PageMove | T): move is PageMove => {
  return PageMoves.includes(move as PageMove);
};

/**
 * Get the next index in a list based on a pre-determined move.
 */
export const navigateList = (i: number, move: Move, max: number) => {
  switch (move) {
    case Move.Forward:
      return Math.min(i + 1, max);

    case Move.Backward:
      return Math.max(i - 1, 0);

    case Move.JumpForward:
      return Math.min(i + 10, max);

    case Move.JumpBackward:
      return Math.max(i - 10, 0);

    case Move.End:
      return max;

    case Move.Start:
      return 0;

    default:
      return i;
  }
};

/**
 * Get the next index in a list page by page, until there is no more pages.
 *
 * The difference from the other navigation functions is that this will _only_
 * navigate in a multiplier of the page size. For example:
 *   - The list has 5 items and is currently on index 0.
 *   - You try to navigate 3 pages with a size of 2.
 *   = You end up on item 4, instead of 5.
 */
/* prettier-ignore */
export const navigateListByPage = (i: number, move: PageMove, max: number, pages: number, size = 10) => {
  const isMovingForwards = move === PageMove.Forward;

  for (let p = pages; isMovingForwards ? p > 0 : p < 0; isMovingForwards ? p-- : p++) {
    const newIndex = i + p * size;

    if (newIndex >= 0 && newIndex <= max) {
      return newIndex;
    }
  }

  return i;
};

/**
 * Get the relative index in a list.
 */
export const navigateListCustom = (i: number, move: number, max: number) => {
  return Math.max(Math.min(i + move, max), 0);
};
