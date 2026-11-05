<template>
  <!-- eslint-disable-next-line vuejs-accessibility/interactive-supports-focus vuejs-accessibility/click-events-have-key-events -->
  <div
    v-if="index > -1"
    :id="id"
    ref="element"
    :data-active="activeIndex === index"
    :data-value="value"
    :aria-selected="modelValue.some((m) => m === value)"
    :aria-disabled="disabled || listboxDisabled"
    role="option"
    @click="onOptionClick(index)"
    @mousedown="onOptionMouseDown"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  watch,
  onBeforeMount,
  onBeforeUnmount,
  useId,
  useTemplateRef,
  onMounted,
} from "vue";

import { watchDeep } from "@vueuse/core";
import { shareId, type ComboboxOption } from "../../hooks";
import { elementHasBlockScroll, scrollElementIntoArea } from "../../utils";

import { FieldContextKey } from "../field/hooks";
import { ListboxFieldContextKey } from "./hooks";

export interface ListboxOptionProps {
  /**
   * The label for the option. Used for filtering or typeahead, and as the value for related inputs when single select.
   */
  label: string;

  /**
   * The value for the option.
   */
  value: string;

  /**
   * If the option is disabled.
   */
  disabled?: boolean;

  /**
   * The id for the element.
   *
   * @default useId()
   */
  id?: string;
}

export interface ListboxOptionSlots {
  /**
   * The content of the option.
   */
  default: () => void;
}

const props = withDefaults(defineProps<ListboxOptionProps>(), {
  id: () => useId(),
});

defineSlots<ListboxOptionSlots>();

const optionId = useId();

const element = useTemplateRef("element");

const { sharedIds, disabled: listboxDisabled } = inject(FieldContextKey)!;

shareId(sharedIds, props.value, () => props.id);

const {
  modelValue,

  options,
  optionsTracker,
  activeIndex,

  onOptionClick,
  onOptionMouseDown,
} = inject(ListboxFieldContextKey)!;

const index = computed(() => options.value.findIndex((i) => i.value === props.value));

const option = computed<ComboboxOption>(() => ({
  id: optionId,
  value: props.value,
  label: props.label,
  disabled: props.disabled,
}));

const scrollOptionIntoListbox = () => {
  const listbox = document.getElementById(sharedIds.get("listbox"));

  if (!elementHasBlockScroll(listbox!)) {
    return;
  }

  scrollElementIntoArea(element.value!, listbox!);
};

watch(activeIndex, (newActiveIndex) => {
  if (newActiveIndex !== index.value) {
    return;
  }

  scrollOptionIntoListbox();
});

onMounted(() => {
  if (!modelValue.value.some((m) => m === props.value)) {
    return;
  }

  scrollOptionIntoListbox();
});

onBeforeMount(() => {
  optionsTracker.value = [...optionsTracker.value, option.value];
});

onBeforeUnmount(() => {
  optionsTracker.value = optionsTracker.value.filter((o) => o.id !== optionId);
});

watchDeep(option, (newOption) => {
  optionsTracker.value = optionsTracker.value.map((option) => {
    return option.id === optionId ? newOption : option;
  });
});
</script>
