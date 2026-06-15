<template>
  <div v-aria-labelledby="label" data-testid="target-element" />

  <button type="button" @click="label = undefined">Clear label</button>
  <button type="button" @click="label = 'Another label'">Set new label</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { vAriaLabelledby } from "../";

const label = ref<string | undefined>("A label");
</script>
