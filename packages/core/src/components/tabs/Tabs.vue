<template>
  <component :is="as" v-if="as">
    <slot />
  </component>

  <slot v-else />
</template>

<script lang="ts" setup>
import { provide } from "vue";

import { TabKey } from "./hooks";
import { shareDynamicIds } from "../../hooks";

export interface TabsProps {
  /**
   * If a wrapper element should be rendered, and if so, which element.
   */
  as?: string;
}

export interface TabsSlots {
  /**
   * The tabs list and panels.
   */
  default: (data: void) => void;
}

defineProps<TabsProps>();

defineSlots<TabsSlots>();

/**
 * The currently selected panel.
 */
const selectedPanel = defineModel<string>();

const ids = shareDynamicIds();

provide(TabKey, {
  ids,
  selectedPanel,
});
</script>
