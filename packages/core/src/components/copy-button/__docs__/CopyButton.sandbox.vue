<!-- prettier-ignore -->
<template>
  <PeachyCopyButton
    v-slot="{ isCopying }"
    :content="excerptFromIfIMustDieByRefaatAlareer"
  >
    {{ isCopying ? "Copied poem excerpt" : "Copy poem excerpt" }}
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";

const excerptFromIfIMustDieByRefaatAlareer = "If I must die, let it bring hope, let it be a tale";
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-shape: 1px solid;
}

/* ===== Button ===== */

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

    @media (forced-colors: active) {
      color: GrayText;
      border-color: GrayText;
    }
  }
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
