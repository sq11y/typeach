<template>
  <PeachyTabs as="div" class="tabs">
    <PeachyTabsList>
      <PeachyTabsButton
        v-for="quote of quotesFromUltraProcessedPeopleByChrisVanTulleken"
        :key="quote.title"
        :value="quote.title"
      >
        {{ quote.title }}
      </PeachyTabsButton>
    </PeachyTabsList>

    <PeachyTabsPanel
      v-for="quote of quotesFromUltraProcessedPeopleByChrisVanTulleken"
      :key="quote.title"
      :value="quote.title"
    >
      "{{ quote.quote }}"
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

/* prettier-ignore */
const quotesFromUltraProcessedPeopleByChrisVanTulleken = [
  {
    title: "Lunch",
    quote: "Here is the inexorable logic of all industrial food: to reduce the time workers require for a meal.",
  },
  {
    title: "Growth",
    quote: "A food that is consumed less will never sell as well as a food that's consumed more.",
  },
];
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

.tabs {
  min-block-size: 14rem;
}

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
