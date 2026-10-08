---
title: "Combobox Field"
alternativeTitles: ["Select"]
slug: "/f/combobox-field"
description: "Filter and pick options."
illustration: "combobox-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ComboboxFieldSandbox from './ComboboxField.sandbox.vue';

  import Guidelines from './ComboboxField.guidelines.md';
  import API from './ComboboxField.api.md';
  import Accessibility from './ComboboxField.accessibility.md';

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

<ComboboxFieldSandbox title="Combobox Field" block-size="40rem" />

<Do11yTabs :tabs="tabs" />
