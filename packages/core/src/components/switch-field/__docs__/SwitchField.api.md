<script setup>
  import SwitchFieldMeta from '../SwitchField.vue?meta';
  import SwitchTrackMeta from '../SwitchTrack.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachySwitchField>
    <PeachyFieldLabel />
    <PeachyFieldDescription />

    <PeachySwitchTrack>
      <PeachySwitchThumb />
    </PeachySwitchTrack>

    <PeachyFieldError v-if="error" />
  </PeachySwitchField>
</template>
```

## Field

<Do11yMeta :meta="SwitchFieldMeta" />

## Track

<Do11yMeta :meta="SwitchTrackMeta" />
