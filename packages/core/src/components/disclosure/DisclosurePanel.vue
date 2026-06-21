<template>
  <component
    :is="as"
    :id="panelId"
    ref="element"
    v-hidden="hidden"
    :popover="disabled || !popover ? undefined : 'auto'"
    @beforematch="open = true"
    @toggle="onToggle"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, useTemplateRef } from "vue";

import { vHidden } from "../../directives";

import { useContext, useSharedId } from "../../hooks";

import { DisclosureKey } from "./hooks";

export interface DisclosurePanelProps {
  /**
   * Disable the browser's built-in page search (e.g. with <kbd>Cmd</kbd> + <kbd>F</kbd>) from finding content inside the panel and opening it.
   *
   * Search does not work with `popopver`.
   */
  hideFromSearch?: boolean;

  /**
   * What type of element to render the panel as.
   */
  as?: string;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface DisclosurePanelSlots {
  /**
   * The content of the panel.
   */
  default: (data: void) => void;
}

const props = withDefaults(defineProps<DisclosurePanelProps>(), {
  as: "div",
  id: undefined,
});

defineSlots<DisclosurePanelSlots>();

const { panelId, disabled, popover, open } = useContext(DisclosureKey);

useSharedId(panelId, () => props.id);

const element = useTemplateRef<HTMLElement>("element");

const hidden = computed(() => {
  return open.value ? undefined : props.hideFromSearch ? true : "until-found";
});

const onToggle = (event: ToggleEvent) => {
  if (event.newState === "open") {
    open.value = true;
  } else {
    open.value = false;
  }
};
</script>
