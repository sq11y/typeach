<template>
  <header>
    <RouterLink id="logo" to="/" :class="['no-focus']">
      <img id="mascot" alt="Typeach mascot" src="/logo.webp" />
    </RouterLink>

    <nav id="nav" ref="popover" :popover="isSmallScreen ? 'auto' : undefined">
      <RouterLink to="/p/components">Components</RouterLink>
      <RouterLink to="/p/theme">Theme</RouterLink>
    </nav>

    <Search />

    <PeachyButton v-if="isSmallScreen" ref="button" command="toggle-popover" commandfor="nav">
      <MenuSvg aria-label="Navigation" />
    </PeachyButton>
  </header>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { useMediaQuery } from "@vueuse/core";
import { useRouter } from "vue-router";

import { PeachyButton } from "@typeach/core";

import Search from "./Search.vue";

import MenuSvg from "../icons/menu.svg?component";

const popover = useTemplateRef("popover");

const router = useRouter();

const isSmallScreen = useMediaQuery("(width <= 42rem)");

router.beforeEach(() => {
  if (isSmallScreen.value) {
    popover.value?.hidePopover();
  }
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style/mixins";

header {
  --logo-size: 4.25rem;

  position: sticky;
  z-index: 5;

  inset-block-start: var(--spacing-xl);
  transform: translateX(calc(var(--logo-size) / 2));
  margin-inline: auto;

  @include utils.dock;
  gap: var(--spacing-s);

  padding: var(--spacing-xs);
  padding-inline-start: var(--spacing-m);

  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  border: var(--invisible-border);

  background-color: var(--green-30);
  color: var(--green-80);

  &::before {
    content: "";
    position: absolute;

    inset-block: calc(var(--border-width) * -1);
    inset-inline-start: calc(var(--logo-size) / 2 * -1);
    inline-size: calc(var(--logo-size) / 2);

    background-color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (width <= 42rem) {
    padding-inline: var(--spacing-s);
  }
}

#logo {
  position: absolute;
  inset-inline-start: calc(var(--logo-size) * -1);

  &:hover #mascot {
    scale: 1.1;
    rotate: calc(-3.5deg);
  }

  &:focus-visible #mascot {
    @include mixins.focus-visible;
  }
}

#mascot {
  block-size: var(--logo-size);
  border-radius: var(--border-radius);

  @include utils.transition(scale, rotate);

  @supports (corner-shape: squircle) {
    corner-shape: squircle;
    border-radius: 50%;
  }
}

button[commandfor="nav"] {
  anchor-name: --nav-button;

  border: 0;
  border-radius: var(--border-radius);
  padding: 0;

  background-color: transparent;
  color: inherit;
}

nav {
  &:not([popover]):not([class]) {
    @include utils.dock;
    gap: var(--spacing-m);
  }

  &:popover-open {
    position-anchor: --nav-button;
    position-area: bottom center;
    margin-block-start: var(--spacing-s);
    justify-self: end;

    @include utils.stack;
    gap: var(--spacing-xs);

    border: var(--border);
    border-radius: var(--border-radius);

    padding: var(--spacing-m);
  }
}
</style>
