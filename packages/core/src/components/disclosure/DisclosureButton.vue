<template>
  <PeachyButton
    v-if="!disclosureDisabled"
    :aria-expanded="open"
    :aria-controls="panelId"
    :disabled="disabled"
    v-bind="conditionalProps"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { useContext } from "../../hooks";
import { DisclosureKey } from "./hooks";

import { PeachyButton, type ButtonProps } from "../button";
import { computed } from "vue";

export interface DisclosureButtonProps extends Omit<ButtonProps, "type"> {}

export interface DisclosureButtonSlots {
  /**
   * The content of the button - should include an [accessible label](/p/labels).
   */
  default: (data: void) => void;
}

defineProps<DisclosureButtonProps>();

defineSlots<DisclosureButtonSlots>();

const { panelId, open, disabled: disclosureDisabled, popover } = useContext(DisclosureKey);

const conditionalProps = computed(() => {
  if (popover.value) {
    return {
      command: "toggle-popover",
      commandfor: panelId.value,
    };
  } else {
    return {
      onClick() {
        open.value = !open.value;
      },
    };
  }
});
</script>
