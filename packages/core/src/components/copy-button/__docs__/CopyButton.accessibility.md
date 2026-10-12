## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:do>

- Announces changes to the label using a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions), unless explicitly opted out.
- Communicates keyboard shortcuts using `aria-keyshortcuts`.

</template>

<template v-slot:dont>

- Ensure the button has an accessible label.
- Ensure the label changes when `isCopying` is `true`.

</template>

</Do11yDoDont>

## Implementation

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button uses a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) to announce when the copying is complete.
