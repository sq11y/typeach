<template>
  <PeachyDownloadLink url="/logo.webp" filename="Mascot.webp">
    Download an image of our mascot (33 KB)
    <DownloadSvg aria-hidden="true" />
  </PeachyDownloadLink>
</template>

<script setup lang="ts">
import { PeachyDownloadLink } from "@typeach/core";

import DownloadSvg from "./icons/download.svg?component";
</script>

<style lang="scss">
/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --icon-size: 1.25em;
}

/* ===== Link & Icon ===== */

a[download] {
  color: var(--blue-80);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);

  svg {
    display: inline;
    vertical-align: text-bottom;
    margin-inline: var(--spacing-xs);

    block-size: var(--icon-size);
  }
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
