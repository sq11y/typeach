## Anatomy

A calendar table follows the same structure as a [Grid Table](/c/grid-table); the structural difference is that _these_ grid cells should have a single date in them.

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

- The user could benefit from visualizing the dates - like when picking dates for a vacation.
- You need a simple calendar - no events associated with each date.

</template>

<template v-slot:dont>

- The user likely knows the date without a visual aid - like their birthday, use a text input.

</template>

</Do11yDoDont>
