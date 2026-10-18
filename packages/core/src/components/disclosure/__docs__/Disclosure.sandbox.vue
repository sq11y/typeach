<!-- prettier-ignore -->
<template>
  <PeachyDisclosure>
    <PeachyDisclosureButton>
      {{ warByEdwinStarrLyricsQuestion }}
      <CrossSvg aria-hidden="true" />
    </PeachyDisclosureButton>

    <Transition>
      <PeachyDisclosurePanel class="panel">
        <div class="content">
          {{ warByEdwinStarrLyricsAnswer }}
        </div>
      </PeachyDisclosurePanel>
    </Transition>
  </PeachyDisclosure>
</template>

<script lang="ts" setup>
/* prettier-ignore */
import {
  PeachyDisclosure,
  PeachyDisclosureButton,
  PeachyDisclosurePanel
} from "@typeach/core";

import CrossSvg from "./icons/cross.svg?component";

const warByEdwinStarrLyricsQuestion = "War, what is it good for?";
const warByEdwinStarrLyricsAnswer = "Absolutely nothing.";
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;

  --transition-duration: 0.15s;
}

/* ===== Button ===== */

button[aria-expanded] {
  margin-block-end: var(--spacing-s);

  @include utils.space-between;
  gap: var(--spacing-m);

  padding-block: var(--relative-spacing-s);
  padding-inline: var(--relative-spacing-l) var(--relative-spacing-m);

  border: var(--border-shape) var(--turquoise-40);
  border-radius: var(--border-radius);

  background-color: var(--turquoise-40);
  color: var(--turquoise-80);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      border-color: var(--turquoise-70);
    }
  }

  &:active:not([aria-disabled="true"]) {
    background-color: var(--turquoise-50);
    border-color: var(--turquoise-70);
  }
}

button[aria-disabled="true"] {
  background-color: var(--grey-50);
  border-color: var(--grey-50);
  color: var(--grey-80);

  @media (forced-colors: active) {
    color: GrayText;
    border-color: GrayText;
  }
}

/* ===== Toggle icon ===== */

button[aria-expanded] {
  svg {
    margin-inline-start: auto;
    transform: rotate(-45deg);

    @media (prefers-reduced-motion: no-preference) {
      transition: transform var(--transition-duration) ease-in-out;
    }
  }

  &[aria-expanded="true"] svg {
    transform: rotate(0deg);
  }
}

/* ===== Panel ===== */

.content {
  background-color: var(--turquoise-20);
  color: var(--turquoise-80);

  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  border: var(--invisible-border);
  border-radius: var(--border-radius);

  /**
    * To avoid a choppy transition,
    * the content gets padding instead of the panel.
    */
  padding-block: var(--relative-spacing-m);
  padding-inline: var(--relative-spacing-l) var(--relative-spacing-m);
}

/* ===== Panel transition ===== */

.panel {
  overflow-block: hidden;
  max-block-size: 15rem;

  @media (prefers-reduced-motion: no-preference) {
    transition: max-block-size var(--transition-duration) ease-in-out;
  }
}

.v-enter-from,
.v-leave-to {
  max-block-size: 0;
}

/* ===== Global ===== */

svg {
  block-size: var(--icon-size);
}

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}
</style>
