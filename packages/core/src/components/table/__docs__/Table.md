---
title: "Table"
slug: "/c/table"
description: "Showcase tabular data."
---

<script setup>
  import { useRoute } from 'vue-router';

  import TableSandbox from './Table.sandbox.vue';
  import TableMeta from '../Table.vue?meta';
  import TableHeadMeta from '../TableHead.vue?meta';
  import TableBodyMeta from '../TableBody.vue?meta';
  import TableRowMeta from '../TableRow.vue?meta';
  import TableHeadingCellMeta from '../TableHeadingCell.vue?meta';
  import TableCellMeta from '../TableCell.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TableSandbox title="Table" height="21rem"  />

## API reference

### Table

<Do11yMeta :meta="TableMeta" />

### Head

<Do11yMeta :meta="TableHeadMeta" />

### Body

<Do11yMeta :meta="TableBodyMeta" />

### Row

<Do11yMeta :meta="TableRowMeta" />

### Heading cell

<Do11yMeta :meta="TableHeadingCellMeta" />

### Cell

<Do11yMeta :meta="TableCellMeta" />
