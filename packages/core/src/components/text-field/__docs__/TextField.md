---
title: "Text Field"
slug: "/f/text-field"
description: "Input for text."
illustration: "text-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import TextFieldSandbox from './TextField.sandbox.vue';

  import Guidelines from './TextField.guidelines.md';
  import API from './TextField.api.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
  }
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TextFieldSandbox title="Text Field" />

<Do11yTabs :tabs="tabs" />
