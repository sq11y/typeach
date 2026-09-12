<template>
  <div ref="element">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useId, useTemplateRef } from "vue";

import { provideField } from "../field/hooks";

export interface ListboxFieldSlots {
  /**
   * The related listbox and field sub-components.
   */
  default: () => void;
}

defineSlots<ListboxFieldSlots>();

const id = useId();

const element = useTemplateRef("element");

provideField(id, element);
</script>
