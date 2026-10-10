<template>
  <div ref="element" :aria-orientation="orientation" :aria-controls="controls" role="toolbar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef, provide, toRefs } from "vue";
import { useElements, useRovingTabindex } from "../../hooks/";

import type { Orientation } from "../../utils";

import { ToolbarContextKey } from "./hooks";

export interface ToolbarProps {
  /**
   * The orientation of the toolbar, which will decide the available keyboard shortcuts.
   */
  orientation?: Orientation;

  /**
   * The id of the element the toolbar is for.
   */
  controls: string;
}

export interface ToolbarSlots {
  /**
   *  - [Button](/c/button)
   *    - [CopyButton](/c/copy-button)
   *    - [Disclosure](/c/disclosure)
   *    - [SwitchField](/f/switch-field)
   *  - [DownloadLink](/c/download-link)
   *  - [Link](/c/link)
   */
  default: () => void;
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  orientation: "horizontal",
});

const { orientation } = toRefs(props);

defineSlots<ToolbarSlots>();

const element = useTemplateRef("element");

const { getElements } = useElements("toolbar", element);

const { onKeyDown, navigateTo } = useRovingTabindex(orientation, getElements);

provide(ToolbarContextKey, {
  onKeyDown,
  navigateTo,
});
</script>
