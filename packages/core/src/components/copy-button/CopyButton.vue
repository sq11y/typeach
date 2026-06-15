<template>
  <PeachyVisuallyHidden aria-live="polite">
    <slot v-if="isCopying" :is-copying="isCopying" />
  </PeachyVisuallyHidden>

  <PeachyButton v-bind="$attrs" @click="copy">
    <slot :is-copying="isCopying" />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import { PeachyButton } from "../button";

import { PeachyVisuallyHidden } from "../visually-hidden";

export interface CopyButtonProps {
  /**
   * The content that is to be copied on click.
   */
  content?: ClipboardItem[] | ClipboardItem | string;

  /**
   * The event triggered when copying - only fired when no content is provided.
   */
  onCopy?: (event: MouseEvent) => Promise<void> | void;
}

export interface CopyButtonEmits {
  /**
   * The event triggered when copying - only fired when no content is provided.
   */
  copy: [event: MouseEvent];
}

export interface CopyButtonSlots {
  /**
   * The content of the button - should include an accessible label.
   *
   * The label should change when `isCopying` is `true` to let the user know the copy was successful.
   */
  default: (data: { isCopying: boolean }) => void;
}

const isCopying = ref(false);

const props = defineProps<CopyButtonProps>();

defineEmits<CopyButtonEmits>();

defineSlots<CopyButtonSlots>();

const clipboardItems = computed(() => {
  if (!props.content) {
    return [];
  }

  if (typeof props.content === "string") {
    return [new ClipboardItem({ "text/plain": props.content })];
  } else {
    return Array.isArray(props.content) ? props.content : [props.content];
  }
});

/**
 * Incase you try this on Safari mobile,
 * `navigator.clipboard.write` is expected
 * to not work for localhost.
 *
 * @see https://stackoverflow.com/a/72679789
 */
const copy = async (event: MouseEvent) => {
  if (!props.content) {
    await props.onCopy?.(event);
  } else {
    await navigator.clipboard.write(clipboardItems.value);
  }

  isCopying.value = true;

  setTimeout(() => {
    isCopying.value = false;
  }, 4000);
};
</script>
