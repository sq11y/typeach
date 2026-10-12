## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:do>

- Indication of which tab is active with `aria-selected`.
- Action buttons are kept out of the tab order until the associated tab is active, in which case it's only tabbable unless explicitly opted out by setting `disabled` to `"without-focus"`.

</template>

<template v-slot:dont>

- Decide if it's best for the [selection to follow focus or not](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus).
- Ensure tabs and action buttons have accessible labels.
- Ensure the accessible label for each action button indicate which tab it belongs to.

</template>

</Do11yDoDont>

## Implementation

The tabslist extends a generic element with an [ARIA tablist role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), where every tab is a [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) extended with the [ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Each panel is a generic element with the [ARIA tabpanel role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role).

## Keyboard navigation

Only one of the tabs remain in the tab order - starting with the first enabled tab and then it switches to the last tab the user navigated to. Action buttons are kept out of the tab order until the associated tab is active, in which case it's only tabbable unless explicitly opted out by setting `disabled` to `"without-focus"`.

If the tabslist is horizontal <kbd>Arrow right</kbd> is replaced with <kbd>Arrow down</kbd>
and <kbd>Arrow left</kbd> with <kbd>Arrow up</kbd>.

<br />

| Key                    | Action                                                                        |
| ---------------------- | ----------------------------------------------------------------------------- |
| <kbd>Arrow left</kbd>  | Moves to the previous tab.                                                    |
| <kbd>Arrow right</kbd> | Moves to the next tab.                                                        |
| <kbd>PageUp</kbd>      | Moves to the 10th tab before. If there isn't one - it moves to the first tab. |
| <kbd>PageDown</kbd>    | Moves to the 10th tab after. If there isn't one - it moves to the last tab.   |
| <kbd>Home</kbd>        | Moves to the first tab.                                                       |
| <kbd>End</kbd>         | Moves to the last tab.                                                        |
