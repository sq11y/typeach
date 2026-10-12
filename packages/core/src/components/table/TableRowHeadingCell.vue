<template>
  <th scope="row">
    <slot />
  </th>
</template>

<script lang="ts" setup>
export interface TableHeadingRowCellSlots {
  /**
   * The content of the row heading cell.
   */
  default: () => void;
}

defineSlots<TableHeadingRowCellSlots>();
</script>
