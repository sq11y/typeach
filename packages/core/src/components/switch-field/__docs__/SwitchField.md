---
title: "Switch Field"
slug: "/f/switch-field"
description: "Switch an option on or off."
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

<SwitchFieldSandbox title="Button" />

## API

### Field

<Do11yMeta :meta="SwitchFieldMeta" />

### Switch button

<Do11yMeta :meta="SwitchFieldSwitchButtonMeta" />

### State label

<Do11yMeta :meta="SwitchFieldStateLabelMeta" />
