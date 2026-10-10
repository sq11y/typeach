<template>
  <PeachyTabs>
    <PeachyTabsList :selection-follows-focus="selectionFollowsFocus" :orientation="orientation">
      <PeachyTabsButton
        v-for="item of items"
        :key="item"
        :value="item"
        :disabled="disabled && item === '5'"
      >
        {{ item }}
      </PeachyTabsButton>
    </PeachyTabsList>

    <PeachyTabsPanel v-for="item of items" :key="item" :value="item">
      Panel for {{ item }}
    </PeachyTabsPanel>
  </PeachyTabs>
</template>

<script lang="ts" setup>
import { PeachyTabs, PeachyTabsList, PeachyTabsButton, PeachyTabsPanel } from "@typeach/core";

export interface TabsTestProps {
  /**
   * If selection should follow focus.
   */
  selectionFollowsFocus?: boolean;

  /**
   * The orientation of the tabs.
   */
  orientation?: "vertical";

  /**
   * The mock data.
   */
  items: string[];

  /**
   * If a tab should be disabled.
   */
  disabled?: boolean;
}

defineProps<TabsTestProps>();
</script>

<style scoped>
[role="tablist"] {
  display: flex;
  flex-wrap: nowrap;
}

[role="tablist"][aria-orientation="vertical"] {
  flex-direction: column;
}

*:focus-visible {
  outline: 4px solid red;
}
</style>
