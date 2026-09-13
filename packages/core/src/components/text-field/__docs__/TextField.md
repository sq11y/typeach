---
title: "Text Field"
slug: "/f/text-field"
description: "Input for free text."
illustration: "text-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import TextFieldSandbox from './TextField.sandbox.vue';

  import TextFieldMeta from '../TextField.vue?meta';
  import TextFieldInputMeta from '../TextFieldInput.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TextFieldSandbox title="Text Field" />

## API

### Input

<Do11yMeta :meta="TextFieldInputMeta" />
