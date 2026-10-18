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
  --border-width: 1px;
  --border-shape: var(--border-width) solid;
  --border: var(--border-shape) var(--grey-40);

  --transition-duration: 0.15s;
}

/* ===== Tabs ===== */

[role="tablist"] {
  @include utils.dock;
  gap: var(--spacing-xxs);
}

[role="tab"] {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  border: var(--border);
  border-block-end: 0;

  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-xxl);

  background-color: var(--bg);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out,
      color var(--transition-duration) ease-in-out;
  }
}

[role="tab"][aria-selected="true"] {
  margin-block-end: calc(-2 * var(--border-width));
  padding-block-end: calc(var(--relative-spacing-xs) + (2 * var(--border-width)));
}

[role="tab"][aria-selected="false"] {
  border-color: var(--grey-10);
  background-color: var(--grey-10);

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      border-color: var(--turquoise-20);
      background-color: var(--turquoise-20);
      color: var(--turquoise-fg);
    }
  }

  &:active:not([aria-disabled="true"]) {
    background-color: var(--turquoise-40);
    border-color: var(--turquoise-40);
    color: var(--turquoise-fg);
  }
}

[role="tab"][aria-disabled="true"] {
  background-color: var(--grey-30);
  border-color: var(--grey-30);
  color: var(--grey-70);

  @media (forced-colors: active) {
    color: GrayText;
    border-color: GrayText;
  }
}

/* ===== Panel ===== */

[role="tabpanel"] {
  inline-size: 15rem;
  padding: var(--spacing-s) var(--spacing-m);

  border: var(--border);
  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
