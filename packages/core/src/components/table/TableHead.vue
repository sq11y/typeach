<template>
  <thead>
    <slot />
  </thead>
</template>

<script lang="ts" setup>
export interface TableHeadSlots {
  /**
   * The content of the table head should only contain valid children for the [HTML thead element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead).
   */
  default: () => void;
}

defineSlots<TableHeadSlots>();
</script>
