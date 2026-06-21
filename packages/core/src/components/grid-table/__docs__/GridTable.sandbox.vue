<!-- prettier-ignore -->
<template>
  <PeachyGridTable>
    <PeachyTableHead>
      <PeachyGridTableRow>
        <PeachyGridTableHeadingCell>
          Name
        </PeachyGridTableHeadingCell>

        <PeachyGridTableHeadingCell>
          Description
        </PeachyGridTableHeadingCell>
      </PeachyGridTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyGridTableRow>
        <PeachyGridTableCell @focus="() => gretaLink?.focus()">
          <a
            ref="greta-link"
            tabindex="-1"
            href="https://en.wikipedia.org/wiki/Greta_Thunberg"
          >
            Greta Thunberg
          </a>
        </PeachyGridTableCell>

        <PeachyGridTableCell>
          Famous climate change and indigenous people activist.
        </PeachyGridTableCell>
      </PeachyGridTableRow>

      <PeachyGridTableRow>
        <PeachyGridTableCell @focus="() => marieLink?.focus()">
          <a
            ref="marie-link"
            tabindex="-1"
            href="https://en.wikipedia.org/wiki/Marie_Curie"
          >
            Marie Curie
          </a>
        </PeachyGridTableCell>

        <PeachyGridTableCell>
          Physicist and chemist - the first woman to win a Nobel price.
        </PeachyGridTableCell>
      </PeachyGridTableRow>
    </PeachyTableBody>
  </PeachyGridTable>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import {
  PeachyTableHead,
  PeachyTableBody,
  PeachyGridTable,
  PeachyGridTableCell,
  PeachyGridTableHeadingCell,
  PeachyGridTableRow,
} from "@typeach/core";

const gretaLink = useTemplateRef("greta-link");

const marieLink = useTemplateRef("marie-link");
</script>

<style lang="scss">
:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;

  --font-weight-medium: 500;
}

table {
  border-spacing: 0;
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

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

tr:nth-child(even):not(:last-child) td {
  border-block: var(--border);
  border-color: transparent;
}

tr:nth-child(even):last-child td {
  border-block-start: var(--border);
  border-color: transparent;
}
</style>
