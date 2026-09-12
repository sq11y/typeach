---
title: "Copy button"
slug: "/c/copy-button"
description: "Copies content."
illustration: "copy-button.png"
color: "pink"
---

<script setup>
  import { useRoute } from 'vue-router';

  import CopyButtonSandbox from './CopyButton.sandbox.vue';
  import CopyButtonMeta from '../CopyButton.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<CopyButtonSandbox title="Copy button" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Copying content.

</template>

<template v-slot:dont>

- Downloading content instantly, use [Download link](/c/download-link).

</template>

</Do11yDoDont>

### Disabled buttons

The [guidelines for a disabled button](/c/button#guidelines) are relevant to the copy button too.

## API

### Copy button

<Do11yMeta :meta="CopyButtonMeta" />

## Accessibility

The copy button extends the <RouterLink to="/c/button">button component</RouterLink>, please refer to it's accessibility notes.
