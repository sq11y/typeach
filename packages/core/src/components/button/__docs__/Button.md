---
title: "Button"
slug: "/c/button"
description: "Trigger an action."
---

<script setup>
  import { useRoute } from 'vue-router';

  import ButtonSandbox from './Button.sandbox.vue';
  import ButtonMeta from '../Button.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<ButtonSandbox title="Button" />

## API reference

### Button

<Do11yMeta :meta="ButtonMeta" />

## Accessibility

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button), meaning it can be activated with <kbd>Enter</kbd> or <kbd>Space</kbd>. You can read more about the difference in activation in ["Brief Note on Buttons, Enter, and Space"](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html).

The button remains tabbable even when disabled, using `aria-disabled`. If you need it out of the tab order - you can set the `disabled` prop to `"without-focus"` which will instead use the `disabled` attribute.

### Labels

If you override the accessible label, you should put the visible text _first_. This makes it easier for people using voice control to activate the button.

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton aria-label="Bake 'Carrot Cake'">
    Bake
  </PeachyButton>
</template>
```

If there is no visible text, make sure to still provide an accessible label. You should avoid icon-only buttons when possible; even if people understand the _meaning_ of the icon used, hiding the label creates an extra step for people using voice control (unless they of course correctly guess the hidden label).

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton>
    <svg aria-hidden="true" />

    <PeachyVisuallyHiddenText>
      Bake 'Carrot Cake'
    </PeachyVisuallyHiddenText>
  </PeachyButton>
</template>
```

### Avoid disabled buttons

A disabled button can cause confusion as to why it has been disabled. If you must disable it, use supporting text (that stays visible when relevant, not just a tooltip!) to explain _why_ it's disabled.

Another point to consider - disabled controls are exempt from the WCAG requirement for sufficient contrast, so they are often difficult to read.

Usually the more user-friendly alternative is to keep the button active, and display an error message when the user clicks it. No guesswork.
