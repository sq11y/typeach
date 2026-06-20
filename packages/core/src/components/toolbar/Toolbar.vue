<template>
  <div ref="element" :aria-orientation="orientation" :aria-controls="controls" role="toolbar">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, toRefs, useTemplateRef } from "vue";

import { useElements, useRovingTabindex } from "../../hooks/";

import type { Orientation } from "../../utils";
import { ToolbarKey } from "./hooks";

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
   * The toolbar controls.
   *
   * The following elements will be included in the keyboard navigation: Button, CopyButton, Disclosure, DownloadLink and SwitchField.
   */
  default: (data: void) => void;
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  orientation: "horizontal",
});

const { orientation } = toRefs(props);

defineSlots<ToolbarSlots>();

const element = useTemplateRef("element");

const { getElements } = useElements("toolbar", element);

const { onKeyDown } = useRovingTabindex(orientation, getElements);

provide(ToolbarKey, {
  onKeyDown,
});
</script>
