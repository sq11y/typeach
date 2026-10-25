<template>
  <PeachyRadioField v-model="size" :class="c()">
    <PeachyFieldLabel>
      <PeachyVisuallyHidden> Iframe width </PeachyVisuallyHidden>
    </PeachyFieldLabel>

    <div :class="c('options')">
      <PeachyRadioOption class="radio" :value="undefined">
        <PeachyRadioOptionInput />
        Fluid
      </PeachyRadioOption>

      <PeachyRadioOption class="radio" value="mobile">
        <PeachyRadioOptionInput />
        <PeachyVisuallyHidden>Mobile</PeachyVisuallyHidden>
        <MobileSvg aria-hidden="true" />
      </PeachyRadioOption>

      <PeachyRadioOption class="radio" value="desktop">
        <PeachyRadioOptionInput />
        <PeachyVisuallyHidden>Desktop</PeachyVisuallyHidden>
        <DesktopSvg aria-hidden="true" />
      </PeachyRadioOption>
    </div>
  </PeachyRadioField>
</template>

<script lang="ts" setup>
import MobileSvg from "../icons/mobile.svg?component";
import DesktopSvg from "../icons/desktop.svg?component";

import {
  PeachyFieldLabel,
  PeachyRadioField,
  PeachyRadioOption,
  PeachyRadioOptionInput,
  PeachyVisuallyHidden,
  useBemClass,
} from "@typeach/core";

const c = useBemClass("size-radio");

const size = defineModel<"mobile" | "desktop">();
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.size-radio {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  align-self: end;
  margin-inline: 0;
}

.size-radio__options {
  @include utils.stretched-dock;
  gap: var(--spacing-xxs);
  justify-content: end;

  border-radius: var(--border-radius);
  border: var(--invisible-border);
  border-width: calc(var(--border-width) / 2);

  background-color: var(--grey-30);
  padding: var(--spacing-xxs);
}

.radio {
  display: grid;
  place-content: center;
  position: relative;

  padding: 0 var(--relative-spacing-l);

  border-radius: calc(var(--border-radius) - var(--relative-spacing-xxs));
  border-color: transparent;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      color var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out;
  }

  &:has(svg) {
    padding-inline: var(--relative-spacing-m);
  }

  &:hover {
    background-color: var(--grey-10);
  }

  &:not(:has(:checked)) {
    margin: var(--border-width);
  }

  &:has(:checked) {
    border: var(--invisible-border);
    background-color: var(--bg);
    box-shadow: 0 0.0625rem 0.1875rem rgb(from var(--grey-90) r g b / 25%);
  }
}

input[type="radio"] {
  pointer-events: none;
  position: absolute;
  appearance: none;

  inset: 0;
  background: transparent;
  border: 0;
  border-radius: inherit;
  padding: 0;
  margin: 0;
  vertical-align: middle;
}
</style>
