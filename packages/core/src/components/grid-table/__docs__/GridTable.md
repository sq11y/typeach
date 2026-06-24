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

## Accessibility

The grid table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with a grid role.

### Keyboard navigation

Only one of the cells remain in the tab order - starting with the first cell and once the user navigates the table, the last focused cell will be in the tab order.

When a cell with a control inside of it gains focus - you should move the focus to the control.

| Key                               | Move to..                          |
| --------------------------------- | ---------------------------------- |
| <kbd>Arrow right</kbd>            | The previous cell in the row.      |
| <kbd>Arrow left</kbd>             | The next cell in the row.          |
| <kbd>Arrow up</kbd>               | The same cell in the previous row. |
| <kbd>Arrow down</kbd>             | The same cell in the next row.     |
| <kbd>Home</kbd>                   | The first cell in the row.         |
| <kbd>End</kbd>                    | The last cell in the row.          |
| <kbd>Home</kbd> + <kbd>Ctrl</kbd> | The first cell in the table.       |
| <kbd>End</kbd> + <kbd>Ctrl</kbd>  | The last cell in the table.        |
| <kbd>Page up</kbd>                | The same cell 10 rows up.          |
| <kbd>Page down</kbd>              | The same cell 10 rows down.        |
