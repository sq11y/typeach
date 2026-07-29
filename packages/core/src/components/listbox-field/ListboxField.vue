<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { useFieldProvider } from "../field/hooks";

export interface ListboxFieldSlots {
  /**
   * The related listbox and field sub-components.
   */
  default: () => void;
}

defineSlots<ListboxFieldSlots>();

const id = useId();

const element = useTemplateRef("element");

useFieldProvider(id, element);
</script>
