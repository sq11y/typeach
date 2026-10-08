---
title: "Toolbar"
slug: "/c/toolbar"
description: "Groups controls."
illustration: "toolbar.png"
color: "brown"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ToolbarSandbox from './Toolbar.sandbox.vue';

  import Guidelines from './Toolbar.guidelines.md';
  import API from './Toolbar.api.md';
  import Accessibility from './Toolbar.accessibility.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
    Accessibility
  };
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }} 
</div>

<ToolbarSandbox title="Toolbar" block-size="36rem" />

<Do11yTabs :tabs="tabs" />
