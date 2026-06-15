<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script lang="ts" setup>
export interface TableBodySlots {
  /**
   * The rows of the table.
   * Should only contain valid children for the `tbody` element.
   */
  default: (data: void) => void;
}

defineSlots<TableBodySlots>();
</script>
