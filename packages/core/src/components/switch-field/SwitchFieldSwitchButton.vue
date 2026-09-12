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
import { inject } from "vue";

import { FieldContextKey } from "../field/hooks";
import { SwitchFieldContextKey } from "./hooks";

import { PeachyButton } from "../button";

export interface SwitchFieldSwitchButtonProps {
  /**
   * If the button should be disabled.
   */
  disabled?: boolean;
}

export interface SwitchFieldSwitchButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

defineProps<SwitchFieldSwitchButtonProps>();

defineSlots<SwitchFieldSwitchButtonSlots>();

const { modelValue } = inject(SwitchFieldContextKey)!;

const { id, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;
</script>
