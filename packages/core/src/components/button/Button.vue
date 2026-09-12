<template>
  <button
    ref="element"
    :aria-disabled="disabled === true ? true : undefined"
    :disabled="disabled === 'without-focus' ? true : undefined"
    :type="type"
    @click="onClick"
    @keydown="onKeyDown"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { useTemplateRef, type ButtonHTMLAttributes } from "vue";

import { optionalInject, provideElement } from "../../hooks";

import { ToolbarContextKey } from "../toolbar";

export interface ButtonProps {
  /**
   * The `type` attribute for the button.
   */
  type?: ButtonHTMLAttributes["type"];

  /**
   * If the button should be disabled.
   *
   * If you want the disabled button to be taken out of the tab order, you can set this to `"without-focus"`.
   */
  disabled?: boolean | "without-focus";
}

export interface ButtonEmits {
  /**
   * The click event - only fired when the button is enabled.
   */
  click: [MouseEvent];
}

export interface ButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels).
   *
   * Also keep in mind that a button should only contain [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  default: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  disabled: undefined,
});

const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const element = useTemplateRef("element");

const { onKeyDown, moveTo } = optionalInject(ToolbarContextKey);

provideElement("toolbar", element);

const onClick = (event: MouseEvent) => {
  moveTo?.(element.value!);

  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
