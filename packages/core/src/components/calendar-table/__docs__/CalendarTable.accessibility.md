The calendar table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with an [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Every cell has a button inside of it with the attribute `aria-pressed` used to indicate when a date is selected.

## Keyboard navigation

Only one of the cell buttons remain in the tab order - the focused date - which will update as the user navigates.

| Key                                     | Moves..                               |
| --------------------------------------- | ------------------------------------- |
| <kbd>Arrow right</kbd>                  | To the next date.                     |
| <kbd>Arrow left</kbd>                   | To the previous date.                 |
| <kbd>Arrow up</kbd>                     | To the same day in the previous week. |
| <kbd>Arrow down</kbd>                   | To the same day in the next week.     |
| <kbd>Home</kbd>                         | To the first day of the week.         |
| <kbd>End</kbd>                          | To the last day of the week.          |
| <kbd>Home</kbd> + <kbd>Shift</kbd>      | To the first day of the month.        |
| <kbd>End</kbd> + <kbd>Shift</kbd>       | To the last day of the month.         |
| <kbd>Page up</kbd>                      | Back a month.                         |
| <kbd>Page down</kbd>                    | Forward a month.                      |
| <kbd>Page up</kbd> + <kbd>Shift</kbd>   | Back a year.                          |
| <kbd>Page down</kbd> + <kbd>Shift</kbd> | Forward a year.                       |
