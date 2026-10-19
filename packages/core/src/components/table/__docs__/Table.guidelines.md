<script lang="ts" setup>
  import illustration from './images/table-anatomy.png';

  const anatomy = `
    <template>
      <PeachyTable>
         <PeachyTableHead>
            <PeachyTableRow>
               <PeachyTableHeadingCell />
            </PeachyTableRow>
         </PeachyTableHead>

         <PeachyTableBody>
            <PeachyTableRow>
               <PeachyTableRowHeadingCell />
               <PeachyTableCell />
            </PeachyTableRow>
         </PeachyTableBody>
      </PeachyTable>
    </template>

    <script lang="ts" setup>
      import {
         PeachyTable,
         PeachyTableHead,
         PeachyTableBody,
         PeachyTableRow,
         PeachyTableHeadingCell,
         PeachyTableRowHeadingCell,
         PeachyTableCell
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Table
   1. Head
      1. Row (or heading row)
         1. Heading cell
   1. Body
      1. Row
         1. Row heading cell
         1. Cell

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You need to visualize data by rows and columns.
- The content could benefit from sorting.

</template>

<template v-slot:dont>

- The table requires spreadsheet functionality or is heavily filled with controls, use [Grid Table](/c/grid-table).
- The table is a calendar either as a standalone or part of a date picker, use [Calendar](/c/calendar-table).

</template>

</Do11yDoDont>
