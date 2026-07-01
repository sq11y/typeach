<template>
  <h4>{{ title }}</h4>

  <div :class="c({ events })">
    <div v-for="slot of meta" :key="slot.name" :class="c('item')">
      <h5>
        {{ slot.name }}
      </h5>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div :class="c('description')" v-html="slot.description" />

      <code v-if="slot.type !== 'void'">{{ slot.type }}</code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import type { Meta } from "do11y";

export interface MetaProps {
  /**
   * The section title.
   */
  title: string;

  /**
   * The emits or slots.
   */
  meta: Meta["slots"] | Meta["events"];

  /**
   * If this section is for events.
   */
  events?: boolean;
}

defineProps<MetaProps>();

const c = useBemClass("meta-grid");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-l);

  @media screen and (width <= 40rem) {
    grid-template-columns: 1fr;
  }
}

.meta-grid__item {
  position: relative;
  overflow: hidden;

  padding: var(--spacing-l);

  border: var(--invisible-border);
  border-radius: var(--border-radius);
}

.meta-grid__description {
  margin-block: var(--spacing-s);
}

.meta-grid:not(.meta-grid--events) .meta-grid__item {
  border: var(--border);
}

.meta-grid--events .meta-grid__item {
  background-color: var(--grey-10);

  /* @TODO Find a better solution for stacking context */

  > * {
    scale: 1;
  }

  &::before {
    position: absolute;
    content: "@" / "";
    inset-block-end: -0.4em;
    inset-inline-end: -0.1em;

    font-size: 9rem;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-heading);

    color: var(--grey-40);

    @media (forced-colors: active) {
      opacity: 0.3;
    }
  }
}
</style>
