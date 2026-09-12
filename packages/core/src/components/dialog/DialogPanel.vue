<template>
  <dialog
    :id="id"
    ref="element"
    :role="modal === 'alert' ? 'alertdialog' : undefined"
    :aria-labelledby="sharedIds.get('heading')"
    :aria-describedby="sharedIds.get('description')"
    :closedby="lightDismiss ? 'any' : undefined"
    @command="onCommand"
    @toggle="open = $event.newState === 'open'"
  >
    <slot />
  </dialog>
</template>

<script lang="ts" setup>
import { watch, useId, useTemplateRef, inject } from "vue";
import { shareId } from "../../hooks";

import { DialogContextKey } from "./hooks";

export interface DialogPanelProps {
  /**
   * Allow the user to close the dialog by presing the <kbd>Escape</kbd> key or by clicking outside the panel.
   */
  lightDismiss?: true;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface DialogPanelSlots {
  /**
   * The content of the dialog.
   */
  default: () => void;
}

const props = withDefaults(defineProps<DialogPanelProps>(), {
  id: () => useId(),
});

defineSlots<DialogPanelSlots>();

const element = useTemplateRef("element");

const { sharedIds, open, modal } = inject(DialogContextKey)!;

shareId(sharedIds, "panel", () => props.id);

const onCommand = (event: CommandEvent) => {
  if (event.command === "--show-non-modal") {
    element.value?.show();
  }
};

watch(open, (newOpen) => {
  if (!element.value) {
    return;
  }

  if (newOpen) {
    if (modal?.value) {
      element.value.showModal();
    } else {
      element.value.show();
    }
  } else {
    element.value.close();
  }
});
</script>
