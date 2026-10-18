## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:do>

- Keyboard support.
- ARIA roles.
- Communicates keyboard shortcuts to open the disclosure with `aria-keyshortcuts`.
- Disabled state indicated with `"aria-disabled"`.
- Loading indicated with `aria-busy`.

</template>

<template v-slot:dont>

- Add an [accessible label](/p/accessible-labels) to the button, even if there is no _visible_ label.

---

- Ensure sufficient contrast.
- Avoid relying on color alone to communicate when the button is disabled.
- Make the button bigger than `24px` by `24px`.
- Ensure the button has a clear focus indicator.

---

- Reduce animations and transitions for users who [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

</template>

<template v-slot:consider>

- Avoid disabled buttons. If the content for the disclosure is not available - change the content of it to explain _why_ or where else you might find it.
- Make the button bigger than `44px` by `44px`.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The button should still _look_ like a button and properly communicate if it's disabled.

</template>

</Do11yDoDont>

## Implementation

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button remains tabbable even when disabled, using `aria-disabled`. If you need it out of the tab order - you can set the `disabled` prop to `"without-focus"`.

The button uses `aria-busy` to indicate loading and `aria-keyshortcuts` to indicate what available keyboard shortcuts there are.
