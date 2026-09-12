---
title: "Download link"
slug: "/c/download-link"
description: "Downloads content."
illustration: "download-link.png"
color: "blue"
---

<script setup>
  import { useRoute } from 'vue-router';

  import DownloadLinkSandbox from './DownloadLink.sandbox.vue';
  import DownloadLinkMeta from '../DownloadLink.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<DownloadLinkSandbox title="Download link" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Downloading content instantly.

</template>

<template v-slot:dont>

- Downloading content with a significant loading time, use [Button](/c/button).

</template>

</Do11yDoDont>

## API

### Download link

<Do11yMeta :meta="DownloadLinkMeta" />

## Accessibility

The link extends the [HTML a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), meaning it is part of the tab order depending on the user's device and browser settings and can be activated with <kbd>Enter</kbd>.
