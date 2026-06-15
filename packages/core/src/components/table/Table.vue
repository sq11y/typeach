<template>
  <table>
    <slot />
  </table>
</template>

<script lang="ts" setup>
export interface TableSlots {
  /**
   * The content of the table.
   * Should only contain valid children for the `table` element.
   */
  default: (data: void) => void;
}

defineSlots<TableSlots>();
</script>
