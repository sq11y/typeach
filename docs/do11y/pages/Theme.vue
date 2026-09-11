<template>
  <h1 id="theme-heading">Theme</h1>

  <div class="description"><code>pnpm i @typeach/theme</code></div>

  <div :class="c()">
    <router-link :class="c('card', { pink: true })" to="/p/colors">
      <div :class="c('title')">Colors</div>
      <div><ColorsGraphic /></div>
    </router-link>

    <router-link :class="c('card', { green: true })" to="/p/typography">
      <div><HomoglyphGrid /></div>
      <div :class="c('title')">Typography</div>
    </router-link>

    <router-link :class="c('card', { blue: true })" to="/p/spacing">
      <div :class="c('title')">Spacing</div>
      <div><SpacingGraphic /></div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import ColorsGraphic from "../colors/ColorsGraphic.vue";
import HomoglyphGrid from "../typography/HomoglyphGrid.vue";
import SpacingGraphic from "../spacing/SpacingGraphic.vue";

const c = useBemClass("theme");
</script>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style//mixins";

.theme {
  display: grid;
  gap: var(--spacing-l);

  --graphic-block-size: 12rem;
}

.theme__card {
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0;

  border: var(--border);

  font-size: var(--font-size-l);
  line-height: var(--line-height-l);
  text-decoration: none;

  color: var(--theme-card-color);
  background-color: var(--theme-card-background-color);

  @include utils.transition(border-color, background-color);

  &:focus-visible {
    @include mixins.focus-visible;
  }

  @include utils.hover {
    border-color: var(--theme-card-hover-border-color);
    background-color: var(--theme-card-hover-background-color);
  }

  @media (width < 45rem) {
    grid-template-columns: 1fr;

    &:first-child,
    &:last-child {
      display: grid;

      > :first-child {
        order: 1;
      }
    }
  }

  &--pink {
    --theme-card-background-color: var(--pink-10);
    --theme-card-color: var(--pink-70);

    --theme-card-hover-background-color: var(--pink-30);
    --theme-card-hover-border-color: var(--pink-60);
  }

  &--green {
    --theme-card-background-color: var(--green-10);
    --theme-card-color: var(--green-70);

    --theme-card-hover-background-color: var(--green-30);
    --theme-card-hover-border-color: var(--green-60);
  }

  &--blue {
    --theme-card-background-color: var(--blue-10);
    --theme-card-color: var(--blue-70);

    --theme-card-hover-background-color: var(--blue-30);
    --theme-card-hover-border-color: var(--blue-60);
  }
}

.theme__card > :not([class]) {
  padding: 3rem;
  background-color: var(--bg);
  grid-column: span 3;
  overflow: hidden;
}

.theme__title {
  grid-column: span 2;
  padding: var(--spacing-xl);

  text-decoration: underline;

  @include utils.center;
  @include utils.transition(background-color);
}
</style>
