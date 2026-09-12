<template>
  <div :class="c()">
    <div v-if="$slots.do" :class="c('do')">
      <h3>
        <div :class="c('icon')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
            ></path>
          </svg>
        </div>

        {{ doTitle }}
      </h3>

      <div :class="c('slot')">
        <slot name="do" />
      </div>
    </div>

    <div v-if="$slots.dont" :class="c('dont')">
      <h3>
        <div :class="c('icon')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M144,200a16,16,0,1,1-16-16A16,16,0,0,1,144,200Zm-16-40a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V152A8,8,0,0,0,128,160Z"
            ></path>
          </svg>
        </div>

        {{ dontTitle }}
      </h3>

      <div :class="c('slot')">
        <slot name="dont" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

export interface DoDontProps {
  /**
   * The title for the dos.
   */
  doTitle?: string;

  /**
   * The title for the donts.
   */
  dontTitle?: string;
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
});

defineSlots<DoDontSlots>();

const c = useBemClass("usage-guide");
</script>

<style lang="scss">
/* stylelint-disable scss/operator-no-unspaced */

@use "@typeach/theme/utils";
@use "../style/mixins";

.usage-guide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-l);

  @media (width < 45rem) {
    grid-template-columns: 1fr;
  }

  img {
    background-color: var(--bg);
    border-radius: var(--border-radius);
  }

  &__do,
  &__dont {
    position: relative;
    display: flex;

    flex-direction: column;

    border-radius: var(--border-radius);
    border: var(--invisible-border);

    padding: var(--spacing-l) var(--spacing-xl);

    background-color: var(--usage-guide-background-color);
    color: var(--usage-guide-color);
  }

  h3 {
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
</style>
