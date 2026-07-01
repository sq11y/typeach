---
title: "Calendar table"
slug: "/c/calendar-table"
description: "A minimal calendar."
illustration: "calendar-table.png"
---

<script setup>
  import { useRoute } from 'vue-router';

  import CalendarTableSandbox from './CalendarTable.sandbox.vue';
  import CalendarTableMeta from '../CalendarTable.vue?meta';
  import CalendarTableCellMeta from '../CalendarTableCell.vue?meta';
  import CalendarTableCellButtonMeta from '../CalendarTableCellButton.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<CalendarTableSandbox title="Calendar table" block-size="35rem" />

## API reference

### Table

<Do11yMeta :meta="CalendarTableMeta" />

### Cell

<Do11yMeta :meta="CalendarTableCellMeta" />

### Cell button

<Do11yMeta :meta="CalendarTableCellButtonMeta" />

## Accessibility

The calendar table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table) with a grid role. Every cell has a button inside of it with the attribute `aria-pressed` used to indicate when a date is selected.

### Keyboard navigation

Only one of the cell buttons remain in the tab order - the focused date - which will update as the user navigates.

| Key                                     | Move..                                |
| --------------------------------------- | ------------------------------------- |
| <kbd>Arrow right</kbd>                  | To the next date.                     |
| <kbd>Arrow left</kbd>                   | To the previous date.                 |
| <kbd>Arrow up</kbd>                     | To the same day in the previous week. |
| <kbd>Arrow down</kbd>                   | To the same day in the next week.     |
| <kbd>Home</kbd>                         | To the first day of the week.         |
| <kbd>End</kbd>                          | To the last day of the week.          |
| <kbd>Home</kbd> + <kbd>Shift</kbd>      | To the first day of the month.        |
| <kbd>End</kbd> + <kbd>Shift</kbd>       | To the last day of the month.         |
| <kbd>Page up</kbd>                      | Back a month.                         |
| <kbd>Page down</kbd>                    | Forward a month.                      |
| <kbd>Page up</kbd> + <kbd>Shift</kbd>   | Back a year.                          |
| <kbd>Page down</kbd> + <kbd>Shift</kbd> | Forward a year.                       |

## References

Most of the calendar logic for this component comes from [wc-datepicker](https://github.com/Sqrrl/wc-datepicker) and [Tommy's inclusive datepicker](https://github.com/fymmot/inclusive-dates), please check those out!
