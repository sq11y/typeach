<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { shareId } from "../../hooks";

import { DialogContextKey } from "./hooks";

export interface DialogDescriptionProps {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface DialogDescriptionSlots {
  /**
   * The description.
   */
  default: () => void;
}

const props = withDefaults(defineProps<DialogDescriptionProps>(), {
  level: 1,
  id: () => useId(),
});

defineSlots<DialogDescriptionSlots>();

const { sharedIds } = inject(DialogContextKey)!;

shareId(sharedIds, "description", () => props.id);
</script>
