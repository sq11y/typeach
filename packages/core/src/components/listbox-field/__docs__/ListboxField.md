---
title: "Listbox Field"
alternativeTitles: ["Select"]
slug: "/f/listbox-field"
description: "Pick from visible options."
illustration: "listbox-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ListboxFieldSandbox from './ListboxField.sandbox.vue';

  import Guidelines from './ListboxField.guidelines.md';
  import API from './ListboxField.api.md';
  import Accessibility from './ListboxField.accessibility.md';

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

<ListboxFieldSandbox title="Listbox field" block-size="46rem" />

<Do11yTabs :tabs="tabs" />
