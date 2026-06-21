<template>
  <button
    ref="button"
    :tabindex="selectedPanel === value ? 0 : -1"
    type="button"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { useContext } from "../../hooks";
import { TabKey } from "./hooks";

export interface TabsActionButtonProps {
  /**
   * The value for the accompanying panel.
   */
  value: string | number;
}

export interface TabsActionButtonEmits {
  /**
   * The click event.
   */
  click: [event: MouseEvent];
}

export interface TabsActionButtonSlots {
  /**
   * The content of the button - should include an accessible label.
   */
  default: (data: void) => void;
}

defineProps<TabsActionButtonProps>();

const emit = defineEmits<TabsActionButtonEmits>();

defineSlots<TabsActionButtonSlots>();

const { selectedPanel } = useContext(TabKey);
</script>
