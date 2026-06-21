<template>
  <PeachyTableRow>
    <slot />
  </PeachyTableRow>
</template>

<script lang="ts" setup>
import { provide, useId } from "vue";

import { GridRowIdKey } from "./hooks";

import PeachyTableRow from "../table/TableRow.vue";

export interface GridTableRowSlots {
  /**
   * Should only contain valid children for the `tr` element.
   */
  default: (data: void) => void;
}

defineSlots<GridTableRowSlots>();

const id = useId();

provide(GridRowIdKey, id);
</script>
