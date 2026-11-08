<template>
  <th scope="row">
    <slot />
  </th>
</template>

<script lang="ts" setup>
export interface TableRowHeadingCellSlots {
  /**
   * The content of the heading should only contain [valid children for the HTML th element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th#technical_summary).
   */
  default: () => void;
}

defineSlots<TableRowHeadingCellSlots>();
</script>
