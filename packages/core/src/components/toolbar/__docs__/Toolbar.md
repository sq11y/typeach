---
title: "Toolbar"
slug: "/c/toolbar"
description: "Groups controls."
illustration: "toolbar.png"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ToolbarSandbox from './Toolbar.sandbox.vue';
  import ToolbarMeta from '../Toolbar.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }} 
</div>

<ToolbarSandbox title="Toolbar" block-size="36rem" />

## API

<Do11yMeta :meta="ToolbarMeta" />

## Accessibility

The toolbar extends a generic element with an [ARIA toolbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role).

### Keyboard navigation

Only one of the controls remain in the tab order - starting with the first enabled control and then it switches to the last control the user navigated to.

If the toolbar is horizontal <kbd>Arrow down</kbd> is replaced with <kbd>Arrow right</kbd>
and <kbd>Arrow up</kbd> with <kbd>Arrow left</kbd>.

<br />

| Key                   | Action                         |
| --------------------- | ------------------------------ |
| <kbd>Arrow up</kbd>   | Moves to the previous control. |
| <kbd>Arrow down</kbd> | Moves to the next control.     |
| <kbd>Home</kbd>       | Moves to the first control.    |
| <kbd>End</kbd>        | Moves to the last control.     |
