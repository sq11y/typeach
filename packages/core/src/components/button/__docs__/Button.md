---
title: "Button"
slug: "/c/button"
description: "Triggers an action."
illustration: "button.png"
color: "pink"
---

<script setup>
  import { useRoute, useRouter } from 'vue-router';

  import ButtonSandbox from './Button.sandbox.vue';
  import ButtonMeta from '../Button.vue?meta';

  const route = useRoute();

  const router = useRouter();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<ButtonSandbox title="Button" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Submitting a form.
- Calculating results.
- Starting a new process.

</template>

<template v-slot:dont>

- Navigating the user to another website, page or area on the page, use [Link](/c/link).
- Downloading content instantly, use [Download link](/c/download-link).
- Copying content, use [Copy button](/c/copy-button).

</template>

</Do11yDoDont>

### Disabled buttons

A disabled button can cause confusion as to why it has been disabled and how to enable it. Usually the more user-friendly alternative is to keep the button active and display an error message when the user clicks it. That way we avoid more guesswork for the user.

However, if you _must_..

<Do11yDoDont>

<template v-slot:do>

<img :src="`${router.options.history.base}/guidelines/button-disabled-good.png`" alt="" />

Use supporting text that stays visible when relevant to explain _why_ the button is disabled.

</template>

<template v-slot:dont>

<img :src="`${router.options.history.base}/guidelines/button-disabled-bad.png`" alt="" />

Use a hidden tooltip to explain why the button is disabled.

</template>

</Do11yDoDont>

#### Provide sufficient contrast

WCAG does not require sufficient contrast for disabled buttons, _however_ meaningful content content should be accessible to everyone. If your disabled button truly does not convey meaning, it is likely best not to show it at all.

## API

### Button

<Do11yMeta :meta="ButtonMeta" />

## Accessibility

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button remains tabbable even when disabled, using `aria-disabled`. If you need it out of the tab order - you can set the `disabled` prop to `"without-focus"` which will instead use the `disabled` attribute.
