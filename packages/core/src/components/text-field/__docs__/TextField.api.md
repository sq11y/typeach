<script setup>
  import TextFieldMeta from '../TextField.vue?meta';
  import TextInputMeta from '../TextInput.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyTextField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachyTextInput />

    <PeachyFieldError v-if="error" />
  </PeachyTextField>
</template>
```

## Field

<Do11yMeta :meta="TextFieldMeta" />

## Input

<Do11yMeta :meta="TextInputMeta" />
