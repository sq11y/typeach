## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:do>

- Loading indicated with `aria-busy`.
- Remains tabbable even when disabled, unless explicitly opted out.
- Communicates keyboard shortcuts using `aria-keyshortcuts`.

</template>

<template v-slot:dont>

- Ensure the button has an accessible label.

</template>

</Do11yDoDont>

## Implementation

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button remains tabbable even when disabled, using `aria-disabled`. If you need it out of the tab order - you can set the `disabled` prop to `"without-focus"`.

The button uses `aria-busy` to indicate loading and `aria-keyshortcuts` to indicate what available keyboard shortcuts there are.
