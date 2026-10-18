## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.
- ARIA roles.
- When used with [Field](/f/field) - associated label, descriptions and errors.
- If the listbox input is scrollable, options are scrolled into view when focused.

</template>

<template v-slot:dont>

- Add an accessible field label, indicating _what_ the items are selected for.
- Ensure the button has an accessible label, indicating _which_ items are selected.
- Ensure each option and group have an [accessible label](/p/accessible-labels), even if there is no _visible_ label.

---

- Ensure sufficient contrast.
- Avoid relying on color alone to communicate when an option is disabled or selected.
- Make the button and each option bigger than `24px` by `24px`.
- Ensure the button and each option has a clear focus indicator.

---

- If you add a scrollable element _between_ the listbox input and the options, you have to scroll the options into view when focused.

</template>

<template v-slot:consider>

- Ensure checkmarks are hidden from assistive technology to avoid repetition.
- Make the input and every option bigger than `44px` by `44px`.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The select should still _look_ like a select, and options should clearly communicate if they are disabled or selected.

</template>

</Do11yDoDont>

### Keyboard support

| Key                                  | Action                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| <kbd>Printable character</kbd>       | Moves to the next item with a label that starts with the typed characters.          |
| <kbd>Arrow up</kbd>                  | Moves to the previous option.                                                       |
| <kbd>Arrow down</kbd>                | Moves to the next option.                                                           |
| <kbd>PageUp</kbd>                    | Moves to the 10th option before. If there isn't one - it moves to the first option. |
| <kbd>PageDown</kbd>                  | Moves to the 10th option after. If there isn't one - it moves to the last option.   |
| <kbd>Home</kbd>                      | Moves to the first option.                                                          |
| <kbd>End</kbd>                       | Moves to the last option.                                                           |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Selects the current option.                                                         |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>       | Selects all options when `multiselect`.                                             |

## Implementation

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) with an [ARIA combobox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) with `aria-autocomplete="none"`.

It associates itself with the listbox through `aria-haspopup="listbox"` and `aria-controls`. It indicates the currently focused option with `aria-activedescendant` and whether it's open or not with `aria-expanded`.

The listbox extends a generic element with an [ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), and every option with an [ARIA option role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role). Each group get the [ARIA group role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) and a the labels have no semantic role but are associated with the group using `aria-labelledby`.
