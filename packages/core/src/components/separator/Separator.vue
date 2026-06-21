<template>
  <hr :aria-orientation="orientation" />
</template>

<script lang="ts" setup>
import type { Orientation } from "../../utils";

export interface SeparatorProps {
  /**
   * The visual orientation of the separator.
   */
  orientation?: Orientation;
}

withDefaults(defineProps<SeparatorProps>(), {
  orientation: "horizontal",
});
</script>
