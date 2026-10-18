<template>
  <button
    ref="button"
    :aria-disabled="!!disabled"
    :tabindex="disabled === 'without-focus' ? -1 : selectedPanel === value ? 0 : -1"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { TabContextKey } from "./hooks";

export interface TabsActionButtonProps {
  /**
   * The value for the accompanying panel.
   */
  value: string | number;

  /**
   * If the button should be disabled. If you want it to also be taken out of the tab order even when the associated tab is active, `"without-focus"` can be used.
   */
  disabled?: boolean | "without-focus";
}

export interface TabsActionButtonEmits {
  /**
   * Only fired when the button is enabled.
   */
  click: [event: MouseEvent];
}

export interface TabsActionButtonSlots {
  /**
   * The button should include an [accessible label](/p/accessible-labels) and only contain non-interactive [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

const props = defineProps<TabsActionButtonProps>();

const emit = defineEmits<TabsActionButtonEmits>();

defineSlots<TabsActionButtonSlots>();

const { selectedPanel } = inject(TabContextKey)!;

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
