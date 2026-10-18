## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.
- ARIA roles.

</template>

<template v-slot:dont>

- Add an [accessible label](/p/accessible-labels) to each tab and it's associated action buttons, even if there is no _visible_ label. The label for an action button should indicate which tab it belongs to.

---

- Ensure sufficient contrast.
- Avoid relying on color alone to communicate disabled tabs or action buttons.
- Make tabs and action buttons bigger than `24px` by `24px`.
- Ensure tabs and action buttons have clear focus indicators.

---

- Reduce animations and transitions for users who [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

</template>

<template v-slot:consider>

- Avoid disabled action buttons. If a tab does not have the action - remove the button.
- Decide if it's best for [selection to follow focus or not](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_selection_follows_focus), which is usually recommended if the content loads almost instantly.
- Make tabs and action buttons bigger than `44px` by `44px`.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The tabs should still _look_ like tabs, the action buttons should still _look_ like buttons, and they should all properly communicate when they are disabled.

</template>

</Do11yDoDont>

## Keyboard support

Only one of the tabs remain in the tab order - starting with the first enabled tab and then it switches to the last tab the user navigated to.

Action buttons are kept out of the tab order until the associated tab is active, in which case you have to disable it `
without-focus"` to take it out of the tab order.

| Key                                            | Action                                                                        |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| <kbd>Arrow left</kbd> / <kbd>Arrow up</kbd>    | Moves to the previous tab.                                                    |
| <kbd>Arrow right</kbd> / <kbd>Arrow down</kbd> | Moves to the next tab.                                                        |
| <kbd>PageUp</kbd>                              | Moves to the 10th tab before. If there isn't one - it moves to the first tab. |
| <kbd>PageDown</kbd>                            | Moves to the 10th tab after. If there isn't one - it moves to the last tab.   |
| <kbd>Home</kbd>                                | Moves to the first tab.                                                       |
| <kbd>End</kbd>                                 | Moves to the last tab.                                                        |

## Implementation

The tabslist extends a generic element with an [ARIA tablist role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), where every tab is a [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) extended with the [ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Each panel is a generic element with the [ARIA tabpanel role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role).

The orientation of the tablist is declared with `aria-orientation`.

The tabs use `aria-controls` to indicate which panel it controls, and `aria-selected` to indicate which tab is currently active.

Both disabled tabs and action buttons are indicated with `aria-disabled`.
