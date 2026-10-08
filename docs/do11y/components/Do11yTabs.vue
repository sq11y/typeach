<template>
  <PeachyTabs as="div" class="tabs">
    <div
      ref="element"
      class="tabslist-wrapper"
      :tabindex="!arrivedState.left || !arrivedState.right ? 0 : -1"
    >
      <PeachyTabsList>
        <PeachyTabsButton
          v-for="tab of Object.keys(tabs)"
          :key="tab"
          :value="tab"
          :data-label="tab"
        >
          <span class="label">
            {{ tab }}
          </span>
        </PeachyTabsButton>
      </PeachyTabsList>
    </div>

    <PeachyTabsPanel
      v-for="[tab, component] of Object.entries(tabs)"
      :key="tab"
      :value="tab"
      class="prose"
    >
      <component :is="component" />
    </PeachyTabsPanel>
  </PeachyTabs>
</template>

<script lang="ts" setup generic="T extends string">
import { type Component, useTemplateRef } from "vue";
import { useEventListener, useScroll } from "@vueuse/core";
import { PeachyTabs, PeachyTabsList, PeachyTabsButton, PeachyTabsPanel } from "@typeach/core";

export interface TabsProps<Tabs extends string> {
  /**
   * The tabs.
   */
  tabs: Record<Tabs, Component>;
}

export type TabsSlots<Tabs extends string> = Record<Tabs, () => void>;

defineProps<TabsProps<T>>();

defineSlots<TabsSlots<T>>();

const element = useTemplateRef("element");

const { arrivedState, measure } = useScroll(element);

useEventListener("resize", () => {
  measure();
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.tabslist-wrapper {
  margin-block: var(--spacing-xxl) var(--spacing-xl);
  padding: var(--spacing-m);
  margin-inline: calc(-1 * var(--spacing-m));

  overflow-inline: auto;
  scrollbar-width: none;
}

[role="tablist"] {
  @include utils.dock;
  flex-wrap: nowrap;
  gap: var(--spacing-xs);

  border-block-end: var(--border);
}

[role="tab"] {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  border: var(--border);
  border-block-end: 0;

  padding-block: var(--relative-spacing-m);
  padding-inline: var(--relative-spacing-xxl);
  background-color: var(--bg);

  min-inline-size: max-content;
  position: relative;

  .label {
    color: transparent;
  }

  &::after {
    position: absolute;
    content: attr(data-label) / "";
    padding-block: inherit;
    inset: 0;

    @include utils.transition(font-weight);
  }
}

[role="tab"][aria-selected="true"] {
  margin-block-end: calc(-2 * var(--border-width));
  padding-block-end: calc(var(--relative-spacing-m) + (2 * var(--border-width)));

  &::after {
    font-weight: var(--font-weight-medium);
  }

  &::before {
    content: "";
    position: absolute;
    inset-block-end: 0.175rem;
    inset-inline: 0;
    margin: 0 auto;

    background-color: var(--green-60);
    block-size: 8px;
    inline-size: 1rem;

    border-radius: 999rem 0;
  }
}

[role="tab"][aria-selected="false"] {
  border-color: var(--grey-10);
  background-color: var(--grey-10);

  @include utils.transition(background-color, border-color);

  &:hover {
    background-color: var(--grey-20);
    border-color: var(--grey-20);
  }
}
</style>
