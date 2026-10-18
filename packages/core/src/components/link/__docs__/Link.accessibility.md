## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:do>

- Keyboard support.

</template>

<template v-slot:dont>

- Add an [accessible label](/p/accessible-labels), even if there is no _visible_ label.

---

- Ensure the link has sufficient contrast.
- If the link is only indicated using text color - ensure it has [sufficient contrast to the text surrounding it and the background](https://webaim.org/resources/linkcontrastchecker/).
- Ensure the link has a clear focus indicator.

---

- Reduce animations and transitions for users who [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

</template>

<template v-slot:consider>

- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The link should still _look_ like a link.

</template>

</Do11yDoDont>

## Implementation

The link extends the [HTML a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), meaning it is part of the tab order depending on the user's device and browser settings and can be activated with <kbd>Enter</kbd>.
