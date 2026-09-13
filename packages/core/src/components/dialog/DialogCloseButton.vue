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

export interface DialogCloseButtonProps extends Omit<ButtonProps, "type"> {}

export interface DialogCloseButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels).
   *
   * Also keep in mind that a button should only contain [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

defineProps<DialogCloseButtonProps>();

defineSlots<DialogCloseButtonSlots>();

const { sharedIds } = inject(DialogContextKey)!;
</script>
