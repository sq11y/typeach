<template>
  <ColorSelect v-model="filter" v-model:compatibility="compatibilityFilter" />

  <template v-for="color of filteredColors" :key="color.color">
    <h3 :style="`color: var(--${color.color}-80);`">
      {{ color.title }}
    </h3>

    <div :class="c('values')">
      <dl v-for="(value, i) of color.values" :key="i" :class="c('value')">
        <dt
          :class="[c('flower'), 's']"
          :style="`color: var(--${color.color}-fg); --background-color: var(--${color.color}-50); --border-color: var(--${color.color}-60);`"
        >
          {{ value.value }}
        </dt>

        <div
          :class="c('preview')"
          :style="`background-color: var(--${color.color}-${value.value});;`"
        >
          <span v-if="filter" :style="`color: var(${filter})`">
            {{ value.contrast.toFixed(2) }}
          </span>
        </div>

        <dd class="xs">
          {{ value.computedValue }}
        </dd>

        <dd class="xs">
          {{ `var(--${color.color}-${value.value})` }}
        </dd>
      </dl>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

/* @ts-expect-error due to missing types */
import { wcagContrast } from "culori";
import { useBemClass, useCssColorVars } from "@typeach/core";

import {
  matchesForWCAG,
  colors,
  ColorContrast,
  ColorValues,
  type ColorContrastKey,
} from "./colors.ts";

import ColorSelect from "./ColorSelect.vue";

const c = useBemClass("colors");

const compatibilityFilter = ref<ColorContrastKey>();

const filter = ref<string>();

const filterValue = computed(() => (filter.value ? variables.value[filter.value] : undefined));

const compatibilityFilterValue = computed(() => {
  switch (compatibilityFilter.value) {
    case "AAAText":
      return ColorContrast.AAAText;

    case "AAText":
    case "AAAInterface":
      return ColorContrast.AAText;

    default:
      return ColorContrast.AAInterface;
  }
});

const variableProperties = computed(() => {
  return colors.map((color) => ColorValues.map((value) => `--${color}-${value}`)).flat();
});

const variables = useCssColorVars(variableProperties);

const filteredColors = computed(() => {
  return colors.map((color) => mapColor(color)).filter((color) => color.values.length);
});

const mapColor = (color: (typeof colors)[number]) => {
  const values = ColorValues.map((value) => {
    const computedValue = variables.value[`--${color}-${value}`];

    return {
      value,
      text: matchesForWCAG.find((i) => i.bg === value)?.fg,
      computedValue,
      contrast: filterValue.value ? wcagContrast(filterValue.value, computedValue!) : undefined,
    };
  });

  return {
    title: color.charAt(0).toUpperCase() + color.slice(1),
    color,
    values: values.filter((v) => !filter.value || v.contrast >= compatibilityFilterValue.value),
  };
};
</script>

<style lang="scss">
/* stylelint-disable scss/operator-no-unspaced */

@use "@typeach/theme/utils";
@use "../style/mixins";

.colors__values {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  row-gap: var(--spacing-xl);
}

.colors__preview {
  @include utils.center;
  padding: var(--spacing-s);
  aspect-ratio: 1;

  forced-color-adjust: none;
}

.colors__value {
  position: relative;

  dd {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: all;

    padding-inline-end: var(--spacing-m);

    &:not(:last-child) {
      padding-block-start: var(--spacing-xs);
    }
  }
}

.colors__flower {
  position: absolute;
  isolation: isolate;

  inset-inline-start: -0.725em;
  inset-block-start: -0.725em;

  block-size: 2.625em;
  aspect-ratio: 1;

  @include utils.center;

  &::after,
  &::before {
    content: "";
    position: absolute;
  }

  &::after {
    @include mixins.flower-mask;

    inset: 0;
    z-index: -1;

    background-color: var(--background-color);
  }

  &::before {
    @include mixins.flower-border-mask;

    inset: 0;
    background-color: var(--border-color);

    @media (forced-colors: active) {
      background-color: CanvasText;
      forced-color-adjust: none;
    }
  }
}
</style>
