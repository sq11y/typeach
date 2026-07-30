<template>
  <div :class="c()">
    <div v-for="color of colors" :key="color" :class="c('color')">
      <section tabindex="0" :class="c('palette')" :aria-labelledby="`color-${color}`">
        <div :id="`color-${color}`" :style="`color: var(--${color}-80);`">
          {{ color.charAt(0).toUpperCase() + color.slice(1) }}
        </div>

        <div
          v-for="(match, i) of apca ? matchesForAPCA : matchesForWCAG"
          :key="i"
          :style="`background: var(--${color}-${match.bg}); color: var(--${color}-${match.fg});`"
        >
          {{ match.fg === "ui" ? "" : match.bg }}

          <ImageSvg v-if="match.fg === 'ui'" aria-label="ui" :style="`color: var(--${color}-10)`" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import { matchesForWCAG, matchesForAPCA } from "./color-matches";

import ImageSvg from "../icons/image.svg?component";

interface ColorRulesProps {
  /**
   * If the color matches should pass APCA.
   */
  apca?: boolean;
}

defineProps<ColorRulesProps>();

const colors = [
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "purple",
  "pink",
  "grey",
];

const c = useBemClass("colors");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.colors {
  @include utils.dock(var(--spacing-xxs));

  font-size: var(--font-size-s);
  forced-color-adjust: none;
}

.colors__color {
  inline-size: 100%;
}

.colors__palette {
  inline-size: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  overflow-inline: auto;
  scrollbar-width: none;

  border-radius: var(--border-radius);

  > * {
    @include utils.center;
    padding: var(--spacing-s);

    &:nth-child(2) {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:last-child {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }

  > *:first-child {
    forced-color-adjust: auto;

    inline-size: 6.5rem;
    justify-content: end;
    padding-inline-end: calc(var(--spacing-s) + 0.5rem);

    font-family: var(--font-family-heading);
  }
}
</style>
