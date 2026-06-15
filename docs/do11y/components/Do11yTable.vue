<template>
  <PeachyTable>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell v-for="(title, titleIndex) of titles" :key="titleIndex">
          {{ title }}
        </PeachyTableHeadingCell>
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow v-for="(row, rowIndex) of rows" :key="rowIndex">
        <PeachyTableCell v-for="(title, titleIndex) of titles" :key="titleIndex">
          <slot :name="kebabCase(title.replace('&', ''))" :row="row" />
        </PeachyTableCell>
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyTable>

  <div :class="c('list')">
    <dl v-for="(row, rowIndex) of rows" :key="rowIndex">
      <template v-for="(title, titleIndex) of smallTitles || titles" :key="titleIndex">
        <dt>{{ title }}</dt>
        <dd><slot :name="kebabCase(title.replace('&', ''))" :row="row" /></dd>
      </template>
    </dl>
  </div>
</template>

<script lang="ts" setup generic="T">
import { kebabCase } from "change-case";

import {
  useBemClass,
  PeachyTable,
  PeachyTableBody,
  PeachyTableHead,
  PeachyTableHeadingCell,
  PeachyTableRow,
  PeachyTableCell,
} from "@typeach/core";

interface TableProps {
  titles: string[];
  smallTitles?: string[];
  rows?: T[];
}

interface TableSlots {
  [key: string]: (data: { row: T }) => void;
}

defineProps<TableProps>();

defineSlots<TableSlots>();

const c = useBemClass("table");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

table {
  border-spacing: 0;
  border: var(--border);
  border-radius: var(--border-radius);

  overflow: hidden;
}

td,
th {
  padding: var(--spacing-l);
  text-align: start;
}

th {
  border-block-end: var(--invisible-border);
  padding-block: var(--spacing-m) var(--spacing-s);

  background-color: var(--green-20);
  color: var(--green-80);

  font-weight: var(--font-weight-medium);
}

td:nth-child(2) {
  max-width: 20rem;
}

tr:nth-child(even) {
  background-color: var(--grey-10);
}

tr:nth-child(even):not(:last-child) td {
  border-block: var(--border);
  border-color: transparent;
}

tr:nth-child(even):last-child td {
  border-block-start: var(--border);
  border-color: transparent;
}

td:first-child {
  min-width: max-content;
  white-space: nowrap;
}

td {
  vertical-align: text-top;
}

.table__list {
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;

  @include utils.vertical-flex(var(--spacing-s));
}

.table__list {
  dt:first-of-type {
    display: none;
  }

  dd:first-of-type {
    padding: var(--spacing-s) var(--spacing-l);

    background-color: var(--green-20);
    color: var(--green-80);

    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    font-weight: var(--font-weight-medium);
  }
}

dl {
  &:not(:first-child) {
    border-top: var(--border);
  }

  dd,
  dt {
    padding-inline: var(--spacing-l);
  }

  dt {
    margin-block-start: var(--spacing-s);

    font-weight: var(--font-weight-medium);
  }

  dd:first-of-type + dt {
    padding-block-start: var(--spacing-s);
  }

  dd:last-child {
    padding-block-end: var(--spacing-l);
  }
}

@media (width < 45rem) {
  table {
    display: none;
  }
}

@media (width >= 45rem) {
  .table__list {
    display: none;
  }
}
</style>
