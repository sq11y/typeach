---
title: "Disclosure"
alternativeTitles: ["Details", "Accordion", "Collapse", "Expandable"]
slug: "/c/disclosure"
description: "Toggles content."
illustration: "disclosure.png"
color: "turquoise"
---

<script setup>
  import { useRoute } from 'vue-router';

  import DisclosureSandbox from './Disclosure.sandbox.vue';

  import Guidelines from './Disclosure.guidelines.md';
  import API from './Disclosure.api.md';
  import Accessibility from './Disclosure.accessibility.md';

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

<DisclosureSandbox title="Disclosure" />

<Do11yTabs :tabs="tabs" />
