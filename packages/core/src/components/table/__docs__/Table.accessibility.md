## Checklist

<Do11yDoDont do-title="Done for you" dont-title="What you must do" full-width>

<template v-slot:dont>

- Ensure the headings have accessible labels.
- Recognize when a row heading cell can be used. Some assistive technology will announce the row's heading when you navigate to it and if there is no heading declared, it will use a counter: "Row 1", "Row 2" and so on. This is fine if there are honestly no row headings, but if your table has a clear "Title" column, it should be marked as such.
- If there are interactive elements on each row - you have to provide a unique label for each of them.

</template>

</Do11yDoDont>

## Implementation

The table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table).
