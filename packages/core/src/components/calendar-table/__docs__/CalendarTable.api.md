<script setup>
  import CalendarTableMeta from '../CalendarTable.vue?meta';
  import CalendarTableCellMeta from '../CalendarTableCell.vue?meta';
  import CalendarTableCellButtonMeta from '../CalendarTableCellButton.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyCalendarTable>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell />
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow>
        <PeachyCalendarTableCell />

        <PeachyCalendarTableCell>
          <PeachyCalendarTableCellButton />
        </PeachyCalendarTableCell>
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyCalendarTable>
</template>
```

## Table

<Do11yMeta :meta="CalendarTableMeta" />

## Cell

<Do11yMeta :meta="CalendarTableCellMeta" />

## Cell button

<Do11yMeta :meta="CalendarTableCellButtonMeta" />
