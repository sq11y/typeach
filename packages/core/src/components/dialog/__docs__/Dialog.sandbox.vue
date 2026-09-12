<!-- prettier-ignore -->
<template>
  <PeachyDialog modal>
    <PeachyDialogButton>
      Preview the Queer map
    </PeachyDialogButton>

    <PeachyDialogPanel light-dismiss>
      <div class="dialog__header">
        <PeachyDialogHeading :level="2"> 
          Queering the Map
        </PeachyDialogHeading>


        <PeachyDialogCloseButton class="dialog__close-button">
          <CloseSvg aria-label="Close" />
        </PeachyDialogCloseButton>
      </div>

      <PeachyDialogDescription class="dialog__description">
        A community made map of queer experiences. Explore more stories on <a href="https://www.queeringthemap.com">the Queering the Map website</a>.
      </PeachyDialogDescription>

      <img
        class="dialog__image"
        title="Queering the map"
        :src="QueeringTheMapImage"
        alt="A pin on a pink map with the text 'I wanted to kiss you but I was too scared'."
      />
    </PeachyDialogPanel>
  </PeachyDialog>
</template>

<script lang="ts" setup>
import {
  PeachyDialog,
  PeachyDialogButton,
  PeachyDialogPanel,
  PeachyDialogHeading,
  PeachyDialogDescription,
  PeachyDialogCloseButton,
} from "@typeach/core";

import QueeringTheMapImage from "./images/queering-the-map.png";
import CloseSvg from "./icons/close.svg?component";
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;
}

/* ===== Dialog ===== */

dialog:open {
  position: relative;
  overflow: visible;
  inline-size: 80vw;

  border-radius: var(--border-radius);
  border: var(--invisible-border);

  background-color: var(--bg);

  box-shadow:
    rgb(50 50 93 / 25%) 0 6px 12px -2px,
    rgb(0 0 0 / 30%) 0 3px 7px -3px;
}

dialog::backdrop {
  background-color: rgb(50 50 93 / 5%);
}

.dialog__header {
  @include utils.space-between;

  h2 {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
}

.dialog__description {
  margin-block: var(--spacing-xxs) var(--spacing-s);

  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
}

.dialog__image {
  inline-size: 100%;

  border-radius: var(--border-radius);
  border: var(--border-shape) var(--gray-40);
}

/* ===== Button ===== */

button {
  font-size: var(--font-size-l);
  line-height: var(--line-height-l);

  @include utils.transition("background-color, border-color");

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--turquoise-50);
      border-color: var(--turquoise-70);
    }

    @include utils.hover {
      border-color: var(--turquoise-70);
      color: var(--turquoise-80);
      background-color: var(--turquoise-40);
    }
  }

  @include utils.disabled {
    background-color: var(--grey-50);
    border-color: var(--grey-50);
    color: var(--grey-80);

    @media (forced-colors: active) {
      color: GrayText;
      border-color: GrayText;
    }
  }
}

button[aria-haspopup="dialog"] {
  padding-block: var(--relative-spacing-s);
  padding-inline: var(--relative-spacing-xxl);

  border: var(--border-shape) var(--turquoise-40);
  border-radius: var(--pill-border-radius);

  background-color: var(--turquoise-40);
  color: var(--turquoise-80);
}

button[command="close"] {
  position: absolute;
  inset-inline-end: -0.5rem;
  inset-block-start: -0.5rem;

  padding: var(--relative-spacing-s);

  border: var(--border-shape) var(--grey-30);
  border-radius: 100%;

  background-color: var(--bg);
  color: inherit;
}

/* ===== Link ===== */

a {
  color: var(--blue-80);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}

svg {
  inline-size: var(--icon-size);
}
</style>
