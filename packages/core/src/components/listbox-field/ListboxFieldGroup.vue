<template>
  <div role="group" :aria-labelledby="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, useId } from "vue";
import { ListboxFieldGroupInjectionKey } from "./hooks";

export interface ListboxFieldGroupSlots {
  /**
   * The title and options.
   */
  default: (data: void) => void;
}

defineSlots<ListboxFieldGroupSlots>();

const id = useId();

provide(ListboxFieldGroupInjectionKey, id);
</script>
