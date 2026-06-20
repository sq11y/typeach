<template>
  <div :class="c('graphic')">
    <div
      v-for="typographyExample of typography"
      aria-hidden="true"
      :style="`--background: var(--${typographyExample.color}-30); --color: var(--${typographyExample.color}-70);`"
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

<style>
.typography__graphic {
  --card-height: 6.5rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, var(--card-height));
  gap: var(--spacing-s);

  user-select: none;
  pointer-events: none;

  @media (width < 32rem) {
    gap: var(--spacing-xs);
    --card-height: 5rem;
  }

  @media (width < 26rem) {
    --card-height: 3.75rem;
  }

  > * {
    padding-inline: 0.5rem;
    border-radius: var(--border-radius);
    border: 1px solid transparent;

    text-align: center;

    font-size: var(--font-size-l);
    line-height: var(--card-height);

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
