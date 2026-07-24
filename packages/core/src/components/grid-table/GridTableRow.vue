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
   * The content of the table row should only contain valid children for the [HTML tr element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr) inside a table with an [ARIA grid role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role).
   */
  default: (data: void) => void;
}

defineSlots<GridTableRowSlots>();

const id = useId();

provide(GridRowIdKey, id);
</script>
