<template>
  <PeachySelectField v-model="multipleModelValue">
    <PeachyFieldLabel data-visually-hidden="true">
      {{ label }}
    </PeachyFieldLabel>

    <PeachySelectButton class="button button--grey">
      <slot v-if="selectedOption" name="option-icon" :option="selectedOption" />

      {{ selectedOption?.label || placeholder }}

      <CaretSvg aria-hidden="true" />
    </PeachySelectButton>

    <PeachyListboxInput>
      <template v-for="(option, i) of options" :key="i">
        <PeachyListboxGroup v-if="isComboboxGroup(option)">
          <PeachyListboxGroupLabel class="group-label s faded">
            {{ option.label }}
          </PeachyListboxGroupLabel>

          <PeachyListboxOption
            v-for="(childOption, ci) of option.options"
            :key="ci"
            :label="childOption.label"
            :value="childOption.value"
          >
            <slot name="option-icon" :option="childOption" />

            {{ childOption.label }} <CheckmarkSvg aria-hidden="true" />
          </PeachyListboxOption>
        </PeachyListboxGroup>

        <PeachyListboxOption v-else :label="option.label" :value="option.value">
          {{ option.label }} <CheckmarkSvg aria-hidden="true" />
        </PeachyListboxOption>
      </template>
    </PeachyListboxInput>
  </PeachySelectField>
</template>

<script lang="ts" setup>
import { computed, ref, useId, watch } from "vue";

import {
  PeachyListboxInput,
  PeachyListboxGroup,
  PeachyListboxGroupLabel,
  PeachyListboxOption,
  PeachySelectField,
  PeachySelectButton,
  PeachyFieldLabel,
  isComboboxGroup,
  type ComboboxGroup,
  type ComboboxOption,
} from "@typeach/core";

import CheckmarkSvg from "../icons/checkmark.svg?component";
import CaretSvg from "../icons/caret-down.svg?component";

export interface SelectProps {
  /**
   * The options.
   */
  options: (ComboboxGroup | ComboboxOption)[];

  /**
   * The placeholder text.
   */
  placeholder: string;

  /**
   * The hidden accessible label.
   */
  label: string;
}

export interface SelectSlots {
  /**
   * Option icon. Placed before the option.
   */
  "option-icon": (data: { option: ComboboxOption }) => void;
}

const props = defineProps<SelectProps>();

defineSlots<SelectSlots>();

const id = useId();

const anchorName = computed(() => `${id}-anchor`);

const modelValue = defineModel<string>();

const multipleModelValue = ref<string[]>([]);

watch(multipleModelValue, (newMultipleModelValue) => {
  modelValue.value = newMultipleModelValue[0] || undefined;
});

const selectedOption = computed(() => {
  return props.options
    .map((o): ComboboxOption[] => (isComboboxGroup(o) ? o.options || [] : [o]))
    .flat()
    .find((o) => o.value === modelValue.value);
});

watch(modelValue, (newModelValue) => {
  if (!newModelValue) {
    multipleModelValue.value = [];
  } else if (multipleModelValue.value[0] !== newModelValue) {
    multipleModelValue.value = [newModelValue];
  }
});
</script>

<style lang="scss" scoped>
button[role="combobox"] {
  anchor-name: v-bind("anchorName");
}

[role="listbox"] {
  position-anchor: v-bind("anchorName");
}
</style>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style/mixins";

button[role="combobox"] {
  margin-inline-start: var(--relative-spacing-s);
  padding-block: 0;

  font-size: var(--font-size-smaller);
  line-height: 2.2em;
}

[role="listbox"] {
  border-radius: var(--border-radius);

  [role="option"] {
    border-radius: calc(var(--border-radius) / 2);
  }
}

[role="listbox"] {
  z-index: 10;

  position: absolute;
  position-anchor: --combobox-input;
  position-area: bottom center;
  inline-size: max-content;
  margin-block-start: var(--spacing-xs);

  max-block-size: min(40rem, 75vh);
  overflow-block: auto;
  scrollbar-width: none;

  padding: var(--spacing-s) var(--spacing-xs);
  border: var(--invisible-border);

  background-color: var(--bg);

  box-shadow:
    rgb(0 0 0 / 10%) 0 10px 15px -3px,
    rgb(0 0 0 / 5%) 0 4px 6px -2px;

  svg {
    margin-inline-start: auto;
  }
}

[role="listbox"] {
  [role="group"]:not(:first-child) {
    margin-block-start: var(--spacing-s);
  }

  [role="group"] {
    @include utils.stack;
    gap: var(--spacing-xxs);

    > [role="option"] {
      margin-inline-start: var(--spacing-s);
    }
  }
}

.group-label,
[role="option"] {
  padding: var(--spacing-xxs) var(--spacing-xs);
}

[role="option"] {
  @include utils.dock;
  gap: var(--relative-spacing-m);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color var(--transition-duration) ease-in-out,
      color var(--transition-duration) ease-in-out;
  }

  &[aria-selected="true"] {
    background-color: var(--grey-20);
    color: var(--grey-80);

    &:hover {
      background-color: var(--grey-30);
    }
  }

  &[aria-selected="false"]:hover {
    background-color: var(--grey-10);
  }

  &[aria-selected="false"] svg {
    visibility: hidden;
  }
}

[role="combobox"]:focus-visible + [role="listbox"] [data-active="true"] {
  @include mixins.focus-visible;
}
</style>
