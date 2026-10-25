---
title: "Grid table"
alternativeTitles: ["Data table", "Spreadsheet"]
slug: "/c/grid-table"
description: "An interactive table."
illustration: "grid-table.png"
color: "green"
---

<script setup>
  import { useRoute } from 'vue-router';

  import GridTableSandbox from './GridTable.sandbox.vue';

  import Guidelines from './GridTable.guidelines.md';
  import API from './GridTable.api.md';
  import Accessibility from './GridTable.accessibility.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
    Accessibility
  }
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<GridTableSandbox title="Grid table" block-size="45rem"  />

<Do11yTabs :tabs="tabs" />
