<!-- prettier-ignore -->
<template>
  <PeachyButton @click="onClick">
   Button
  </PeachyButton>
</template>

<script lang="ts" setup>
import { PeachyButton } from "@typeach/core";

const onClick = () => {
  const quoteByJeanBaptisteAndréGodin =
    "Créez toujours, au profit du peuple, les instruments de son bien-être, et vous aurez créé les instruments de sa puissance et de son émancipation.";

  console.log(quoteByJeanBaptisteAndréGodin);
};
</script>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-shape: 1px solid;
}

button {
  padding-block: var(--relative-spacing-s);
  padding-inline: var(--relative-spacing-xxl);

  border: var(--border-shape) var(--pink-40);
  border-radius: var(--pill-border-radius);

  background-color: var(--pink-40);
  color: var(--pink-80);

  font-size: var(--font-size-l);
  line-height: var(--line-height-l);

  @include utils.transition("background-color, border-color");

  &:focus-visible {
    outline: 2px solid var(--blue-80);
    box-shadow: 0 0 0 6px var(--blue-30);
  }

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--pink-50);
      border-color: var(--pink-70);
    }

    @include utils.hover {
      border-color: var(--pink-70);
    }
  }

  @include utils.disabled {
    background-color: var(--grey-50);
    border-color: var(--grey-50);
    color: var(--grey-80);
  }
}
</style>
