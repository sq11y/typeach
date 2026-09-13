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
  import TextareaFieldInputMeta from '../TextareaFieldInput.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TextareaFieldSandbox title="Textarea Field" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You need a long free-form text input.

</template>

<template v-slot:dont>

- The value should be short and concise, use [Text Field](/f/text-field).

</template>

</Do11yDoDont>

## API

### Input

<Do11yMeta :meta="TextareaFieldInputMeta" />
