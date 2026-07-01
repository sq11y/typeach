---
title: "Download link"
slug: "/c/download-link"
description: "Download content."
illustration: "download-link.png"
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

## API reference

### Download link

<Do11yMeta :meta="DownloadLinkMeta" />

## Accessibility

The link extends the [HTML a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), meaning it is part of the tab order and can be activated with <kbd>Enter</kbd>.
