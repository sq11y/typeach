<!-- prettier-ignore -->
<template>
  <PeachyTable>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell>
          Name
        </PeachyTableHeadingCell>

        <PeachyTableHeadingCell>
          Description
        </PeachyTableHeadingCell>
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow>
        <PeachyTableCell>
          Greta Thunberg
        </PeachyTableCell>

        <PeachyTableCell>
          Famous climate change and indigenous people activist.
        </PeachyTableCell>
      </PeachyTableRow>

      <PeachyTableRow>
        <PeachyTableCell>
          Marie Curie
        </PeachyTableCell>

        <PeachyTableCell>
          Physicist and chemist - the first woman to win a Nobel price.
        </PeachyTableCell>
      </PeachyTableRow>
    </PeachyTableBody>
  </PeachyTable>
</template>

<script lang="ts" setup>
import {
  PeachyTable,
  PeachyTableHead,
  PeachyTableRow,
  PeachyTableHeadingCell,
  PeachyTableBody,
  PeachyTableCell,
} from "@typeach/core";
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;

  --font-weight-medium: 500;
}

/* ===== Table borders ===== */

table {
  border-spacing: 0;
  border: var(--border);
  border-radius: var(--border-radius);
}

/**
 * Inner borders for forced colors mode to separate rows
 * when they are no longer different colors.
 */

tr:nth-child(even):not(:last-child) td {
  border-block: var(--border);
  border-color: transparent;
}

tr:nth-child(even):last-child td {
  border-block-start: var(--border);
  border-color: transparent;
}

thead th:first-child {
  border-start-start-radius: var(--border-radius);
}

thead th:last-child {
  border-start-end-radius: var(--border-radius);
}

td:first-child {
  border-end-start-radius: var(--border-radius);
}

td:last-child {
  border-end-end-radius: var(--border-radius);
}

/* ===== Table ===== */

th,
td {
  max-inline-size: 20rem;
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

td {
  vertical-align: text-top;
}

tr:nth-child(even) {
  background-color: var(--grey-10);
}
</style>
