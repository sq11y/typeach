<template>
  <input
    :id="id"
    v-model="value"
    :type="search ? 'search' : 'text'"
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

export interface TextFieldInputProps {
  /**
   * If the input is used for a search.
   */
  search?: boolean;

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

const props = withDefaults(defineProps<TextFieldInputProps>(), {
  id: () => useId(),
});

const { sharedIds, hasErrors, errorIds, descriptionIds } = inject(FieldContextKey)!;

shareId(sharedIds, "input", () => props.id);

/**
 * The text value.
 */
const value = defineModel<string | undefined>();
</script>
