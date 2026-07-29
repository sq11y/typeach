<template>
  <TableOfContent v-if="isLargeScreen && isComponentPage" />

  <header>
    <RouterLink to="/" class="logo no-focus">
      <img alt="Squirrel mascot" src="/logo.webp" />

      <span>Typeach</span>
    </RouterLink>

    <PeachyButton v-if="isSmallScreen" ref="button" command="toggle-popover" commandfor="nav">
      <MenuSvg aria-label="Navigation" />
    </PeachyButton>

    <nav id="nav" ref="popover" :popover="isSmallScreen ? 'auto' : undefined">
      <RouterLink to="/p/components">Components</RouterLink>
      <RouterLink to="/p/theme">Theme</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { computed, useTemplateRef } from "vue";

import { useMediaQuery } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";

import { PeachyButton } from "@typeach/core";

import TableOfContent from "./TableOfContent.vue";

import MenuSvg from "../icons/menu.svg?component";

const popover = useTemplateRef("popover");

const router = useRouter();

const route = useRoute();

const isComponentPage = computed(() => route.path.startsWith("/c") || route.path.startsWith("/f"));

const isLargeScreen = useMediaQuery("(width >= 80rem)");

const isSmallScreen = useMediaQuery("(width <= 36rem)");

router.beforeEach(() => {
  if (isSmallScreen.value) {
    popover.value?.hidePopover();
  }
});
</script>

<style lang="scss" scoped>
@use "@typeach/theme/utils";
@use "../style/mixins";

header {
  position: sticky;
  z-index: 5;

  inset-block-start: var(--spacing-xl);
  margin-inline: auto;

  @include utils.center-flex(var(--spacing-xl));

  padding-inline: var(--spacing-l);
  padding-block: var(--spacing-xs);

  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  border: var(--invisible-border);

  background-color: var(--green-30);
  color: var(--green-80);

  @media (width <= 36rem) {
    margin-inline: auto calc(var(--inline-margin));
    gap: var(--spacing-m);
  }
}

a {
  color: inherit;
  text-decoration: none;

  @include utils.transition("background-color");

  @include utils.hover {
    background-color: var(--green-40);
  }
}

.logo:focus-visible {
  outline: none;

  img {
    @include mixins.focus-visible;
  }
}

.logo {
  --logo-size: 4.25rem;

  @include utils.center-flex(var(--spacing-l));
  text-decoration: none;

  img {
    position: absolute;

    block-size: var(--logo-size);
    inset-inline-start: calc(var(--logo-size) * -1 + calc(var(--logo-size) * 0.15));

    border-radius: var(--border-radius);

    @supports (corner-shape: squircle) {
      corner-shape: squircle;
      border-radius: 50%;
    }
  }

  span {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-bigger);
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
    @include utils.center-flex(var(--spacing-m));
  }

  &:popover-open {
    position-anchor: --nav-button;
    position-area: bottom center;
    margin-block-start: var(--spacing-s);
    justify-self: end;

    @include utils.vertical-flex(var(--spacing-xs));

    border: var(--border);
    border-radius: var(--border-radius);

    padding: var(--spacing-m);
  }
}
</style>
