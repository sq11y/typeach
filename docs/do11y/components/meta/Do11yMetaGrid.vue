<template>
  <dl :class="c()">
    <div v-for="prop of props" :key="prop.name" :class="c('item', { emit })">
      <dt :class="c('term')">{{ emit ? `@${prop.name}` : `<slot />` }}</dt>

      <dd :class="c('definition')">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div :class="c('description')" v-html="prop.description" />

        <code v-if="prop.type !== 'any' && prop.type !== '[]'">
          {{ prop.type }}
        </code>
      </dd>
    </div>
  </dl>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import type { Meta } from "do11y";

export interface MetaProps {
  /**
   * The emits or slots.
   */
  props: Meta["events"] | Meta["slots"];

  /**
   * If this is documenting emits.
   */
  emit?: boolean;
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

  &__term {
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    font-weight: var(--font-weight-medium);
  }
}

.meta-grid__item > *:not(:first-child),
.meta-grid__definition > *:not(:first-child) {
  margin-block-start: calc(var(--prose-flow-scale) * 1.35em);
}

.meta-grid__item {
  --prose-flow-scale: 0.6;

  position: relative;
  overflow: hidden;

  padding: var(--spacing-l);

  border: var(--border);
  border-radius: var(--border-radius);
}

.meta-grid__item--emit {
  border-color: transparent;
  background-color: var(--grey-10);

  > * {
    isolation: isolate;
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
