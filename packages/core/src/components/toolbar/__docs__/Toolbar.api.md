<script setup>
  import ToolbarMeta from '../Toolbar.vue?meta';
</script>

## Anatomy

```vue
<template>
  <PeachyToolbar>
    <!-- Supported sub-components -->
  </PeachyToolbar>
</template>
```

## Toolbar

<Do11yMeta :meta="ToolbarMeta" />

## Custom components

To make a custom component compatible with the toolbar you can use `provideElement` to include it in the roving tabindex - then use `optionalInject(ToolbarContextKey)` to access the necessary keyboard bindings and the ability to move focus to the control (which you should do when it is interacted with).

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
import { optionalInject, provideElement, ToolbarContextKey } from "@typeach/core";

export interface ButtonEmits {
  click: [MouseEvent];
}

export interface ButtonSlots {
  default: () => void;
}

const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const element = useTemplateRef("element");

const { onKeyDown, navigateTo } = optionalInject(ToolbarContextKey);

provideElement("toolbar", element);

const onClick = (event: MouseEvent) => {
  navigateTo?.(element.value!);
  emit("click", event);
};
</script>
```
