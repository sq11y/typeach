## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.
- Communicates keyboard shortcuts to trigger the button with `aria-keyshortcuts`.
- Announces changes to the content of the button using a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions).

</template>

<template v-slot:dont>

- Add an [accessible label](/p/accessible-labels), even if there is no _visible_ label.
- Change the accessible label when `isCopying` is `true` to indicate a successful copy.
- Avoid `aria-label` or `aria-labelledby`, use visually hidden text - the live region looks for changes to the _content_ of the button, not the button itself.

---

- Ensure the button has sufficient contrast.
- Make the button bigger than `24px` by `24px`.
- Ensure the button has a clear focus indicator.

---

- Reduce animations and transitions for users who [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

</template>

<template v-slot:consider>

- Make the button bigger than `44px` by `44px`.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The button should still _look_ like a button.

</template>

</Do11yDoDont>

## Implementation

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button uses a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) to announce when the copying is complete.
