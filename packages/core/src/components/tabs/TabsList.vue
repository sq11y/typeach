<template>
  <div ref="element" :aria-orientation="orientation" role="tablist">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRefs, useTemplateRef, provide, computed } from "vue";

import type { Orientation } from "../../utils";

import { useElements, useRovingTabindex } from "../../hooks";
import { TabListKey } from "./hooks";

export interface TabsListProps {
  /**
   * The visual orientation of the tabs.
   *
   * This will decide the available keyboard shortcuts.
   */
  orientation?: Orientation;

  /**
   * If focusing a tab button should activate it.
   *
   * This should only be used if the content is loaded quickly.
   */
  selectionFollowsFocus?: boolean;
}

export interface TabsListSlots {
  /**
   * The tabs buttons.
   */
  default: (data: void) => void;
}

const props = withDefaults(defineProps<TabsListProps>(), {
  orientation: "horizontal",
});

defineSlots<TabsListSlots>();

const { orientation } = toRefs(props);

const element = useTemplateRef("element");

const { getElements } = useElements("tabs-list", element);

const { onKeyDown } = useRovingTabindex(orientation, getElements);

provide(TabListKey, {
  selectionFollowsFocus: computed(() => !!props.selectionFollowsFocus),
  onKeyDown,
});
</script>
