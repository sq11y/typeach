## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:dont>

- Ensure the button and the close button have accessible labels.
- Ensure focus is not lost behind non-modal dialogs

</template>

</Do11yDoDont>

## Implementation

The dialog extends the [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog). If `modal` is set to `"alert"` it extends it with an [ARIA alertdialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role).

Focus is trapped inside the dialog when it is modal. When you open a dialog the first interactive element gains focus by default; you can choose which element to focus by using the `autofocus` attribute.
