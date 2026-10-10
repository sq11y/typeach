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

<style lang="scss">
@use "@typeach/theme/utils";

.button {
  @include utils.dock;
  gap: var(--relative-spacing-s);

  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-l) calc(var(--relative-spacing-l) * 0.875);

  border: var(--border);
  border-radius: var(--border-radius);

  background-color: var(--bg);
  color: var(--grey-80);

  @include utils.transition("color, background-color, border-color");

  cursor: pointer;

  * {
    cursor: pointer;
  }

  &:active {
    background-color: var(--grey-10);
    border-color: var(--grey-60);
  }

  @include utils.hover {
    border-color: var(--grey-60);
  }
}

.button--grey {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  background-color: var(--grey-30);
  border-color: var(--grey-30);

  &:active {
    background-color: var(--grey-50);
    border-color: var(--grey-50);
    color: var(--grey-80);
  }

  @include utils.hover {
    background-color: var(--grey-40);
    border-color: var(--grey-40);
    color: var(--grey-80);
  }
}
</style>
