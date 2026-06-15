<template>
  <button
    ref="element"
    :aria-disabled="disabled === true ? true : undefined"
    :disabled="disabled === 'without-focus' ? true : undefined"
    :type="type"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";

export interface ButtonProps {
  /**
   * The `type` attribute for the button.
   *
   * @default "button"
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
   * The content of the button - should include an accessible label.
   */
  default: (data: void) => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  disabled: undefined,
});

const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
