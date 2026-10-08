<script setup>
  import ToolbarMeta from '../Toolbar.vue?meta';
</script>

<Do11yMeta :meta="ToolbarMeta" />

## Adding controls

To add a custom control to a toolbar use `provideElement("toolbar", element)` to include it in the roving tabindex - then use `optionalInject(ToolbarContextKey)` to access the necessary keyboard bindings and the ability to move focus to the control (which you should do when it is interacted with).

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

const { onKeyDown, moveTo } = optionalInject(ToolbarContextKey);

provideElement("toolbar", element);

const onClick = (event: MouseEvent) => {
  moveTo?.(element.value!);
  emit("click", event);
};
</script>
```
