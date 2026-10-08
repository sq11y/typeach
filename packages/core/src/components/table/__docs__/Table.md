---
title: "Table"
slug: "/c/table"
description: "Showcases tabular data."
illustration: "table.png"
color: "green"
---

<script setup>
  import { useRoute } from 'vue-router';
  import { useMediaQuery } from '@vueuse/core';

  import TableSandbox from './Table.sandbox.vue';

  import Guidelines from './Table.guidelines.md';
  import API from './Table.api.md';
  import Accessibility from './Table.accessibility.md';

  const route = useRoute();

  const tallTable = useMediaQuery('(width < 28rem)');

  const tabs = {
    Guidelines,
    API,
    Accessibility
  };
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TableSandbox title="Table" :block-size="tallTable ? '45rem' : '30rem'"  />

<Do11yTabs :tabs="tabs" />
