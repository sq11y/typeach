<template>
  <button
    ref="element"
    :aria-disabled="!!disabled || !!loading"
    :aria-keyshortcuts="keyboardShortcut"
    :aria-busy="loading"
    :type="type"
    :tabindex="disabled === 'without-focus' ? -1 : undefined"
    @click="onClick"
    @keydown="onKeyDown"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import hotkeys from "hotkeys-js";

import { useAttrs, useTemplateRef, type ButtonHTMLAttributes } from "vue";

import { optionalInject, provideElement } from "../../hooks";

import { ToolbarContextKey } from "../toolbar";

export interface ButtonProps {
  /**
   * The `type` attribute for the button.
   */
  type?: ButtonHTMLAttributes["type"];

  /**
   * If the button should be disabled. If you want it to also be taken out of the tab order, `"without-focus"` can be used.
   */
  disabled?: boolean | "without-focus";

  /**
   * If the button is loading.
   */
  loading?: boolean;

  /**
   * The available [hotkeys-js](https://github.com/jaywcjlove/hotkeys-js) shortcuts to trigger the button.
   */
  keyboardShortcut?: string;
}

export interface ButtonEmits {
  /**
   * Only fired when the button is enabled.
   */
  click: [MouseEvent];
}

export interface ButtonSlots {
  /**
   * The button should include an [accessible label](/p/accessible-labels) and only contain non-interactive [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  disabled: undefined,
  keyboardShortcut: undefined,
});

const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const element = useTemplateRef("element");

const attrs = useAttrs();

const { onKeyDown, navigateTo } = optionalInject(ToolbarContextKey);

provideElement("toolbar", element);

const onClick = (event: MouseEvent) => {
  navigateTo?.(element.value!);

  if (props.disabled || attrs["aria-readonly"] || props.loading) {
    event.preventDefault();
  } else {
    emit("click", event);
  }
};

hotkeys("*", (event) => {
  if (!props.keyboardShortcut) {
    return;
  }

  const pressedKeys = hotkeys.getPressedKeyString();

  for (const shortcut of props.keyboardShortcut.split(",")) {
    const keys = shortcut.split("+").map((key) => key.trim());

    if (keys.every((key) => pressedKeys.includes(key))) {
      event.preventDefault();
      element.value?.click();
      return false;
    }
  }
});
</script>
