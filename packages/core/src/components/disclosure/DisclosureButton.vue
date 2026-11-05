<template>
  <PeachyButton
    v-if="!disclosureDisabled"
    :aria-expanded="open"
    :aria-controls="sharedIds.get('panel')"
    :disabled="disabled"
    :keyboard-shortcut="keyboardShortcut"
    v-bind="conditionalProps"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";

import { DisclosureContextKey } from "./hooks";

import { PeachyButton, type ButtonProps } from "../button";

export interface DisclosureButtonProps extends Omit<ButtonProps, "type"> {}

export interface DisclosureButtonSlots {
  /**
   * Should only contain [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

defineProps<DisclosureButtonProps>();

defineSlots<DisclosureButtonSlots>();

const { sharedIds, open, disabled: disclosureDisabled, popover } = inject(DisclosureContextKey)!;

const conditionalProps = computed(() => ({
  command: popover.value ? "toggle-popover" : "--toggle-disclosure",
  commandfor: sharedIds.get("panel"),
}));
</script>
