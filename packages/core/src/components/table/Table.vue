<template>
  <table>
    <slot />
  </table>
</template>

<script lang="ts" setup>
export interface TableSlots {
  /**
   * The content of the table should only contain valid children for the [HTML table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table).
   */
  default: (data: void) => void;
}

defineSlots<TableSlots>();
</script>
