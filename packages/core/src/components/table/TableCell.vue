<template>
  <component :is="heading ? 'th' : 'td'" :scope="heading ? 'row' : undefined">
    <slot />
  </component>
</template>

<script lang="ts" setup>
export interface TableCellProps {
  /**
   * If the cell is a heading for
   * the current row.
   */
  heading?: boolean;
}

export interface TableCellSlots {
  /**
   * The content of the cell.
   */
  default: (data: void) => void;
}

defineProps<TableCellProps>();

defineSlots<TableCellSlots>();
</script>
