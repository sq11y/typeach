<template>
  <div v-if="render">
    <slot />
  </div>

  <slot v-else />
</template>

<script lang="ts" setup>
import { computed, provide, useId } from "vue";

import { shareId } from "../../hooks";

import { DisclosureKey } from "./hooks";

export interface DisclosureProps {
  /**
   * If a wrapper element should be rendered.
   */
  render?: boolean;

  /**
   * If the disclosure is disabled. When `true` the button will be hidden, and the panel will be shown.
   */
  disabled?: boolean;

  /**
   * If the disclosure should use the [Popover API](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#auto) with `[popover="auto"]` and invoker commands.
   *
   * This will be ignored when `disabled` is true.
   *
   * Please note that this will disable the ability to search the content of the panel when closed.
   */
  popover?: boolean;
}

export interface DisclosureSlots {
  /**
   * The associated button and panel.
   */
  default: (data: void) => void;
}

/**
 * If the disclosure is open or not.
 */
const open = defineModel<boolean>({ default: false });

const props = defineProps<DisclosureProps>();

defineSlots<DisclosureSlots>();

const defaultId = useId();

const panelId = shareId(defaultId);

provide(DisclosureKey, {
  panelId,

  disabled: computed(() => !!props.disabled),
  popover: computed(() => !!props.popover),

  open: computed({
    get() {
      return props.disabled ? true : open.value;
    },

    set(value) {
      open.value = value;
    },
  }),
});
</script>
