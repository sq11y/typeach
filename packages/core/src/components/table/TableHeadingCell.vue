<template>
  <th :aria-sort="sorted">
    <slot />
  </th>
</template>

<script lang="ts" setup>
export interface TableHeadingCellProps {
  /**
   * Which order the column is currently sorted in.
   */
  sorted?: "ascending" | "descending";
}

export interface TableHeadingCellSlots {
  /**
   * Should contain an accessible label for the column.
   */
  default: (data: void) => void;
}

defineProps<TableHeadingCellProps>();

defineSlots<TableHeadingCellSlots>();
</script>
