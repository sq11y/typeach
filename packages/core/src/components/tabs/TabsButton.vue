<template>
  <button
    :id="id"
    ref="element"
    :aria-disabled="disabled === true ? true : undefined"
    :aria-selected="selectedPanel === value"
    :aria-controls="ids.get(`${props.value}-panel`)"
    type="button"
    role="tab"
    @focus="selectionFollowsFocus ? (selectedPanel = value) : undefined"
    @keydown.delete="onDelete"
    @keydown="onKeyDown"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { onBeforeMount, useId, useTemplateRef } from "vue";

import { provideElement, useContext, useSharedDynamicIds } from "../../hooks";

import { TabKey, TabListKey } from "./hooks";

export interface TabsButtonProps {
  /**
   * The value for the accompanying panel.
   */
  value: string;

  /**
   * The id for the element.
   */
  id?: string;

  /**
   * If the button should be disabled.
   */
  disabled?: boolean;
}

export interface TabsButtonEmits {
  /**
   * Triggered when the `delete` key is pressed - only fired if the button is enabled.
   */
  delete: [];
}

export interface TabsButtonSlots {
  /**
   * The content of the button should include an [accessible label](/p/accessible-labels).
   */
  default: () => void;
}

const props = withDefaults(defineProps<TabsButtonProps>(), {
  id: (props) => `${useId()}-${props.value}-button`,
});

const element = useTemplateRef("element");

provideElement("tabs-list", element);

const emit = defineEmits<TabsButtonEmits>();

defineSlots<TabsButtonSlots>();

const { selectedPanel, ids } = useContext(TabKey);

useSharedDynamicIds(ids, `${props.value}-button`, () => props.id);

const { onKeyDown, selectionFollowsFocus } = useContext(TabListKey);

const onClick = () => {
  if (!props.disabled) {
    selectedPanel.value = props.value;
  }
};

const onDelete = () => {
  if (!props.disabled) {
    emit("delete");
  }
};

onBeforeMount(() => {
  if (!selectedPanel.value) {
    selectedPanel.value = props.value;
  }
});
</script>
