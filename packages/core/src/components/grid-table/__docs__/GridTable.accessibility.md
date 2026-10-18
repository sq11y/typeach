## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support, mostly.
- ARIA roles.

</template>

<template v-slot:dont>

- Ensure headings have an [accessible label](/p/accessible-labels), even if there is no _visible_ label.

---

- Ensure that when a cell gains focus - focus is moved to the control in it.
- If there are controls with conflicting keyboard support, you have to find a workaround. For example a text field - which also uses <kbd>Arrow left</kbd> and <kbd>Arrow right</kbd> - might need to an extra activation step for keyboards to interact with it.

</template>

<template v-slot:consider>

- If there are repetitive controls for each row - provide a unique label for each of them.
- Recognize when a row heading cell should be used. Some assistive technology will announce the heading when you navigate to a row. If there is no heading, it will use a counter: "Row 1", "Row 2" and so on, which is fine if there are genuienly no row headings, but if your table has a clear "Title" column, it should be marked as such.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The table should still _look_ like a table.

</template>

</Do11yDoDont>

## Keyboard support

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

## Implementation

The grid table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with an [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role).
