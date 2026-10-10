<template>
  <div aria-hidden="true">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface SwitchFieldStateLabelSlots {
  /**
   * The label's content which will be hidden with `aria-hidden`.
   */
  default: () => void;
}

defineSlots<SwitchFieldStateLabelSlots>();
</script>
