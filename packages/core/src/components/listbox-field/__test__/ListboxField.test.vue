<template>
  <PeachyListboxField :disabled="disabled">
    <PeachyFieldLabel>Fruits</PeachyFieldLabel>

    <PeachyListboxInput v-model="modelValue">
      <template v-for="(option, i) of options" :key="option">
        <PeachyListboxOption v-if="i <= 4" :value="option" :label="option">
          {{ option }}
        </PeachyListboxOption>
      </template>

      <PeachyListboxGroup>
        <PeachyListboxGroupLabel>Group</PeachyListboxGroupLabel>

        <template v-for="(option, i) of options" :key="option">
          <PeachyListboxOption v-if="i > 4" :value="option" :label="option">
            {{ option }}
          </PeachyListboxOption>
        </template>
      </PeachyListboxGroup>
    </PeachyListboxInput>
  </PeachyListboxField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  PeachyListboxField,
  PeachyFieldLabel,
  PeachyListboxInput,
  PeachyListboxGroup,
  PeachyListboxGroupLabel,
  PeachyListboxOption,
} from "@typeach/core";

interface ListboxFieldTestProps {
  /**
   * The mock data.
   */
  options: string[];

  /**
   * If the listbox is disabled.
   */
  disabled?: boolean;
}

defineProps<ListboxFieldTestProps>();

const modelValue = ref(["3"]);
</script>
