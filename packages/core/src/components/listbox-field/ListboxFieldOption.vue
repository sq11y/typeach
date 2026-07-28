<template>
  <div
    ref="element"
    :aria-selected="modelValue.includes(value)"
    :aria-disabled="disabled"
    :data-value="value"
    role="option"
    tabindex="-1"
    @click="onClick"
    @keydown.enter="onEnter"
    @keydown.space.prevent="disabled ? undefined : onSpace(value, $event)"
    @keydown="onKeyDown(value, $event)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { provideElement, useContext } from "../../hooks";

import { ListboxFieldInjectionKey } from "./hooks";

export interface ListboxFieldOptionProps {
  /**
   * The value of the option.
   */
  value: string;

  /**
   * If the option should be disabled or not.
   */
  disabled?: boolean;
}

export interface ListboxFieldOptionSlots {
  /**
   * The content of the option should include an [accessible label](/p/accessible-labels).
   */
  default: (data: void) => void;
}

const props = withDefaults(defineProps<ListboxFieldOptionProps>(), {
  disabled: false,
});

defineSlots<ListboxFieldOptionSlots>();

const element = useTemplateRef("element");

provideElement("listbox", element);

const { onKeyDown, onSpace, moveTo, modelValue, multiselect } =
  useContext(ListboxFieldInjectionKey);

const onClick = () => {
  moveTo(element.value!);

  if (props.disabled) {
    return;
  }

  if (!modelValue.value.includes(props.value)) {
    modelValue.value = multiselect ? [...modelValue.value, props.value] : [props.value];
  } else {
    modelValue.value = modelValue.value.filter((v) => v !== props.value);
  }
};

const onEnter = () => {
  if (props.disabled) {
    return;
  }

  if (!modelValue.value.includes(props.value)) {
    modelValue.value = multiselect ? [...modelValue.value, props.value] : [props.value];
  }
};
</script>
