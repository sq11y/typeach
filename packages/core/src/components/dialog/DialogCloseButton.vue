<template>
  <PeachyButton
    :disabled="disabled"
    :keyboard-shortcut="keyboardShortcut"
    :commandfor="sharedIds.get('panel')"
    command="close"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { DialogContextKey } from "./hooks";

import { PeachyButton, type ButtonProps } from "../button";

export interface DialogCloseButtonProps extends Omit<ButtonProps, "type" | "loading"> {}

export interface DialogCloseButtonSlots {
  /**
   * The button should include an [accessible label](/p/accessible-labels) and only contain non-interactive [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

defineProps<DialogCloseButtonProps>();

defineSlots<DialogCloseButtonSlots>();

const { sharedIds } = inject(DialogContextKey)!;
</script>
