The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button remains tabbable even when disabled, using `aria-disabled`. If you need it out of the tab order - you can set the `disabled` prop to `"without-focus"`.
