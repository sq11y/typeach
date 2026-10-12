<template>
  <td>
    <slot />
  </td>
</template>

<script lang="ts" setup>
export interface TableCellSlots {
  /**
   * The content of the cell.
   */
  default: () => void;
}

defineSlots<TableCellSlots>();
</script>
