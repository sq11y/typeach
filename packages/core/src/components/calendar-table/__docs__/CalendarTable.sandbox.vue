<template>
  <header>
    <h2 class="h4">
      {{ month.name }}
      {{ year }}
    </h2>

    <PeachyButton class="navigation-button" @click="focusedDate = getPreviousMonth(focusedDate)">
      <ChevronSvg aria-hidden="true" style="rotate: 180deg" />
      <PeachyVisuallyHidden>Previous month</PeachyVisuallyHidden>
    </PeachyButton>

    <PeachyButton class="navigation-button" @click="focusedDate = getNextMonth(focusedDate)">
      <ChevronSvg aria-hidden="true" />
      <PeachyVisuallyHidden>Next month</PeachyVisuallyHidden>
    </PeachyButton>
  </header>

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
            :data-current-month="isSameMonth(focusedDate, day)"
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
import { ref } from "vue";

import {
  PeachyCalendarTable,
  PeachyCalendarTableCell,
  PeachyCalendarTableCellButton,
  PeachyVisuallyHidden,
  PeachyTableHead,
  PeachyTableHeadingCell,
  PeachyTableBody,
  PeachyTableRow,
  PeachyButton,
  useCalendar,
  formatDate,
  getWeekdays,
  getNextMonth,
  getPreviousMonth,
  isSameDate,
  isSameMonth,
  Weekday,
} from "@typeach/core";

import ChevronSvg from "./icons/chevron.svg?component";

const focusedDate = ref(new Date("6/28/1969"));

const date = ref<Date>(new Date("6/28/1969"));

const weekdays = getWeekdays(Weekday.Monday);

const { year, month, weeks } = useCalendar(focusedDate, Weekday.Monday, "en");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;

  --font-weight-normal: 400;
  --font-weight-medium: 500;

  --icon-size: 1.25em;
}

/* ===== Header ===== */

header {
  @include utils.dock;
  margin-block-end: var(--spacing-s);
}

h2 {
  flex-grow: 1;
}

.navigation-button {
  color: inherit;
  background-color: transparent;
  border: 0;

  border-radius: 100%;
  aspect-ratio: 1;

  padding: var(--spacing-xxs);

  @include utils.transition("background-color, color, scale");

  @include utils.enabled {
    @include utils.hover {
      background-color: var(--pink-30);
      color: var(--pink-70);
    }

    &:active {
      scale: 1.1;
    }
  }
}

.navigation-button svg {
  inline-size: calc(var(--icon-size) * 1.125);
}

/* ===== Table borders ===== */

table {
  border-spacing: 0;
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

th:not(tbody tr:last-child > th) {
  border-block-end: var(--border);
}

tr:nth-child(even):not(:last-child) td {
  border-block: var(--border);
}

tr:nth-child(even):last-child td {
  border-block-start: var(--border);
}

td:not(:last-child),
th:not(:last-child) {
  border-inline-end: var(--border);
}

/* ===== Table ===== */

th,
td {
  padding: var(--relative-spacing-xs);
}

tbody th,
td:first-child {
  background-color: var(--green-10);
  color: var(--green-80);
}

thead th {
  color: var(--grey-70);
  background-color: var(--grey-10);
  font-weight: var(--font-weight-medium);
}

tbody th {
  font-weight: var(--font-weight-normal);
}

/* ===== Dates ===== */

button[aria-pressed] {
  --size: 1.75rem;

  padding: 0;

  border-radius: 100%;
  border: 0;

  background-color: transparent;
  color: inherit;

  @include utils.square(var(--size));

  @include utils.transition("background-color, color, scale");

  &[data-current-month="false"] {
    display: none;
  }

  @media (width < 25rem) {
    --size: 1.5rem;
  }

  @include utils.enabled {
    &:active {
      scale: 1.1;
    }
  }

  @include utils.disabled {
    opacity: 0.475;
  }
}

button[aria-pressed="false"] {
  @include utils.enabled {
    @include utils.hover {
      background-color: var(--grey-20);
    }
  }
}

button[aria-pressed="true"] {
  border: var(--invisible-border);
  background-color: var(--pink-30);
  color: var(--pink-80);

  @include utils.enabled {
    @include utils.hover {
      background-color: var(--pink-40);
    }
  }
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
