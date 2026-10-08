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

  import Guidelines from './Link.guidelines.md';
  import API from './Link.api.md';
  import Accessibility from './Link.accessibility.md';

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

<LinkSandbox title="Link" />

<Do11yTabs :tabs="tabs" />
