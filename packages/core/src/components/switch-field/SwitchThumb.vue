<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface SwitchThumbSlots {
  /**
   * Decorative content, maybe an icon.
   */
  default: () => void;
}

defineSlots<SwitchThumbSlots>();
</script>
