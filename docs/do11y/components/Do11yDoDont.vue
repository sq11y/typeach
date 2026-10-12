<template>
  <div :class="c({ 'full-width': fullWidth })">
    <div v-if="$slots.do" :class="c('do', { 'full-width': fullWidth })">
      <component :is="headingTag">
        <div :class="c('icon')">
          <CheckmarkSvg aria-hidden="true" />
        </div>

        {{ doTitle }}
      </component>

      <div :class="c('slot')">
        <slot name="do" />
      </div>
    </div>

    <div v-if="$slots.dont" :class="c('dont', { 'full-width': fullWidth })">
      <component :is="headingTag">
        <div :class="c('icon')">
          <ExclamationMarkSvg aria-hidden="true" />
        </div>

        {{ dontTitle }}
      </component>

      <div :class="c('slot')">
        <slot name="dont" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import CheckmarkSvg from "../icons/checkmark.svg?component";
import ExclamationMarkSvg from "../icons/exclamation-mark.svg?component";

export interface DoDontProps {
  /**
   * The title for the dos.
   */
  doTitle?: string;

  /**
   * The title for the donts.
   */
  dontTitle?: string;

  /**
   * The heading level to start at.
   */
  headingTag?: "h2" | "h3" | "h4";

  /**
   * If both bozes should take the full width even on large screens.
   */
  fullWidth?: boolean;
}

export interface DoDontSlots {
  /**
   * The dos.
   */
  do: () => void;

  /**
   * The donts.
   */
  dont: () => void;
}

withDefaults(defineProps<DoDontProps>(), {
  doTitle: "Do",
  dontTitle: `Don't`,
  headingTag: "h3",
});

defineSlots<DoDontSlots>();

const c = useBemClass("usage-guide");
</script>

<style lang="scss">
/* stylelint-disable scss/operator-no-unspaced */

@use "@typeach/theme/utils";
@use "../style/mixins";

.usage-guide {
  display: flex;
  align-items: start;
  gap: var(--spacing-l);

  &--full-width {
    flex-direction: column;
  }

  img,
  pre {
    background-color: var(--bg);
    border-radius: var(--border-radius);
    inline-size: 100%;
  }

  pre {
    padding: var(--spacing-l);
  }

  &__do,
  &__dont {
    inline-size: 50%;

    position: relative;
    display: flex;

    flex-direction: column;

    border-radius: var(--border-radius);
    border: var(--invisible-border);

    padding: var(--spacing-l) var(--spacing-xl);

    background-color: var(--usage-guide-background-color);
    color: var(--usage-guide-color);

    &--full-width {
      inline-size: 100%;
    }
  }

  h2,
  h3,
  h4 {
    margin-inline-start: var(--spacing-xxs);

    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
    color: var(--usage-guide-title-color);
  }

  li::before {
    background-color: var(--usage-guide-list-color);
  }

  &__slot {
    margin-block-start: calc(var(--prose-flow-scale) * 0.8em);
  }

  &__do {
    --code-block-bg: var(--green-bg);
    --usage-guide-title-color: var(--green-90);
    --usage-guide-background-color: var(--green-10);
    --usage-guide-color: var(--green-fg);
    --usage-guide-list-color: var(--green-60);

    .usage-guide__icon {
      background-color: var(--green-40);
      color: var(--green-80);
    }
  }

  &__dont {
    --code-block-bg: var(--red-bg);
    --usage-guide-title-color: var(--red-90);
    --usage-guide-background-color: var(--red-10);
    --usage-guide-color: var(--red-fg);
    --usage-guide-list-color: var(--red-60);

    .usage-guide__icon {
      background-color: var(--red-40);
      color: var(--red-80);
    }
  }

  &__icon {
    --usage-icon-size: 3rem;
    --icon-size: 0.9em;

    position: absolute;
    inset-block-start: -1rem;
    inset-inline-start: -1rem;

    display: grid;
    place-content: center;

    inline-size: var(--usage-icon-size);
    aspect-ratio: 1;

    padding: var(--spacing-xs);

    /**
      * Flower shape.
      *
      * Number of petals: 10
      * Rotation: 0
      *
      * @see https://css-generators.com/flower-shapes/
      */
    --g: /30.26% 30.26% radial-gradient(#000 calc(71% - 1px), #0000 71%) no-repeat;

    mask:
      100% 50% var(--g),
      81.174% 89.092% var(--g),
      38.874% 98.746% var(--g),
      4.952% 71.694% var(--g),
      4.952% 28.306% var(--g),
      38.874% 1.254% var(--g),
      81.174% 10.908% var(--g),
      radial-gradient(100% 100%, #000 31.417%, #0000 calc(31.417% + 1px));
  }
}

@media (width < 45rem) {
  .usage-guide {
    flex-direction: column;

    &__do,
    &__dont {
      inline-size: 100%;
    }
  }
}
</style>
