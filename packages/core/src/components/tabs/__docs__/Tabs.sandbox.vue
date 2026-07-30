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
      {{ value }} panel
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

const values = ["Sea", "Ocean"];
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
  --invisible-border: var(--border-shape) transparent;
}

/* ===== Tabs ===== */

[role="tablist"] {
  @include utils.dock(var(--spacing-xs));
}

[role="tab"] {
  padding: var(--relative-spacing-xxs) var(--relative-spacing-xl);

  /**
   * Hidden border to ensure the shape
   * of the tab is defined in `forced-colors` mode.
   */
  border: var(--invisible-border);
  border-radius: var(--border-radius);

  background-color: transparent;

  @include utils.transition("background-color, color, border-color");

  @include utils.enabled {
    cursor: pointer;
  }
}

[role="tab"][aria-selected="false"] {
  text-decoration: underline;

  @include utils.enabled {
    &:active {
      background-color: var(--grey-30);
      border-color: var(--grey-30);
    }

    @include utils.hover {
      border-color: var(--grey-70);
    }
  }
}

[role="tab"][aria-selected="true"] {
  background-color: var(--turquoise-40);
  color: var(--turquoise-80);

  @include utils.enabled {
    &:active {
      background-color: var(--turquoise-50);
      border-color: var(--turquoise-70);
    }

    @include utils.hover {
      border-color: var(--turquoise-70);
    }
  }
}

/* ===== Tab panel ===== */

[role="tabpanel"] {
  inline-size: 15rem;
  padding: var(--spacing-s) var(--spacing-m);

  background-color: var(--grey-10);

  border: var(--invisible-border);
  border-radius: var(--border-radius);

  margin-block-start: var(--spacing-m);
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
