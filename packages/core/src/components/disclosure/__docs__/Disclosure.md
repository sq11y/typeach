---
title: "Disclosure"
slug: "/c/disclosure"
description: "Toggles content."
illustration: "disclosure.png"
color: "turquoise"
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

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to hide information that is only relevant to some users.
- Part of a frequently asked questions page.

</template>

<template v-slot:dont>

- You want sub-pages without loading a new page or you want to split the page into sections, use [Tabs](/c/tabs).

</template>

</Do11yDoDont>

## API

### Disclosure

<Do11yMeta :meta="DisclosureMeta" />

### Button

<Do11yMeta  :meta="ButtonMeta" />

### Panel

<Do11yMeta :meta="PanelMeta" />

## Accessibility

The disclosure button extends the <RouterLink to="/c/button">button component</RouterLink>, please refer to it's accessibility notes.
