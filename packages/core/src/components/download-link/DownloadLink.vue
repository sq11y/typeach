<template>
  <PeachyLink :url="url" :download="filename || true">
    <slot />
  </PeachyLink>
</template>

<script lang="ts" setup>
import { PeachyLink } from "../link";

export interface DownloadLinkProps {
  /**
   * The url for the file to download,
   */
  url: string;

  /**
   * The filename of the downloaded file.
   *
   * Only works with same-origin URLs, or the `blob:` and `data:` schemes. You can read [more about filenames for anchor tags on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#download).
   */
  filename?: string;
}

export interface DownloadLinkSlots {
  /**
   * The content of the link should include an [accessible label](/p/accessible-labels).
   *
   * The label should give a hint as to how long the download will take - the easiest way to do this is to include the size of the file.
   *
   * Also keep in mind that a link should not include [interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content).
   */
  default: () => void;
}

defineProps<DownloadLinkProps>();

defineSlots<DownloadLinkSlots>();
</script>
