<template>
  <a ref="element" :href="url" :download="filename || true" @keydown="onKeyDown">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";
import { useOptionalContext, provideElement } from "../../hooks";

import { ToolbarKey } from "../toolbar";

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
   * The content of the link - should include an [accessible label](/p/labels).
   *
   * It's great if you can give a hint as to how long the download will take - the easiest way to do this is to include the size of the file.
   */
  default: (data: void) => void;
}

defineProps<DownloadLinkProps>();

defineSlots<DownloadLinkSlots>();

const element = useTemplateRef("element");

const { onKeyDown } = useOptionalContext(ToolbarKey);

provideElement("toolbar", element);
</script>
