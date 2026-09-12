---
title: "Link"
slug: "/c/link"
description: "Navigates the user."
illustration: "link.png"
color: "blue"
---

<script setup>
  import { useRoute } from 'vue-router';

  import LinkSandbox from './Link.sandbox.vue';
  import LinkMeta from '../Link.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<LinkSandbox title="Link" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Navigating the user to another website, page or area on the page.

</template>

<template v-slot:dont>

- Performing an action, use [Button](/c/button).
- Downloading content instantly, use [Download link](/c/download-link).

</template>

</Do11yDoDont>

## API

### Link

<Do11yMeta :meta="LinkMeta" />

## Accessibility

The link extends the [HTML a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), meaning it is part of the tab order depending on the user's device and browser settings and can be activated with <kbd>Enter</kbd>.
