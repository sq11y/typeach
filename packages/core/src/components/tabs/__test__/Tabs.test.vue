<template>
  <PeachyTabs>
    <PeachyTabsList :selection-follows-focus="selectionFollowsFocus" :orientation="orientation">
      <PeachyTabsButton v-for="value of values" :key="value" :value="value.toLowerCase()">
        {{ value }}
      </PeachyTabsButton>
    </PeachyTabsList>

    <PeachyTabsPanel v-for="value of values" :key="value" :value="value.toLowerCase()">
      A list of {{ value.toLowerCase() }}
    </PeachyTabsPanel>
  </PeachyTabs>
</template>

<script lang="ts" setup>
import { PeachyTabs, PeachyTabsList, PeachyTabsButton, PeachyTabsPanel } from "@typeach/core";

export interface TabsTestProps {
  selectionFollowsFocus?: boolean;
  orientation?: "vertical";
}

defineProps<TabsTestProps>();

const values = ["Tasks", "Events", "Notes", "Photos"] as const;
</script>

<style scoped>
[role="tablist"] {
  display: flex;
  flex-wrap: none;
}

[role="tablist"][aria-orientation="vertical"] {
  flex-direction: column;
}

*:focus-visible {
  outline: 4px solid red;
}
</style>
