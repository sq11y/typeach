<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, computed } from "vue";
import { useSharedIds } from "../../hooks";

import { DialogContextKey } from "./hooks";

export interface DialogProps {
  /**
   * If the dialog should be modal. Meaning only it and it's content can be interacted with.
   *
   * If set to `"alert"` the dialog will be modal _and_ get the [ARIA alertdialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role).
   */
  modal?: boolean | "alert";
}

export interface DialogSlots {
  /**
   * The dialog button and panel.
   */
  default: () => void;
}

const props = defineProps<DialogProps>();

defineSlots<DialogSlots>();

const sharedIds = useSharedIds();

/**
 * If the dialog is open or not.
 */
const open = defineModel<boolean>({ default: false });

provide(DialogContextKey, {
  sharedIds,
  open,
  modal: computed(() => props.modal),
});
</script>
