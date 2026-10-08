---
title: "Switch Field"
alternativeTitles: ["Toggle"]
slug: "/f/switch-field"
description: "Toggles an option."
illustration: "switch-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import SwitchFieldSandbox from './SwitchField.sandbox.vue';

  import Guidelines from './SwitchField.guidelines.md';
  import API from './SwitchField.api.md';
  import Accessibility from './SwitchField.accessibility.md';

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

<SwitchFieldSandbox title="Switch Field" />

<Do11yTabs :tabs="tabs" />
