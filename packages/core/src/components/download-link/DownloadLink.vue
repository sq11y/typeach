<template>
  <a :href="url" :download="filename || true">
    <slot />
  </a>
</template>

<script lang="ts" setup>
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
   * The content of the link - should include an accessible label.
   */
  default: (data: void) => void;
}

defineProps<DownloadLinkProps>();

defineSlots<DownloadLinkSlots>();
</script>
