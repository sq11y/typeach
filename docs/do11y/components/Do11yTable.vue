<template>
  <PeachyTable v-if="isBigScreen || unresponsive" :class="[c(), 'large']">
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

  <div v-else :class="c('list')">
    <dl v-for="(row, rowIndex) of rows" :key="rowIndex">
      <template v-for="(title, titleIndex) of smallTitles || titles" :key="titleIndex">
        <dt>{{ title }}</dt>
        <dd><slot :name="kebabCase(title.replace('&', ''))" :row="row" /></dd>
      </template>
    </dl>
  </div>
</template>

<script lang="ts" setup generic="T">
import { useMediaQuery } from "@vueuse/core";

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
  /**
   * The columns.
   */
  titles: string[];

  /**
   * The columns on small screens.
   */
  smallTitles?: string[];

  /**
   * The rows.
   */
  rows?: T[];

  /**
   * If the table should be unresponsive.
   *
   * This means it will not switch into a definition list on smaller screens.
   */
  unresponsive?: boolean;
}

interface TableSlots {
  [key: string]: (data: { row: T }) => void;
}

defineProps<TableProps>();

defineSlots<TableSlots>();

const c = useBemClass("table");

const isBigScreen = useMediaQuery("(width >= 45rem)");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.table td:first-child {
  min-inline-size: max-content;
  white-space: nowrap;
}

.table__list {
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;

  @include utils.stack;
  gap: var(--spacing-s);
}

.table__list {
  dt:first-of-type {
    display: none;
  }

  dd:first-of-type {
    padding: var(--spacing-xs) var(--spacing-m);
    border-block-end: var(--invisible-border);

    background-color: var(--green-20);
    color: var(--green-80);

    font-weight: var(--font-weight-medium);
  }

  dl {
    &:not(:first-child) {
      border-block-start: var(--border);
    }

    dd,
    dt {
      padding-inline: var(--spacing-l);
    }

    dt {
      margin-block: var(--spacing-s) var(--spacing-xs);

      font-weight: var(--font-weight-medium);
    }

    dd:first-of-type + dt {
      padding-block-start: var(--spacing-s);
    }

    dd:last-child {
      padding-block-end: var(--spacing-m);
    }
  }
}
</style>
