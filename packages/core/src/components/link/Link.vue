<template>
  <a ref="element" :href="url" @keydown="onKeyDown" @click="moveTo?.(element!)">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

import { optionalInject, provideElement } from "../../hooks";

import { ToolbarContextKey } from "../toolbar";

export interface LinkProps {
  /**
   * The link.
   */
  url: string;
}

export interface LinkSlots {
  /**
   * The content of the link should include an [accessible label](/p/accessible-labels).
   *
   * Keep in mind that a link should not include [interactive elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content).
   */
  default: () => void;
}

defineProps<LinkProps>();

defineSlots<LinkSlots>();

const element = useTemplateRef("element");

const { onKeyDown, moveTo } = optionalInject(ToolbarContextKey);

provideElement("toolbar", element);
</script>
