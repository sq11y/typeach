---
title: "Tabs"
slug: "/c/tabs"
description: "Switches between content."
illustration: "tabs.png"
color: "turquoise"
---

<script setup>
  import { useRoute } from 'vue-router';

  import TabsSandbox from './Tabs.sandbox.vue';

  import Guidelines from './Tabs.guidelines.md';
  import API from './Tabs.api.md';
  import Accessibility from './Tabs.accessibility.md';

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

<TabsSandbox title="Tabs" block-size="22rem" />

<Do11yTabs :tabs="tabs" />
