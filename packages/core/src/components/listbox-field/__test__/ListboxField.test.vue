<template>
  <PeachyListboxField>
    <PeachyFieldLabel>Fruits</PeachyFieldLabel>

    <PeachyListboxInput v-model="value" multiselect>
      <PeachyListboxOption value="1">1</PeachyListboxOption>
      <PeachyListboxOption value="2">2</PeachyListboxOption>

      <PeachyListboxGroup>
        <PeachyListboxGroupTitle>First group</PeachyListboxGroupTitle>
        <PeachyListboxOption value="3">3</PeachyListboxOption>
        <PeachyListboxOption value="4">4</PeachyListboxOption>
      </PeachyListboxGroup>

      <PeachyListboxGroup>
        <PeachyListboxGroupTitle>Second group</PeachyListboxGroupTitle>
        <PeachyListboxOption value="5">5</PeachyListboxOption>
        <PeachyListboxOption value="6">6</PeachyListboxOption>
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

const value = ref(["vegetable"]);
</script>
