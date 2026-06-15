<template>
  <thead>
    <slot />
  </thead>
</template>

<script lang="ts" setup>
export interface TableHeadSlots {
  /**
   * Should only contain valid children for the `thead` element.
   */
  default: (data: void) => void;
}

defineSlots<TableHeadSlots>();
</script>
