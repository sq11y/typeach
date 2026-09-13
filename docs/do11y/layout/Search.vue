<template>
  <PeachyDialog v-model="open" modal>
    <PeachyDialogButton :class="c('button')" keyboard-shortcut="Ctrl+K, ⌘+K">
      <SearchSvg aria-label="Search" />
      <kbd>K <CmdSvg aria-hidden="true" /></kbd>
    </PeachyDialogButton>

    <PeachyDialogPanel light-dismiss :class="c('dialog')">
      <PeachyVisuallyHidden>
        <PeachyDialogHeading> Search </PeachyDialogHeading>
      </PeachyVisuallyHidden>

      <PeachyTextField role="search">
        <PeachyFieldLabel :class="c('label')">
          <SearchSvg aria-hidden="true" />
          What are you looking for?
        </PeachyFieldLabel>

        <!-- eslint-disable-next-line vuejs-accessibility/no-autofocus -->
        <PeachyTextFieldInput v-model="search" autofocus placeholder="Search components" search />
      </PeachyTextField>

      <Do11yComponentGrid :search="search" scrollable />

      <PeachyDialogCloseButton :class="c('close-button')">
        <CloseSvg aria-label="Close" />
      </PeachyDialogCloseButton>
    </PeachyDialogPanel>
  </PeachyDialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import {
  PeachyDialog,
  PeachyDialogButton,
  PeachyDialogCloseButton,
  PeachyDialogHeading,
  PeachyDialogPanel,
  PeachyFieldLabel,
  PeachyTextField,
  PeachyTextFieldInput,
  PeachyVisuallyHidden,
  useBemClass,
} from "@typeach/core";

import CmdSvg from "../icons/cmd.svg?component";
import SearchSvg from "../icons/search.svg?component";
import CloseSvg from "../icons/close.svg?component";

import Do11yComponentGrid from "../components/Do11yComponentGrid.vue";

const c = useBemClass("search");

const search = ref("");

const open = ref(false);

const router = useRouter();

router.beforeEach(() => {
  open.value = false;
  search.value = "";
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style/mixins";

.search__button {
  @include utils.dock(var(--spacing-xxs));

  border: 0;
  background-color: transparent;
  color: inherit;

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);

  @include utils.transition("background-color");

  @include utils.hover {
    background-color: var(--green-40);
  }

  @media (width < 25rem) {
    kbd {
      display: none;
    }
  }
}

.search__dialog:open {
  position: relative;
  overflow: visible;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);

  inline-size: min(80vw, 55rem);
  max-block-size: calc(100vh - 30vh);
  margin-block-start: 15vh;

  padding: var(--spacing-l);

  border-radius: var(--border-radius);
  border: var(--invisible-border);

  background-color: var(--bg);

  box-shadow:
    rgb(50 50 93 / 25%) 0 6px 12px -2px,
    rgb(0 0 0 / 30%) 0 3px 7px -3px;

  &::backdrop {
    background-color: rgb(from var(--pink-30) r g b / 60%);
    backdrop-filter: blur(2px);
  }
}

.search__label {
  @include utils.dock;
  gap: var(--spacing-xs);

  color: var(--pink-90);

  font-size: var(--font-size-l);
  line-height: var(--line-height-l);
}

input[type="search"] {
  inline-size: 100%;
  margin-block-start: var(--spacing-s);
  padding: var(--spacing-xs) var(--spacing-s);

  border: var(--border);
  border-radius: var(--border-radius);

  background-color: var(--bg);
  color: var(--fg);

  &::placeholder {
    color: var(--grey-70);
  }
}

.search__close-button {
  position: absolute;

  inset-block-start: -1rem;
  inset-inline-end: -1rem;
  padding: var(--spacing-xs);

  border-radius: 100%;
  border: var(--border-shape) var(--grey-30);

  background-color: var(--bg);
  color: var(--grey-90);

  @include utils.transition(border-color, background-color, color);

  @include utils.hover {
    border-color: var(--pink-40);
    background-color: var(--pink-40);
    color: var(--pink-80);
  }

  &:active {
    background-color: var(--pink-50);
    border-color: var(--pink-70);
  }
}
</style>
