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

  import Guidelines from './DownloadLink.guidelines.md';
  import API from './DownloadLink.api.md';
  import Accessibility from './DownloadLink.accessibility.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
    Accessibility
  }
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<DownloadLinkSandbox title="Download link" />

<Do11yTabs :tabs="tabs" />
