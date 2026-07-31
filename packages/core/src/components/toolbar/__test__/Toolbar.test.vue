<template>
  <PeachyToolbar :orientation="orientation" controls="id">
    <PeachyDownloadLink url="/logo.webp">{{ items[0] }}</PeachyDownloadLink>

    <template v-for="(item, i) in items" :key="i">
      <PeachyButton v-if="i !== 0">
        {{ parseInt(item) }}
      </PeachyButton>
    </template>
  </PeachyToolbar>

  <div id="id"></div>
</template>

<script lang="ts" setup>
import { PeachyToolbar, PeachyDownloadLink, PeachyButton } from "@typeach/core";

interface ToolbarTestProps {
  /**
   * The orientation of the toolbar.
   */
  orientation?: "vertical";

  /**
   * The mock data.
   */
  items: string[];
}

defineProps<ToolbarTestProps>();
</script>

<style>
[aria-orientation="vertical"] {
  display: grid;
}
</style>
