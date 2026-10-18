## Checklist

<Do11yDoDont do-title="What's done for you" dont-title="What you must do" consider-title="What you should do" full-width>

<template v-slot:dont>

- Ensure headings have an [accessible label](/p/accessible-labels), even if there is no _visible_ label.

</template>

<template v-slot:consider>

- If there are interactive elements on each row - you should provide a unique label for each of them.
- Recognize when a row heading cell should be used. Some assistive technology will announce the heading when you navigate to a row. If there is no heading, it will use a counter: "Row 1", "Row 2" and so on, which is fine if there are genuienly no row headings, but if your table has a clear "Title" column, it should be marked as such.
- Test in [forced colors mode](https://benmyers.dev/encyclopedia/forced-colors-mode/). The table should still _look_ like a table.

</template>

</Do11yDoDont>

## Implementation

The table extends the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table).
