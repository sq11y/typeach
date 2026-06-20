---
title: "Download link"
slug: "/c/download-link"
description: "Download content."
---

<script setup>
  import { useRoute } from 'vue-router';

  import DownloadLinkSandbox from './DownloadLink.sandbox.vue';
  import DownloadLinkMeta from '../DownloadLink.vue?meta';

  const route = useRoute();
</script>

# {{ route.meta.title }}

<div class="description">
  {{ route.meta.description }}
</div>

<DownloadLinkSandbox title="Download link" />

## API reference

### Download link

<Do11yMeta :meta="DownloadLinkMeta" />
