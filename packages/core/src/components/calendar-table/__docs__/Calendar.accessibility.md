## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.
- ARIA roles.
- Indication of the currently seleted item with `aria-pressed`.
- Indication of the current date with `aria-current`.

</template>

<template v-slot:dont>

- Ensure each date has a clear [accessible label](/p/accessible-labels). Though you might visually show "28", the accessible label should state the full date like for example "28th of June, Saturday, 1969".
- If adding week numbers - though you might visually show "26", the accessible label should provide the context like for example "26 (Week)".

</template>

<template v-slot:consider>

- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The calendar should still _look_ like a calendar, and states such as when a date is the current date or selected, should be communicated clearly.

</template>

</Do11yDoDont>

## Keyboard support

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

## Implementation

The calendar extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with an [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Every cell has a button inside of it with the attributes `aria-pressed` and `aria-current`, to indicate if a date is selected and if it's the current date.
