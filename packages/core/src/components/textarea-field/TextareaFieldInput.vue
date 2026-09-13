<template>
  <textarea
    :id="id"
    v-model="value"
    :aria-invalid="hasErrors"
    :aria-describedby="[errorIds, descriptionIds].flat().join(' ') || undefined"
    :aria-labelledby="sharedIds.get('label')"
    :disabled="disabled"
  />
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { FieldContextKey } from "../field/hooks";
import { shareId } from "../../hooks";

export interface TextareaFieldInputProps {
  /**
   * If the input should be disabled.
   */
  disabled?: boolean;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

const props = withDefaults(defineProps<TextareaFieldInputProps>(), {
  id: () => useId(),
  rows: 2,
});

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "input", () => props.id);

/**
 * The text value.
 */
const value = defineModel<string | undefined>();
</script>
