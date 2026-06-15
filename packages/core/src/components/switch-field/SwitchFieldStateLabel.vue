<template>
  <div aria-hidden="true">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface SwitchFieldStateLabelSlots {
  /**
   * The label's content. Will be hidden with `aria-hidden`.
   */
  default: (data: void) => void;
}

defineSlots<SwitchFieldStateLabelSlots>();
</script>
