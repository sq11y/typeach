<template>
  <div role="group" :aria-labelledby="sharedIds.get('group-label')">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from "vue";
import { useSharedIds } from "../../hooks";

import { ListboxFieldGroupContextKey } from "./hooks";

export interface SelectFieldGroupSlots {
  /**
   * The label and options.
   */
  default: () => void;
}

defineSlots<SelectFieldGroupSlots>();

const sharedIds = useSharedIds();

provide(ListboxFieldGroupContextKey, sharedIds);
</script>
