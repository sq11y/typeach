<template>
  <tr>
    <slot />
  </tr>
</template>

<script lang="ts" setup>
export interface TableRowSlots {
  /**
   * Should only contain valid children for the `tr` element.
   */
  default: (data: void) => void;
}

defineSlots<TableRowSlots>();
</script>
