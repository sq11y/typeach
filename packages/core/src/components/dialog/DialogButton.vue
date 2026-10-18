<template>
  <PeachyButton
    aria-haspopup="dialog"
    :aria-expanded="open"
    :disabled="disabled"
    :keyboard-shortcut="keyboardShortcut"
    :commandfor="sharedIds.get('panel')"
    :command="modal ? 'show-modal' : '--show-non-modal'"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { inject } from "vue";

import { DialogContextKey } from "./hooks";

import { PeachyButton, type ButtonProps } from "../button";

export interface DialogButtonProps extends Omit<ButtonProps, "type" | "loading"> {}

export interface DialogButtonSlots {
  /**
   * The button should include an [accessible label](/p/accessible-labels) and only contain non-interactive [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

defineProps<DialogButtonProps>();

defineSlots<DialogButtonSlots>();

const { sharedIds, open, modal } = inject(DialogContextKey)!;
</script>
