<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useContext } from "../../hooks";

import { ListboxFieldGroupInjectionKey } from "./hooks";

export interface ListboxFieldGroupTitleSlots {
  /**
   * The content of the group title should include an [accessible label](/p/accessible-labels).
   */
  default: (data: void) => void;
}

defineSlots<ListboxFieldGroupTitleSlots>();

const id = useContext(ListboxFieldGroupInjectionKey);
</script>
