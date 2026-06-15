<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface VisuallyHiddenSlots {
  /**
   * The visually hidden content.
   * Should not include interactive elements.
   */
  default: (data: void) => void;
}

defineSlots<VisuallyHiddenSlots>();

const style = `
  height: 1px;
  width: 1px;

  position: absolute;
  overflow: hidden;

  clip: rect(0 0 0 0);
  clip-path: inset(50%);

  white-space: nowrap;
`;
</script>
