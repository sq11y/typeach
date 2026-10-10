---
title: "Textarea Field"
slug: "/f/textarea-field"
description: "Input for multiline text."
illustration: "textarea-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import TextareaFieldSandbox from './TextareaField.sandbox.vue';

  import Guidelines from './TextareaField.guidelines.md';
  import API from './TextareaField.api.md';

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

<TextareaFieldSandbox title="Textarea Field" block-size="24rem" />

<Do11yTabs :tabs="tabs" />
