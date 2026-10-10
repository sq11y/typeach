<!-- prettier-ignore -->
<template>
  <PeachyButton :disabled="disabled" @click="onClick">
    Button
  </PeachyButton>

  <div v-if="clicked">
    Clicked!
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PeachyButton } from "@typeach/core";

export interface ButtonTestProps {
  /**
   * If the button should be disabled.
   */
  disabled?: boolean | "without-focus";
}

defineProps<ButtonTestProps>();

const clicked = ref(false);

const onClick = () => {
  clicked.value = true;
};
</script>
