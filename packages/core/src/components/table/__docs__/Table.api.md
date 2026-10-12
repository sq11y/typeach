<script setup>
  import TableMeta from '../Table.vue?meta';
  import TableHeadMeta from '../TableHead.vue?meta';
  import TableBodyMeta from '../TableBody.vue?meta';
  import TableRowMeta from '../TableRow.vue?meta';
  import TableHeadingCellMeta from '../TableHeadingCell.vue?meta';
  import TableCellMeta from '../TableCell.vue?meta';
  import TableRowHeadingCellMeta from '../TableRowHeadingCell.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyTable>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell />
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow>
        <PeachyTableRowHeadingCell />
        <PeachyTableCell />
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyTable>
</template>
```

## Table

<Do11yMeta :meta="TableMeta" />

## Head

<Do11yMeta :meta="TableHeadMeta" />

## Heading cell

<Do11yMeta :meta="TableHeadingCellMeta" />

## Body

<Do11yMeta :meta="TableBodyMeta" />

## Row

<Do11yMeta :meta="TableRowMeta" />

## Row heading cell

<Do11yMeta :meta="TableRowHeadingCellMeta" />

## Cell

<Do11yMeta :meta="TableCellMeta" />
