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
            target="_parent"
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
            target="_parent"
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

a {
  color: var(--blue-80);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);
}

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
