<script setup>
  import GridTableMeta from '../GridTable.vue?meta';
  import GridTableRowMeta from '../GridTableRow.vue?meta';
  import GridTableRowHedingCellMeta from '../GridTableRowHeadingCell.vue?meta';
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
        <PeachyGridTableRowHeadingCell />
        <PeachyGridTableCell />
      </PeachyGridTableRow>
    </PeachyTableBody>
  </PeachyGridTable>
</template>
```

## Table

<Do11yMeta :meta="GridTableMeta" />

## Heading cell

<Do11yMeta :meta="GridTableHeadingCellMeta" />

## Row

<Do11yMeta :meta="GridTableRowMeta" />

## Row heading cell

<Do11yMeta :meta="GridTableRowHedingCellMeta" />

## Cell

<Do11yMeta :meta="GridTableCellMeta" />
