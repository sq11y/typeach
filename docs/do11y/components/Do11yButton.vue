<template>
  <component :is="components[type]" :class="c({ grey })">
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

const components = {
  button: PeachyButton,
  "switch-button": PeachySwitchButton,
};
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.button {
  @include utils.dock(var(--relative-spacing-s));

  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-l) calc(var(--relative-spacing-l) * 0.875);

  border: var(--border);
  border-radius: var(--border-radius);

  background-color: var(--bg);
  color: var(--grey-80);

  @include utils.transition("color, background-color, border-color");

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

.button--grey {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  background-color: var(--grey-30);
  border-color: var(--grey-30);

  @include utils.enabled {
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
}
</style>
