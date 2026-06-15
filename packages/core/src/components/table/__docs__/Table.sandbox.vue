<!-- prettier-ignore -->
<template>
  <PeachyTable>
    <PeachyTableHead>
      <PeachyTableRow>
        <PeachyTableHeadingCell>
          Heading 1
        </PeachyTableHeadingCell>

        <PeachyTableHeadingCell>
          Heading 2
        </PeachyTableHeadingCell>
      </PeachyTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyTableRow>
        <PeachyTableCell>
          Cell 1
        </PeachyTableCell>

        <PeachyTableCell>
          Cell 2
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
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;
}

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
</style>
