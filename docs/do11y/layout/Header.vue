<template>
  <header>
    <RouterLink to="/" class="logo no-focus">
      <img alt="Squirrel mascot" src="/logo.webp" />

      <span>Typeach</span>
    </RouterLink>

    <PeachyButton v-if="isSmallScreen" ref="button" command="toggle-popover" commandfor="nav">
      <MenuIcon aria-label="Navigation" />
    </PeachyButton>

    <nav id="nav" ref="popover" :popover="isSmallScreen ? 'auto' : undefined">
      <RouterLink to="/p/components">Components</RouterLink>
      <RouterLink to="/p/colors">Colors</RouterLink>
      <RouterLink to="/p/typography">Typography</RouterLink>
      <RouterLink to="/p/spacing">Spacing</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { useMediaQuery } from "@vueuse/core";
import { useRouter } from "vue-router";

import { PeachyButton } from "@typeach/core";

import MenuIcon from "../icons/menu.svg?component";

const isSmallScreen = useMediaQuery("(width <= 46rem)");

const popover = useTemplateRef("popover");

const router = useRouter();

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

  @media (width <= 46rem) {
    margin-inline: auto calc(var(--inline-margin));
    gap: var(--spacing-m);
  }
}

a {
  color: inherit;
  text-decoration: none;

  &:hover:not(.logo) {
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
  border: 0;
  padding: 0;
  background-color: transparent;
  color: inherit;
}

nav {
  &:not([popover]) {
    @include utils.center-flex(var(--spacing-m));
  }

  &:popover-open {
    @include utils.vertical-flex(var(--spacing-m));

    margin-inline: auto calc(var(--inline-margin));
    inset-block-start: 6.25rem;

    border: var(--border);
    border-radius: var(--border-radius);

    padding: var(--spacing-m);
  }
}
</style>
