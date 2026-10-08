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

  import Guidelines from './CopyButton.guidelines.md';
  import API from './CopyButton.api.md';
  import Accessibility from './CopyButton.accessibility.md';

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

<CopyButtonSandbox title="Copy button" />

<Do11yTabs :tabs="tabs" />
