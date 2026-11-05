<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { ListboxFieldGroupContextKey } from "./hooks";

export interface SelectFieldGroupLabelProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface SelectFieldGroupLabelSlots {
  /**
   * The content of the group label.
   */
  default: () => void;
}

const props = withDefaults(defineProps<SelectFieldGroupLabelProps>(), {
  id: () => useId(),
});

defineSlots<SelectFieldGroupLabelSlots>();

const sharedIds = inject(ListboxFieldGroupContextKey)!;

shareId(sharedIds, "group-label", () => props.id);
</script>
