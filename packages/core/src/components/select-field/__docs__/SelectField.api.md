<script setup>
  import SelectFieldMeta from '../SelectField.vue?meta';
  import SelectButtonMeta from '../SelectButton.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachySelectField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachySelectButton />

    <PeachyListboxInput>
      <PeachyListboxOption />

      <PeachyListboxGroup>
        <PeachyListboxGroupLabel />
        <PeachyListboxOption />
      </PeachyListboxGroup>
    </PeachyListboxInput>

    <PeachyFieldError v-if="error" />
  </PeachySelectField>
</template>
```

## Field

<Do11yMeta :meta="SelectFieldMeta" />

## Button

<Do11yMeta :meta="SelectButtonMeta" />
