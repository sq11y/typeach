<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { ListboxFieldGroupContextKey } from "./hooks";

export interface ListboxFieldGroupTitleSlots {
  /**
   * The content of the group title should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

defineSlots<ListboxFieldGroupTitleSlots>();

const id = inject(ListboxFieldGroupContextKey)!;
</script>
