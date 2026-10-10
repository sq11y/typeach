<script setup>
  import GridTableMeta from '../GridTable.vue?meta';
  import GridTableRowMeta from '../GridTableRow.vue?meta';
  import GridTableHeadingCellMeta from '../GridTableHeadingCell.vue?meta';
  import GridTableCellMeta from '../GridTableCell.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyGridTable>
    <PeachyTableHead>
      <PeachyGridTableRow>
        <PeachyGridTableHeadingCell />
      </PeachyGridTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyGridTableRow>
        <PeachyGridTableCell />
      </PeachyGridTableRow>
    </PeachyTableBody>
  </PeachyGridTable>
</template>
```

## Table

<Do11yMeta :meta="GridTableMeta" />

## Row

<Do11yMeta :meta="GridTableRowMeta" />

## Heading cell

<Do11yMeta :meta="GridTableHeadingCellMeta" />

## Cell

<Do11yMeta :meta="GridTableCellMeta" />
