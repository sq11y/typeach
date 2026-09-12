<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { provideField } from "../field/hooks";

export interface ListboxFieldSlots {
  /**
   * The related listbox and field sub-components.
   */
  default: () => void;
}

defineSlots<ListboxFieldSlots>();

const element = useTemplateRef("element");

provideField(element);
</script>
