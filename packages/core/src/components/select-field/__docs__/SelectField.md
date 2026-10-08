---
title: "Select Field"
slug: "/f/select-field"
description: "Pick options."
illustration: "select-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import SelectFieldSandbox from './SelectField.sandbox.vue';

  import Guidelines from './SelectField.guidelines.md';
  import API from './SelectField.api.md';
  import Accessibility from './SelectField.accessibility.md';

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

<SelectFieldSandbox title="Select Field" block-size="40rem" />

<Do11yTabs :tabs="tabs" />
