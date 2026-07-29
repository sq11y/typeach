<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script lang="ts" setup>
export interface TableBodySlots {
  /**
   * The content of the table body should only contain valid children for the [HTML tbody element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody).
   */
  default: () => void;
}

defineSlots<TableBodySlots>();
</script>
