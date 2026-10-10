<template>
  <PeachyCopyButton v-slot="{ isCopying }" content="Hello world." :disabled="disabled">
    {{ isCopying ? "Copied" : "Copy" }}
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";

export interface CopyButtonTestProps {
  /**
   * If the button should be disabled.
   */
  disabled?: boolean | "without-focus";
}

defineProps<CopyButtonTestProps>();
</script>
