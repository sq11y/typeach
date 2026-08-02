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

| Key                   | Action                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------- |
| <kbd>Arrow up</kbd>   | Moves to the previous control.                                                         |
| <kbd>Arrow down</kbd> | Moves to the next control.                                                             |
| <kbd>PageUp</kbd>     | Moves to the 10th controls before. If there isn't one - it moves to the first control. |
| <kbd>PageDown</kbd>   | Moves to the 10th controls after. If there isn't one - it moves to the last control.   |
| <kbd>Home</kbd>       | Moves to the first control.                                                            |
| <kbd>End</kbd>        | Moves to the last control.                                                             |

## Adding custom controls

To add a custom control to a toolbar use `provideElement("toolbar", element)` to include it in the roving tabindex - then use `useOptionalContext(ToolbarKey)` to access the necessary keyboard bindings and the ability to move focus to the control (which you should do when it is interacted with).

The tabindex will automatically update so that the most recently interacted with element remains in the tab order.

<!-- prettier-ignore -->
```vue
<template>
  <button
    ref="element"
    type="button"
    @click="onClick"
    @keydown="onKeyDown"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { useOptionalContext, provideElement, ToolbarKey } from "@typeach/core";

export interface ButtonEmits {
  click: [MouseEvent];
}

export interface ButtonSlots {
  default: () => void;
}

const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const element = useTemplateRef("element");

const { onKeyDown, moveTo } = useOptionalContext(ToolbarKey);

provideElement("toolbar", element);

const onClick = (event: MouseEvent) => {
  moveTo?.(element.value!);
  emit("click", event);
};
</script>
```
