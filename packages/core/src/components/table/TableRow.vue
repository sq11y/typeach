<template>
  <tr>
    <slot />
  </tr>
</template>

<script lang="ts" setup>
export interface TableRowSlots {
  /**
   * The content of the table row should only contain valid children for the [HTML tr element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tr).
   */
  default: () => void;
}

defineSlots<TableRowSlots>();
</script>
