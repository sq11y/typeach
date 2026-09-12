---
title: "Dialog"
slug: "/c/dialog"
description: "A demanding popover."
illustration: "dialog.png"
color: "turquoise"
---

<script setup>
  import { useRoute } from 'vue-router';

  import DialogSandbox from './Dialog.sandbox.vue';
  import DialogMeta from '../Dialog.vue?meta';
  import ButtonMeta from '../DialogButton.vue?meta';
  import PanelMeta from '../DialogPanel.vue?meta';
  import HeadingMeta from '../DialogHeading.vue?meta';
  import DescriptionMeta from '../DialogDescription.vue?meta';
  import CloseButtonMeta from '../DialogCloseButton.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<DialogSandbox title="Dialog" block-size="35rem" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want the user to focus on a specific task.
- There is an urgent decision to be made (`modal` to `"alert"`.).

</template>

<template v-slot:dont>

- The content requires _prolonged_ interaction or a step-by-step process, use a new page.

</template>

</Do11yDoDont>

## API

### Dialog

<Do11yMeta :meta="DialogMeta" />

### Button

<Do11yMeta :meta="ButtonMeta" />

### Panel

<Do11yMeta :meta="PanelMeta" />

### Heading

<Do11yMeta :meta="HeadingMeta" />

### Description

<Do11yMeta :meta="DescriptionMeta" />

### Close button

<Do11yMeta :meta="CloseButtonMeta" />

## Accessibility

The dialog extends the [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog). If `modal` is set to `"alert"` it extends it with an [ARIA alertdialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role).

Focus is trapped inside the dialog when it is modal. When you open a dialog the first interactive element gains focus by default; you can choose which element to focus by using the `autofocus` attribute.
