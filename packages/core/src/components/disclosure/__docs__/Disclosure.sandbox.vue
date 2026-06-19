<!-- prettier-ignore -->
<template>
  <PeachyDisclosure>
    <PeachyDisclosureButton>
      {{ warByEdwinStarrLyricsQuestion }}
      <Cross />
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

/* @ts-expect-error temporary */
import Cross from "./icons/cross.svg?component";

const warByEdwinStarrLyricsQuestion = "War, what is it good for?";
const warByEdwinStarrLyricsAnswer = "Absolutely nothing.";
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;
}

button {
  margin-block-end: var(--spacing-s);

  @include utils.space-between(var(--spacing-m));

  padding-block: var(--relative-spacing-s);
  padding-inline: var(--relative-spacing-l) var(--relative-spacing-m);

  /**
   * Hidden border to ensure the shape
   * of the button is defined in `forced-colors` mode.
   */
  border: var(--border-shape) var(--blue-40);
  border-radius: var(--border-radius);

  background-color: var(--blue-40);
  color: var(--blue-80);

  @include utils.transition("background-color, border-color");

  &:focus-visible {
    outline: 2px solid var(--blue-80);
    box-shadow: 0 0 0 6px var(--blue-30);
  }

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--blue-50);
      border-color: var(--blue-70);
    }

    @include utils.hover {
      border-color: var(--blue-70);
    }
  }
}

button {
  svg {
    margin-left: auto;
    height: var(--icon-size);
    transform: rotate(-45deg);
    @include utils.transition("transform");
  }

  &[aria-expanded="true"] svg {
    transform: rotate(0deg);
  }
}

.content {
  background-color: var(--blue-20);
  color: var(--blue-80);

  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  /**
   * Invisible border to ensure the shape
   * of the card is defined in `forced-colors` mode.
   *
   * Applied on the content instead of the panel
   * to prevent it being visible when the disclosure is closed.
   */
  border: var(--invisible-border);
  border-radius: var(--border-radius);

  /**
    * To avoid a choppy transition,
    * the content gets padding instead of the panel.
    */
  padding-block: var(--relative-spacing-m);
  padding-inline: var(--relative-spacing-l) var(--relative-spacing-m);
}

.panel {
  overflow-y: hidden;
  max-height: 15rem;

  @include utils.transition("max-height");
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
}
</style>
