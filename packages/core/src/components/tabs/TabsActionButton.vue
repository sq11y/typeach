<template>
  <button
    ref="button"
    :tabindex="selectedPanel === value ? 0 : -1"
    :aria-disabled="disabled === true ? true : undefined"
    :disabled="disabled === 'without-focus' ? true : undefined"
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { useContext } from "../../hooks";
import { TabKey } from "./hooks";

export interface TabsActionButtonProps {
  /**
   * The value for the accompanying panel.
   */
  value: string | number;

  /**
   * If the button should be disabled.
   *
   * If you want the disabled button to be taken out of the tab order even when the associated tab is active, you can set this to `"without-focus"`.
   */
  disabled?: boolean | "without-focus";
}

export interface TabsActionButtonEmits {
  /**
   * The click event.
   */
  click: [event: MouseEvent];
}

export interface TabsActionButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels) that makes it clear which tab it is related to.
   */
  default: () => void;
}

const props = defineProps<TabsActionButtonProps>();

const emit = defineEmits<TabsActionButtonEmits>();

defineSlots<TabsActionButtonSlots>();

const { selectedPanel } = useContext(TabKey);

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
