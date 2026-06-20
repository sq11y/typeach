<template>
  <PeachyButton
    :id="id"
    :aria-checked="modelValue"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ') || undefined"
    :aria-invalid="hasErrors ? true : undefined"
    :aria-labelledby="`${id}-label`"
    :disabled="disabled"
    role="switch"
    @click="modelValue = !modelValue"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { useSwitchField } from "./hooks";
import { useField } from "../field/hooks";
import { PeachyButton } from "../button";

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

defineProps<SwitchFieldSwitchButtonProps>();

defineSlots<SwitchFieldSwitchButtonSlots>();

const { modelValue } = useSwitchField();

const { id, hasErrors, errorIds, descriptionIds } = useField();
</script>
