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
  import TextFieldInputMeta from '../TextFieldInput.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TextFieldSandbox title="Text Field" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- The text is unique and won't come from a dataset.

</template>

<template v-slot:dont>

- The user would benefit from seeing a list of options to pick from, use a select or combobox.
- You want a longer input or the text could benefit from being multiline, use [Textarea Field](/f/textarea-field).

</template>

</Do11yDoDont>

## API

### Input

<Do11yMeta :meta="TextFieldInputMeta" />
