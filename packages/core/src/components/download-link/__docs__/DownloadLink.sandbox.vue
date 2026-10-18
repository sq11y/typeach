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
  --transition-duration: 0.15s;
}

/* ===== Link & Icon ===== */

a[download] {
  color: var(--blue-90);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);

  @media (prefers-reduced-motion: no-preference) {
    transition: outline var(--transition-duration) ease-in-out;
  }

  svg {
    display: inline;
    vertical-align: text-bottom;
    margin-inline: var(--spacing-xs);
  }
}

/* ===== Global ===== */

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

svg {
  block-size: var(--icon-size);
}
</style>
