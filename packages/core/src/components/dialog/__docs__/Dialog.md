---
title: "Dialog"
alternativeTitles: ["Modal", "Alert"]
slug: "/c/dialog"
description: "A demanding popover."
illustration: "dialog.png"
color: "turquoise"
---

<script setup>
  import { useRoute } from 'vue-router';

  import DialogSandbox from './Dialog.sandbox.vue';

  import Guidelines from './Dialog.guidelines.md';
  import API from './Dialog.api.md';
  import Accessibility from './Dialog.accessibility.md';

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

<DialogSandbox title="Dialog" block-size="35rem" />

<Do11yTabs :tabs="tabs" />
