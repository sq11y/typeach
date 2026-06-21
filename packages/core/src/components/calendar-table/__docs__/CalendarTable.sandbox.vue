<template>
  <h2 class="h4">
    {{ month.name }}
    {{ year }}
  </h2>

  <PeachyCalendarTable v-model="focusedDate">
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell>W</PeachyTableHeadingCell>

        <PeachyTableHeadingCell v-for="weekday of weekdays" :key="weekday">
          {{ weekday.charAt(0) }}
        </PeachyTableHeadingCell>
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow v-for="week of weeks" :key="week.number">
        <PeachyCalendarTableCell role="gridcell" heading>
          <span aria-hidden="true">
            {{ week.number }}
          </span>

          <PeachyVisuallyHidden>
            {{ `Week ${week.number}` }}
          </PeachyVisuallyHidden>
        </PeachyCalendarTableCell>

        <PeachyCalendarTableCell v-for="(day, i) of week.days" :key="i">
          <PeachyCalendarTableCellButton
            :date="day"
            :selected="date && isSameDate(date, day)"
            @click="date = day"
          >
            <span aria-hidden="true">
              {{ day.getDate() }}
            </span>

            <PeachyVisuallyHidden>
              {{ formatDate(day) }}
            </PeachyVisuallyHidden>
          </PeachyCalendarTableCellButton>
        </PeachyCalendarTableCell>
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyCalendarTable>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

import {
  PeachyCalendarTable,
  PeachyCalendarTableCell,
  PeachyCalendarTableCellButton,
  PeachyVisuallyHidden,
  PeachyTableHead,
  PeachyTableHeadingCell,
  PeachyTableBody,
  PeachyTableRow,
  useCalendar,
  formatDate,
  getWeekdays,
  isSameDate,
  Weekday,
} from "@typeach/core";

const focusedDate = ref(new Date("6/28/1969"));

const date = ref<Date>(new Date("6/28/1969"));

const weekdays = getWeekdays(Weekday.Monday);

const { year, month, weeks } = useCalendar(focusedDate, Weekday.Monday, "en");

watch(date, (newDate) => {
  if (newDate) {
    focusedDate.value = newDate;
  }
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;
}

table {
  margin-block-start: var(--spacing-s);
  border-spacing: 0;
  border: var(--border);
  border-radius: var(--border-radius);

  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
}

td,
th {
  text-align: center;
}

th {
  color: var(--grey-70);
  font-weight: var(--font-weight-medium);
}

tbody th:first-child,
td:first-child {
  background-color: var(--green-20);
  color: var(--green-80);
}

thead th:first-child,
th {
  background-color: var(--grey-10);
}

th {
  border-block-end: var(--border);
}

tr:nth-child(even):not(:last-child) td {
  border-block: var(--border);
}

tr:nth-child(even):last-child td {
  border-block-start: var(--border);
}

td,
th {
  &:not(:last-child) {
    border-inline-end: var(--border);
  }
}

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
}

td,
th {
  padding: var(--relative-spacing-xs);
}

th:first-child {
  padding-inline: var(--relative-spacing-s);
}

td button {
  --size: 2rem;

  padding: 0;

  border-radius: 100%;
  border: 0;

  background-color: transparent;
  color: inherit;

  @include utils.square(var(--size));

  &[aria-pressed="true"] {
    background-color: var(--pink-30);
    color: var(--pink-70);
  }

  @media (width < 25rem) {
    --size: 1.5rem;
  }
}
</style>
