---
title: "Grid table"
slug: "/c/grid-table"
description: "Allow for an interactive table."
---

<script setup>
  import { useRoute } from 'vue-router';
  import { useMediaQuery } from '@vueuse/core';

  import GridTableSandbox from './GridTable.sandbox.vue';
  import GridTableMeta from '../GridTable.vue?meta';
  import GridTableRowMeta from '../GridTableRow.vue?meta';
  import GridTableHeadingCellMeta from '../GridTableHeadingCell.vue?meta';
  import GridTableCellMeta from '../GridTableCell.vue?meta';

  const route = useRoute();

  const tallTable = useMediaQuery('(width < 28rem)');
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<GridTableSandbox title="Grid table" :block-size="tallTable ? '45rem' : '30rem'"  />

## API reference

### Table

<Do11yMeta :meta="GridTableMeta" />

### Row

<Do11yMeta :meta="GridTableRowMeta" />

### Heading cell

<Do11yMeta :meta="GridTableHeadingCellMeta" />

### Cell

<Do11yMeta :meta="GridTableCellMeta" />
