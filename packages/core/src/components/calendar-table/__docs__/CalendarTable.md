---
title: "Calendar table"
slug: "/c/calendar-table"
description: "A minimal calendar."
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
