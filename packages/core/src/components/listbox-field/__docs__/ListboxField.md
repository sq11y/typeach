---
title: "Listbox Field"
slug: "/f/listbox-field"
description: "Allows for picking options from a list."
illustration: "listbox-field.png"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ListboxFieldSandbox from './ListboxField.sandbox.vue';

  import ListboxFieldMeta from '../ListboxField.vue?meta';
  import ListboxFieldGroupMeta from '../ListboxFieldGroup.vue?meta';
  import ListboxFieldGroupTitleMeta from '../ListboxFieldGroupTitle.vue?meta';
  import ListboxFieldInputMeta from '../ListboxFieldInput.vue?meta';
  import ListboxFieldOptionMeta from '../ListboxFieldOption.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<ListboxFieldSandbox title="Listbox field" block-size="40rem" />

## API

### Field

<Do11yMeta :meta="ListboxFieldMeta" />

### Input

<Do11yMeta :meta="ListboxFieldInputMeta" />

### Group

<Do11yMeta :meta="ListboxFieldGroupMeta" />

### Group title

<Do11yMeta :meta="ListboxFieldGroupTitleMeta" />

### Option

<Do11yMeta :meta="ListboxFieldOptionMeta" />

## Accessibility

The listbox extends a generic element with an [ARIA listbox role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), and every option with an [ARIA option role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role). Each group get the [ARIA group role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) while their titles have no semantic role but are attached as a label for the related group.

### Keyboard navigation

Only one of the options remain in the tab order - starting with the first enabled option and then it switches to the last option the user navigated to.

If the listbox is horizontal <kbd>Arrow down</kbd> is replaced with <kbd>Arrow right</kbd>
and <kbd>Arrow up</kbd> with <kbd>Arrow left</kbd>.

<br />

| Key                   | Action                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| <kbd>Arrow up</kbd>   | Moves to the previous option.                                                       |
| <kbd>Arrow down</kbd> | Moves to the next option.                                                           |
| <kbd>PageUp</kbd>     | Moves to the 10th option before. If there isn't one - it moves to the first option. |
| <kbd>PageDown</kbd>   | Moves to the 10th option after. If there isn't one - it moves to the last option.   |
| <kbd>Home</kbd>       | Moves to the first option.                                                          |
| <kbd>End</kbd>        | Moves to the last option.                                                           |
| <kbd>Space</kbd>      | Toggles the current option.                                                         |

There are some additional shortcuts available for multiselect.

| Key                                                  | Action                                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <kbd>Shift</kbd> + <kbd>Arrow up</kbd>               | Moves to and toggles the selected state of the previous option.                           |
| <kbd>Shift</kbd> + <kbd>Arrow down</kbd>             | Moves to and toggles the selected state of the next option.                               |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Home</kbd> | Selects from the current option to the first option, and moves focus to the first option. |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>End</kbd>  | Selects from the current option to the last option, and moves focus to the last option.   |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>                       | Selects all options.                                                                      |
