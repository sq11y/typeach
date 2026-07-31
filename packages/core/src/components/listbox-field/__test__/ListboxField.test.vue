<template>
  <PeachyListboxField>
    <PeachyFieldLabel>Fruits</PeachyFieldLabel>

    <PeachyListboxInput v-model="value" multiselect>
      <template v-for="(item, i) of items" :key="item">
        <PeachyListboxOption v-if="i <= 4" :value="item">
          {{ item }}
        </PeachyListboxOption>
      </template>

      <PeachyListboxGroup>
        <PeachyListboxGroupTitle>Group</PeachyListboxGroupTitle>

        <template v-for="(item, i) of items" :key="item">
          <PeachyListboxOption v-if="i > 4" :value="item">
            {{ item }}
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
  PeachyListboxGroup,
  PeachyListboxInput,
  PeachyListboxOption,
  PeachyFieldLabel,
  PeachyListboxGroupTitle,
} from "@typeach/core";

interface ListboxFieldTestProps {
  /**
   * The mock data.
   */
  items: string[];
}

defineProps<ListboxFieldTestProps>();

const value = ref(["vegetable"]);
</script>
