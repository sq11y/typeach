<template>
  <PeachyButton
    :id="id"
    :aria-checked="modelValue"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ') || undefined"
    :aria-invalid="hasErrors ? true : undefined"
    :aria-labelledby="sharedIds.get('label')"
    :disabled="disabled"
    :keyboard-shortcut="keyboardShortcut"
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

import { PeachyButton, type ButtonProps } from "../button";
import { shareId } from "../../hooks";

export interface SwitchTrackProps extends Omit<ButtonProps, "type" | "disabled"> {
  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface SwitchTrackSlots {
  /**
   * The indicator.
   */
  default: () => void;
}

const props = withDefaults(defineProps<SwitchTrackProps>(), {
  id: () => useId(),
});

defineSlots<SwitchTrackSlots>();

const { modelValue, disabled } = inject(SwitchFieldContextKey)!;

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "input", () => props.id);
</script>
