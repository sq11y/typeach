---
title: "Disclosure"
slug: "/c/disclosure"
description: "Toggle content."
---

<script setup>
  import { useRoute } from 'vue-router';

  import DisclosureSandbox from './Disclosure.sandbox.vue';
  import DisclosureMeta from '../Disclosure.vue?meta';
  import ButtonMeta from '../DisclosureButton.vue?meta';
  import PanelMeta from '../DisclosurePanel.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<slot />

<DisclosureSandbox title="Disclosure" />

## API

### Disclosure

<Do11yMeta :meta="DisclosureMeta" />

### Button

<Do11yMeta  :meta="ButtonMeta" />

### Panel

<Do11yMeta :meta="PanelMeta" />
