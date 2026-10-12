## Anatomy

A calendar follows the same structure as a [Table](/c/table); the structural difference is that the content of most calendar cells should be a single date.

<img alt="" class="anatomy-illustration" src="../../table/__docs__/images/table-anatomy.png" />

1. Calendar
   1. Head
      1. Row (or heading row)
         1. Heading cell
   1. Body
      1. Row
         1. Row heading cell
         1. Cell

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
