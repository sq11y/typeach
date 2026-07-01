<template>
  <component :is="components[type]" :class="c()">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PeachyButton, PeachySwitchButton, useBemClass } from "@typeach/core";

interface ButtonProps {
  /**
   * The underlying component to use.
   */
  type?: "button" | "switch-button";
}

interface ButtonSlots {
  /**
   * The content of the button - should include an accessible label.
   */
  default: (data: void) => void;
}

withDefaults(defineProps<ButtonProps>(), {
  type: "button",
});

defineSlots<ButtonSlots>();

const c = useBemClass("button");

const components = {
  button: PeachyButton,
  "switch-button": PeachySwitchButton,
};
</script>

<style lang="scss">
@use "@typeach/theme/utils";

button:not([commandfor="nav"]) {
  @include utils.center-flex;
  gap: var(--relative-spacing-s);

  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-l);

  border: var(--border);
  border-radius: var(--border-radius);

  background-color: var(--bg);
  color: var(--grey-70);

  @include utils.transition("background-color, border-color");

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--grey-10);
      border-color: var(--grey-60);
    }

    @include utils.hover {
      border-color: var(--grey-60);
    }
  }

  @include utils.disabled {
    background-color: var(--grey-20);
  }
}
</style>
