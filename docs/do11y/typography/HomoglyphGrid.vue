<template>
  <div :class="c('graphic')">
    <div
      v-for="(typographyExample, i) of typography"
      :key="i"
      :style="`--background: var(--${typographyExample.color}-30); --color: var(--${typographyExample.color}-70);`"
      aria-hidden="true"
    >
      {{ typographyExample.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

const typography = [
  {
    text: "1Iil",
    color: "green",
  },
  {
    text: "B&5",
    color: "brown",
  },
  {
    text: "8&",
    color: "blue",
  },
  {
    text: "0ODQØ",
    color: "yellow",
  },
  {
    text: "53S8&",
    color: "pink",
  },
  {
    text: "EF",
    color: "turquoise",
  },
  {
    text: "TI7Z2",
    color: "red",
  },
  {
    text: "pqg",
    color: "purple",
  },
  {
    text: "nmh",
    color: "orange",
  },
];

const c = useBemClass("typography");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.typography__graphic {
  block-size: 20rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: var(--spacing-s);

  user-select: none;

  @media (width < 32rem) {
    block-size: 18rem;
    gap: var(--spacing-xs);
  }

  @media (width < 26rem) {
    block-size: 12rem;
  }

  > * {
    padding-inline: 0.5rem;
    border-radius: var(--border-radius);
    border: 1px solid transparent;

    font-size: var(--font-size-l);
    @include utils.center-content;

    background-color: var(--background);
    color: var(--color);

    @media (width < 32rem) {
      font-size: var(--font-size-m);
    }

    @media (width < 26rem) {
      font-size: var(--font-size-s);
    }
  }
}
</style>
