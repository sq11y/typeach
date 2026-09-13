---
title: "Switch Field"
alternativeTitles: ["Toggle"]
slug: "/f/switch-field"
description: "Toggles an option."
illustration: "switch-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import SwitchFieldSandbox from './SwitchField.sandbox.vue';

  import SwitchFieldMeta from '../SwitchField.vue?meta';
  import SwitchFieldSwitchButtonMeta from '../SwitchFieldSwitchButton.vue?meta';
  import SwitchFieldStateLabelMeta from '../SwitchFieldStateLabel.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<SwitchFieldSandbox title="Switch Field" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to turn a single option on or off.
- The user expects an immediate _change_.

</template>

<template v-slot:dont>

- As an input in a form, use a radio or checkbox.
- Toggling between different options, use a radio.
- You want to trigger an _action_, use [Button](/c/button).

</template>

</Do11yDoDont>

## API

### Field

<Do11yMeta :meta="SwitchFieldMeta" />

### Switch button

<Do11yMeta :meta="SwitchFieldSwitchButtonMeta" />

### State label

<Do11yMeta :meta="SwitchFieldStateLabelMeta" />

## Accessibility

The switch button extends the <RouterLink to="/c/button">button component</RouterLink>, please refer to it's accessibility notes.
