<template>
  <PeachyComboboxField v-model="modelValue" :multiselect="multiselect">
    <PeachyFieldLabel> Fruit </PeachyFieldLabel>

    <PeachyComboboxSelectionList>
      <PeachyComboboxSelectionListItem v-for="value in modelValue" :key="value">
        {{ value }}
      </PeachyComboboxSelectionListItem>
    </PeachyComboboxSelectionList>

    <PeachyComboboxInput />

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
  </PeachyComboboxField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  PeachyFieldLabel,
  PeachyComboboxField,
  PeachyComboboxInput,
  PeachyComboboxSelectionList,
  PeachyComboboxSelectionListItem,
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
