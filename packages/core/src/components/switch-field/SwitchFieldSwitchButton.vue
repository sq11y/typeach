<template>
  <button
    :id="id"
    :aria-checked="modelValue"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ') || undefined"
    :aria-invalid="hasErrors ? true : undefined"
    :aria-labelledby="`${id}-label`"
    :aria-disabled="disabled"
    role="switch"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { useSwitchField } from "./hooks";
import { useField } from "../field/hooks";

export interface SwitchFieldSwitchButtonProps {
  /**
   * If the button should be disabled.
   */
  disabled?: boolean;
}

export interface SwitchFieldSwitchButtonSlots {
  /**
   * The content of the button.
   */
  default: (data: void) => void;
}

const props = defineProps<SwitchFieldSwitchButtonProps>();

defineSlots<SwitchFieldSwitchButtonSlots>();

const { modelValue } = useSwitchField();

const { id, hasErrors, errorIds, descriptionIds } = useField();

const onClick = () => {
  if (!props.disabled) {
    modelValue.value = !modelValue.value;
  }
};
</script>
