## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:dont>

- Ensure that when a cell gains focus - the focus is moved to the control.
- If there are controls with conflicting keyboard navigation, you have to deal with it. This could for example mean adding an extra activation step for keyboard users and providing a way to end the control interaction.

</template>

</Do11yDoDont>

## Implementation

The grid table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with an [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role).

## Keyboard navigation

Only one of the cells remain in the tab order - starting with the first cell and once the user navigates the table, the last focused cell will be in the tab order.

When a cell with a control inside of it gains focus - you should move the focus to the control.

| Key                               | Moves to..                         |
| --------------------------------- | ---------------------------------- |
| <kbd>Arrow right</kbd>            | The previous cell in the row.      |
| <kbd>Arrow left</kbd>             | The next cell in the row.          |
| <kbd>Arrow up</kbd>               | The same cell in the previous row. |
| <kbd>Arrow down</kbd>             | The same cell in the next row.     |
| <kbd>Home</kbd>                   | The first cell in the row.         |
| <kbd>End</kbd>                    | The last cell in the row.          |
| <kbd>Home</kbd> + <kbd>Ctrl</kbd> | The first cell in the table.       |
| <kbd>End</kbd> + <kbd>Ctrl</kbd>  | The last cell in the table.        |
| <kbd>Page up</kbd>                | The same cell 10 rows up.          |
| <kbd>Page down</kbd>              | The same cell 10 rows down.        |
