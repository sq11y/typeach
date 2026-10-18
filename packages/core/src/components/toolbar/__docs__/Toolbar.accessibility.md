## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support for supported components: [Button](/c/button), [Copy button](/c/copy-button), [Disclosure](/c/disclosure), [Switch field](/f/switch-field), [Link](/c/link) and [Download link](/c/download-link).

</template>

<template v-slot:dont>

- If you want a custom component as part of the toolbar - you have to wire up the keyboard support. The API documentation provides a guide on how to do this.
- If there are controls with conflicting keyboard support, you have to find a workaround. For example a text field - which also uses <kbd>Arrow left</kbd> and <kbd>Arrow right</kbd> - might need to an extra activation step for keyboards to interact with it.

</template>

</Do11yDoDont>

## Keyboard support

Only one of the controls remain in the tab order - starting with the first enabled control and then it switches to the last control the user navigated to.

<br />

| Key                                            | Action                                                                                 |
| ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| <kbd>Arrow up</kbd> / <kbd>Arrow left</kbd>    | Moves to the previous control.                                                         |
| <kbd>Arrow down</kbd> / <kbd>Arrow right</kbd> | Moves to the next control.                                                             |
| <kbd>PageUp</kbd>                              | Moves to the 10th controls before. If there isn't one - it moves to the first control. |
| <kbd>PageDown</kbd>                            | Moves to the 10th controls after. If there isn't one - it moves to the last control.   |
| <kbd>Home</kbd>                                | Moves to the first control.                                                            |
| <kbd>End</kbd>                                 | Moves to the last control.                                                             |

## Implementation

The toolbar extends a generic element with an [ARIA toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) using `aria-orienation` to indicate it's orientation.

To create a relationship with the element the toolbar is for - `aria-controls` is used.
