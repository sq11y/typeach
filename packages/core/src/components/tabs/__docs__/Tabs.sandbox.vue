<!-- prettier-ignore -->
<template>
  <PeachyTabs>
    <PeachyTabsList>
      <PeachyTabsButton
        v-for="value of values"
        :key="value"
        :value="value.toLowerCase()"
      >
        {{ value }}
      </PeachyTabsButton>
    </PeachyTabsList>

    <PeachyTabsPanel
      v-for="value of values"
      :key="value"
      :value="value.toLowerCase()"
    >
      A list of {{ value.toLowerCase() }}
    </PeachyTabsPanel>
  </PeachyTabs>
</template>

<script lang="ts" setup>
/* prettier-ignore */
import {
  PeachyTabs,
  PeachyTabsList,
  PeachyTabsButton,
  PeachyTabsPanel
} from "@typeach/core";

const values = ["Tasks", "Events"];
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border-color: var(--grey-60);
  --border: var(--border-shape) var(--border-color);
  --invisible-border: var(--border-shape) transparent;
}

[role="tablist"] {
  @include utils.center-flex(var(--spacing-xs));
}

[role="tab"] {
  font-size: var(--font-size-m);
  line-height: var(--line-height-m);

  padding-block: var(--relative-spacing-s) var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-xl);

  /**
   * Hidden border to ensure the shape
   * of the tab is defined in `forced-colors` mode.
   */
  border: var(--invisible-border);
  border-bottom: 0;

  border-radius: var(--border-radius) var(--border-radius) 0 0;

  background-color: var(--grey-10);
  color: var(--grey-70);

  @include utils.transition("background-color, color, border-color");

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--grey-10);
      border-color: var(--grey-60);
    }

    @include utils.hover {
      background-color: var(--brown-20);
      color: var(--brown-70);
    }
  }
}

[role="tab"][aria-selected="true"] {
  border-color: var(--border-color);

  padding-block-end: calc(var(--relative-spacing-xs) + 1px);
  margin-block-end: -1px;

  background-color: var(--bg);
  color: var(--fg);
}

[role="tabpanel"] {
  width: 15rem;
  padding: var(--spacing-m) var(--spacing-l);

  border: var(--border);
  border-radius: var(--border-radius);
  border-start-start-radius: 0;
}

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
