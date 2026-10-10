<script setup>
  import TableMeta from '../Table.vue?meta';
  import TableHeadMeta from '../TableHead.vue?meta';
  import TableBodyMeta from '../TableBody.vue?meta';
  import TableRowMeta from '../TableRow.vue?meta';
  import TableHeadingCellMeta from '../TableHeadingCell.vue?meta';
  import TableCellMeta from '../TableCell.vue?meta';
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

## Body

<Do11yMeta :meta="TableBodyMeta" />

## Row

<Do11yMeta :meta="TableRowMeta" />

## Heading cell

<Do11yMeta :meta="TableHeadingCellMeta" />

## Cell

<Do11yMeta :meta="TableCellMeta" />
