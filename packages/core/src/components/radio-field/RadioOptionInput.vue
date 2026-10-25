<template>
  <input :id="id" v-model="modelValue" type="radio" :name="groupId" :value="value" />
</template>

<script lang="ts" setup>
import { inject, useId } from "vue";
import { RadioFieldContextKey, RadioOptionContextKey } from "./hooks";
import { FieldContextKey } from "../field/hooks";
import { watchImmediate } from "@vueuse/core";

export interface RadioOptionInputProps {
  /**
   * The element id.
   */
  id?: string;
}

const props = withDefaults(defineProps<RadioOptionInputProps>(), {
  id: () => useId(),
});

const { sharedIds } = inject(FieldContextKey)!;

const { groupId, modelValue } = inject(RadioFieldContextKey)!;

const value = inject(RadioOptionContextKey)!;

watchImmediate(modelValue, (newModelValue) => {
  if (newModelValue === value.value) {
    sharedIds.set("focus", props.id);
  }
});
</script>
