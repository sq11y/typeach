<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { ListboxFieldGroupContextKey } from "./hooks";

export interface ListboxGroupLabelProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface ListboxGroupLabelSlots {
  /**
   * The content of the group label.
   */
  default: () => void;
}

const props = withDefaults(defineProps<ListboxGroupLabelProps>(), {
  id: () => useId(),
});

defineSlots<ListboxGroupLabelSlots>();

const sharedIds = inject(ListboxFieldGroupContextKey)!;

shareId(sharedIds, "group-label", () => props.id);
</script>
