---
title: "Table"
slug: "/c/table"
description: "Showcases tabular data."
illustration: "table.png"
color: "green"
---

<script setup>
  import { useRoute } from 'vue-router';

  import TableSandbox from './Table.sandbox.vue';

  import Guidelines from './Table.guidelines.md';
  import API from './Table.api.md';
  import Accessibility from './Table.accessibility.md';

  const route = useRoute();

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

<TableSandbox title="Table" block-size="45rem"  />

<Do11yTabs :tabs="tabs" />
