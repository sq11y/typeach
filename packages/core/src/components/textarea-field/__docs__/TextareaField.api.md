<script setup>
  import TextareaFieldMeta from '../TextareaField.vue?meta';
  import TextareaInputMeta from '../TextareaInput.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyTextareaField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachyTextareaInput />

    <PeachyFieldError v-if="error" />
  </PeachyTextField>
</template>
```

## Field

<Do11yMeta :meta="TextareaFieldMeta" />

## Input

<Do11yMeta :meta="TextareaInputMeta" />
