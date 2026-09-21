---
title: "Select Field"
slug: "/f/select-field"
description: "Pick options."
illustration: "select-field.png"
color: "purple"
---

<script setup>
  import { useRoute } from 'vue-router';

  import SelectFieldSandbox from './SelectField.sandbox.vue';

  import SelectFieldMeta from '../SelectField.vue?meta';
  import SelectButtonMeta from '../SelectButton.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<SelectFieldSandbox title="Select Field" block-size="40rem" />

## Guidelines

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Choosing from a long list of options.
- You want to save on space.

</template>

<template v-slot:dont>

- There are few options - use a radio or a checkbox group.
- You want multiselect. Though the component supports it - it's not great for user friendliness, use [Combobox Field](/f/combobox-field) or a checkbox group, when possible.
- The options benefit from filtering, use [Combobox Field](/f/combobox-field).

</template>

</Do11yDoDont>

## API

### Field

<Do11yMeta :meta="SelectFieldMeta" />

### Button

<Do11yMeta :meta="SelectButtonMeta" />

## Accessibility

The button extends the [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) with an [ARIA combobox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) with `aria-autocomplete="none"`.

It associates itself with the listbox through `aria-haspopup="listbox"` and `aria-controls`. It indicates the currently focused option with `aria-activedescendant` and whether it's open or not with `aria-expanded`.

The listbox extends a generic element with an [ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), and every option with an [ARIA option role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role). Each group get the [ARIA group role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) and a the labels have no semantic role but are associated with the group using `aria-labelledby`.

### Keyboard navigation

| Key                                  | Action                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| <kbd>Printable character</kbd>       | Moves to the next item with a label that starts with the typed characters.          |
| <kbd>Arrow up</kbd>                  | Moves to the previous option.                                                       |
| <kbd>Arrow down</kbd>                | Moves to the next option.                                                           |
| <kbd>PageUp</kbd>                    | Moves to the 10th option before. If there isn't one - it moves to the first option. |
| <kbd>PageDown</kbd>                  | Moves to the 10th option after. If there isn't one - it moves to the last option.   |
| <kbd>Home</kbd>                      | Moves to the first option.                                                          |
| <kbd>End</kbd>                       | Moves to the last option.                                                           |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Selects the current option.                                                         |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>       | Selects all options when `multiselect`.                                             |

## Further reading

- [\<select> your poison](https://sarahmhigley.com/writing/select-your-poison/) by Sarah Higley - insights to Sarah's usability tests for selects and comboboxes.
