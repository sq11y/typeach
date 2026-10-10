<script setup>
  import ListboxFieldMeta from '../ListboxField.vue?meta';
  import ListboxInputMeta from '../ListboxInput.vue?meta';
  import ListboxGroupMeta from '../ListboxGroup.vue?meta';
  import ListboxGroupLabelMeta from '../ListboxGroupLabel.vue?meta';
  import ListboxOptionMeta from '../ListboxOption.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyListboxField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachyListboxInput>
      <PeachyListboxOption />

      <PeachyListboxGroup>
        <PeachyListboxGroupLabel />
        <PeachyListboxOption />
      </PeachyListboxGroup>
    </PeachyListboxInput>

    <PeachyFieldError v-if="error" />
  </PeachyListboxField>
</template>
```

## Field

<Do11yMeta :meta="ListboxFieldMeta" />

## Input

<Do11yMeta :meta="ListboxInputMeta" />

## Group

<Do11yMeta :meta="ListboxGroupMeta" />

## Group label

<Do11yMeta :meta="ListboxGroupLabelMeta" />

## Option

<Do11yMeta :meta="ListboxOptionMeta" />
