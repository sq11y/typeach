<template>
  <PeachyButton :class="c({ grey })">
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { PeachyButton, useBemClass } from "@typeach/core";

interface ButtonProps {
  /**
   * If the button should be grey.
   */
  grey?: boolean;
}

interface ButtonSlots {
  /**
   * The content of the button - should include an accessible label.
   */
  default: () => void;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  grey: false,
});

defineSlots<ButtonSlots>();

const c = useBemClass("button");
</script>
