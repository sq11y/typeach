<template>
  <PeachySelectField v-model="modelValue" :multiselect="multiselect">
    <PeachyFieldLabel> Fruit </PeachyFieldLabel>

    <PeachySelectButton>
      {{ modelValue.join(", ") }}
    </PeachySelectButton>

    <PeachyListboxInput v-model="modelValue" multiselect>
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
  </PeachySelectField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  PeachyFieldLabel,
  PeachySelectField,
  PeachySelectButton,
  PeachyListboxInput,
  PeachyListboxOption,
} from "@typeach/core";

interface ListboxFieldTestProps {
  /**
   * If the test should run a multiselect.
   */
  multiselect?: boolean;

  /**
   * The mock data.
   */
  options: string[];
}

defineProps<ListboxFieldTestProps>();

const modelValue = ref(["3"]);
</script>

<style>
[data-active="true"] {
  background-color: palegoldenrod;
}

[aria-selected="true"] {
  background-color: greenyellow;

  &[data-active="true"] {
    background-color: green;
  }
}
</style>
