---
title: "Table"
slug: "/c/table"
description: "Showcase tabular data."
illustration: "table.png"
---

<script setup>
  import { useRoute } from 'vue-router';
  import { useMediaQuery } from '@vueuse/core';

  import TableSandbox from './Table.sandbox.vue';
  import TableMeta from '../Table.vue?meta';
  import TableHeadMeta from '../TableHead.vue?meta';
  import TableBodyMeta from '../TableBody.vue?meta';
  import TableRowMeta from '../TableRow.vue?meta';
  import TableHeadingCellMeta from '../TableHeadingCell.vue?meta';
  import TableCellMeta from '../TableCell.vue?meta';

  const route = useRoute();

  const tallTable = useMediaQuery('(width < 28rem)');
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TableSandbox title="Table" :block-size="tallTable ? '45rem' : '30rem'"  />

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

## Accessibility

The table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table).
