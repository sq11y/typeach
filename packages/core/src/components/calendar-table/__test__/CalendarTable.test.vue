<template>
  <h1>
    {{ month.name }}
    {{ year }}
  </h1>

  <PeachyCalendarTable v-model="focusedDate">
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell>Week</PeachyTableHeadingCell>

        <PeachyTableHeadingCell v-for="weekday of weekdays" :key="weekday">
          {{ weekday }}
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

import { PeachyCalendarTable, PeachyCalendarTableCell, PeachyCalendarTableCellButton } from "../";

import {
  PeachyTableHead,
  PeachyTableHeadingCell,
  PeachyTableBody,
  PeachyTableRow,
} from "../../table";

import { formatDate, getWeekdays, isSameDate, Weekday } from "../../../utils";

import { useCalendar } from "../../../hooks";

import { PeachyVisuallyHidden } from "../../";

const focusedDate = ref(new Date("12/14/2025"));

const date = ref<Date>();

const weekdays = getWeekdays(Weekday.Monday);

const { year, month, weeks } = useCalendar(focusedDate, Weekday.Monday, "en");

watch(date, (newDate) => {
  if (newDate) {
    focusedDate.value = newDate;
  }
});
</script>

<style>
table {
  border-collapse: collapse;
}

td,
th {
  padding: 0.25em;
  border: 1px solid #eee;

  text-align: center;
  vertical-align: middle;

  &:focus {
    background-color: rgb(240 240 255);
    outline: 4px solid darkblue;
  }
}
</style>
