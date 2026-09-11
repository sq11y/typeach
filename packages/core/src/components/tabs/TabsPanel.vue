<template>
  <div
    v-if="isSelected"
    :id="id"
    ref="button"
    :aria-labelledby="sharedIds.get(`${props.value}-button`)"
    tabindex="-1"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useId } from "vue";

import { useContext, shareId } from "../../hooks";

import { TabKey } from "./hooks";

export interface TabsPanelProps {
  /**
   * The value for the accompanying button.
   */
  value: string;

  /**
   * The id for the element.
   */
  id?: string;
}

export interface TabsPanelSlots {
  /**
   * The content of the panel.
   */
  default: () => void;
}

const props = withDefaults(defineProps<TabsPanelProps>(), {
  id: () => useId(),
});

defineSlots<TabsPanelSlots>();

const { selectedPanel, sharedIds } = useContext(TabKey);

shareId(sharedIds, `${props.value}-panel`, () => props.id);

const isSelected = computed(() => selectedPanel.value === props.value);
</script>
