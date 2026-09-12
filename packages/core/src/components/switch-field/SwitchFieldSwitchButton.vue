<template>
  <PeachyButton
    :id="id"
    :aria-checked="modelValue"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ') || undefined"
    :aria-invalid="hasErrors ? true : undefined"
    :aria-labelledby="sharedIds.get('label')"
    :disabled="disabled"
    role="switch"
    @click="modelValue = !modelValue"
  >
    <slot />
  </PeachyButton>
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";

import { FieldContextKey } from "../field/hooks";
import { SwitchFieldContextKey } from "./hooks";

import { PeachyButton } from "../button";
import { shareId } from "../../hooks";

export interface SwitchFieldSwitchButtonProps {
  /**
   * If the button should be disabled.
   */
  disabled?: boolean;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface SwitchFieldSwitchButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

const props = withDefaults(defineProps<SwitchFieldSwitchButtonProps>(), {
  id: () => useId(),
});

defineSlots<SwitchFieldSwitchButtonSlots>();

const { modelValue } = inject(SwitchFieldContextKey)!;

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "switch-button", () => props.id);
</script>
