## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:dont>

- If there are controls with conflicting keyboard navigation, you have to deal with it. This could for example mean adding an extra activation step for keyboard users and providing a way to end the control interaction, or for simpler cases it could mean just placing it last in the toolbar.

</template>

</Do11yDoDont>

## Implementation

The toolbar extends a generic element with an [ARIA toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role).

## Keyboard navigation

Only one of the controls remain in the tab order - starting with the first enabled control and then it switches to the last control the user navigated to.

If the toolbar is horizontal <kbd>Arrow down</kbd> is replaced with <kbd>Arrow right</kbd>
and <kbd>Arrow up</kbd> with <kbd>Arrow left</kbd>.

<br />

| Key                   | Action                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------- |
| <kbd>Arrow up</kbd>   | Moves to the previous control.                                                         |
| <kbd>Arrow down</kbd> | Moves to the next control.                                                             |
| <kbd>PageUp</kbd>     | Moves to the 10th controls before. If there isn't one - it moves to the first control. |
| <kbd>PageDown</kbd>   | Moves to the 10th controls after. If there isn't one - it moves to the last control.   |
| <kbd>Home</kbd>       | Moves to the first control.                                                            |
| <kbd>End</kbd>        | Moves to the last control.                                                             |
