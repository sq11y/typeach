The listbox extends a generic element with an [ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), and every option with an [ARIA option role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role). Each group get the [ARIA group role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) and a the labels have no semantic role but are associated with the group using `aria-labelledby`.

### Keyboard navigation

Only one of the options remain in the tab order - starting with the first option and then it switches to the last option the user navigated to.

| Key                                  | Action                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| <kbd>Printable character</kbd>       | Moves to the next item with a label that starts with the typed characters.          |
| <kbd>Arrow up</kbd>                  | Moves to the previous option.                                                       |
| <kbd>Arrow down</kbd>                | Moves to the next option.                                                           |
| <kbd>PageUp</kbd>                    | Moves to the 10th option before. If there isn't one - it moves to the first option. |
| <kbd>PageDown</kbd>                  | Moves to the 10th option after. If there isn't one - it moves to the last option.   |
| <kbd>Home</kbd>                      | Moves to the first option.                                                          |
| <kbd>End</kbd>                       | Moves to the last option.                                                           |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Toggles the current option.                                                         |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>       | Selects all options when `multiselect`.                                             |
