<script setup>
  import ComboboxFieldMeta from '../ComboboxField.vue?meta';
  import ComboboxInputMeta from '../ComboboxInput.vue?meta';
  import ComboboxSelectionListMeta from '../ComboboxSelectionList.vue?meta';
  import ComboboxSelectionListItemMeta from '../ComboboxSelectionListItem.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyComboboxField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachyComboboxSelectionList v-if="multiselect">
      <PeachyComboboxSelectionListItem />
    </PeachyComboboxSelectionList>

    <PeachyComboboxInput />

    <PeachyListboxInput>
      <PeachyListboxOption />

      <PeachyListboxGroup>
        <PeachyListboxGroupLabel />
        <PeachyListboxOption />
      </PeachyListboxGroup>
    </PeachyListboxInput>

    <PeachyFieldError v-if="error" />
  </PeachyComboboxField>
</template>
```

## Field

<Do11yMeta :meta="ComboboxFieldMeta" />

## Input

<Do11yMeta :meta="ComboboxInputMeta" />

## Selection list

<Do11yMeta :meta="ComboboxSelectionListMeta" />

## Selection list item

<Do11yMeta :meta="ComboboxSelectionListItemMeta" />
