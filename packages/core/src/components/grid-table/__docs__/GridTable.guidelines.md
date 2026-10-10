## Anatomy

A grid follows the same structure as a [Table](/c/table); the structural difference is that the _content_ of most grid cells should be a single control.

<img alt="" class="anatomy-illustration" src="../../table/__docs__/images/table-anatomy.png" />

1. Grid
   1. Table head
      1. Table row (or table heading row)
         1. Heading grid cell
   1. Table body
      1. Table row
         1. Grid cell

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- The table requires spreadsheet functionality or is heavily filled with controls.

</template>

<template v-slot:dont>

- You _just_ need to visualize data by rows and columns, use [Table](/c/table).
- The table is a calendar either as a standalone or part of a date picker, use [Calendar Table](/c/calendar-table).

</template>

</Do11yDoDont>
