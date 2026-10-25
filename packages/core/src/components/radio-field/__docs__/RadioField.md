---
title: "Radio Field"
slug: "/f/radio-field"
description: "Pick one of a few options."
illustration: "radio-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import RadioFieldSandbox from './RadioField.sandbox.vue';

  import Guidelines from './RadioField.guidelines.md';
  import API from './RadioField.api.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
  };
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<RadioFieldSandbox title="Radio Field" />

<Do11yTabs :tabs="tabs" />
