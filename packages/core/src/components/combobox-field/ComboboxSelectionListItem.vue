<template>
  <li>
    <slot />
  </li>
</template>

<script lang="ts" setup>
export interface ComboboxFieldSelectionListItemSlots {
  /**
   * The item and related controls like for example a "Remove option _x_" button.
   */
  default: () => void;
}

defineSlots<ComboboxFieldSelectionListItemSlots>();
</script>
