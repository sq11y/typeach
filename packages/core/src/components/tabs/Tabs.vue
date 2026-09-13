<template>
  <div v-if="Object.keys($attrs).length" v-bind="$attrs">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { provide } from "vue";

import { useSharedIds } from "../../hooks";

import { TabContextKey } from "./hooks";

export interface TabsSlots {
  /**
   * The tabs list and panels.
   */
  default: () => void;
}

defineSlots<TabsSlots>();

/**
 * The currently selected panel.
 */
const selectedPanel = defineModel<string>();

const sharedIds = useSharedIds();

provide(TabContextKey, {
  sharedIds,
  selectedPanel,
});
</script>
