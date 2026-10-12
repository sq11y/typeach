<script setup>
  import CalendarMeta from '../Calendar.vue?meta';
  import CalendarCellMeta from '../CalendarCell.vue?meta';
  import CalendarDateMeta from '../CalendarDate.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyCalendar>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell />
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow>
        <PeachyTableRowHeadingCell />

        <PeachyCalendarCell>
          <PeachyCalendarDate />
        </PeachyCalendarCell>
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyCalendar>
</template>
```

## Calendar

<Do11yMeta :meta="CalendarMeta" />

## Cell

<Do11yMeta :meta="CalendarDateMeta" />

## Date

<Do11yMeta :meta="CalendarDateMeta" />
