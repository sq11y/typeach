## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.
- Focus management, mostly.
- ARIA roles.

</template>

<template v-slot:dont>

- Ensure the button and the close button have [accessible labels](/p/accessible-labels), even if there are no _visible_ labels.

---

- Ensure sufficient contrast.
- Avoid relying on color alone to communicate that the buttons are disabled.
- Make both buttons bigger than `24px` by `24px`.
- Ensure both buttons have a clear focus indicator.

---

- Ensure focus is not lost behind non-modal dialogs.
- Reduce animations and transitions for users who [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

</template>

<template v-slot:consider>

- Consider what element in the dialog should be focused when you open the dialog. By default it will be the _first_ interactive element inside it, which is often the close button. It's recommended for it to be element the user most likely will want to interact with.
- Make both buttons bigger than `44px` by `44px`.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). Both buttons should still _look_ like buttons. It's also common for dialogs to use box-shadows instead of borders and to have a backdrop - both of which are removed in forced colors mode.

</template>

</Do11yDoDont>

## Implementation

The dialog extends the [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog). If `modal` is set to `"alert"` it extends it with an [ARIA alertdialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role). The heading and descriptions are associated through `aria-describedby` and `aria-labelledby`.

Focus is trapped inside the dialog when it is modal. When you open a dialog the first interactive element gains focus by default; you can choose which element to focus by using the `autofocus` attribute.

The button uses `aria-haspopup="dialog"` with `aria-expanded` to indicate if the dialog is currently open or not. It also uses `aria-disabled` to indicate if it's disabled.
