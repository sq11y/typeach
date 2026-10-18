<!-- prettier-ignore -->
<template>
  <PeachyListboxField v-model="modelValue" multiselect>
    <PeachyFieldLabel>
      Favorite characters
    </PeachyFieldLabel>

    <PeachyListboxInput>
      <template v-for="(option, i) of options" :key="i">
        <PeachyListboxGroup v-if="option.options">
          <PeachyListboxGroupLabel class="group-label">
            {{ option.label }}
          </PeachyListboxGroupLabel>

          <PeachyListboxOption
            v-for="(childOption, ci) of option.options"
            :key="ci"
            :label="childOption.label"
            :value="childOption.label"
          >
            {{ childOption.label }} <HeartSvg aria-hidden="true" />
          </PeachyListboxOption>
        </PeachyListboxGroup>

        <PeachyListboxOption
          v-else
          :label="option.label"
          :value="option.label"
        >
          {{ option.label }} <HeartSvg aria-hidden="true" />
        </PeachyListboxOption>
      </template>
    </PeachyListboxInput>
  </PeachyListboxField>
</template>

<script lang="ts" setup>
import {
  PeachyListboxField,
  PeachyFieldLabel,
  PeachyListboxInput,
  PeachyListboxGroup,
  PeachyListboxGroupLabel,
  PeachyListboxOption,
} from "@typeach/core";

import HeartSvg from "./icons/heart.svg?component";

type Option = {
  label: string;
  options?: Option[];
};

const modelValue = defineModel<string[]>({
  default: () => ["Devi Vishwakumar", "Christina Yang", "Brooke Davis"],
});

const options: Option[] = [
  {
    label: "Devi Vishwakumar",
  },
  {
    label: "Grey's Anatomy",
    options: [
      { label: "Christina Yang" },
      { label: "Izzie Stevens" },
      { label: "Meredith Grey" },
      { label: "Miranda Bailey" },
    ],
  },
  {
    label: "One Tree Hill",
    options: [
      { label: "Brooke Davis" },
      { label: "Haley Scott" },
      { label: "Peyton Sawyer" },
      { label: "Quinn James" },
    ],
  },
];
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);

  --icon-size: 1.25em;
  --transition-duration: 0.15s;
}

/* ===== Label ===== */

label {
  margin-block-end: var(--spacing-xs);
}

/* ===== List & groups ===== */

[role="listbox"] {
  border-radius: var(--border-radius);
  padding: var(--spacing-s) var(--spacing-xs);
  border: var(--border);

  @media (prefers-reduced-motion: no-preference) {
    transition: outline var(--transition-duration) ease-in-out;
  }
}

[role="group"] {
  @include utils.stack;
  gap: var(--spacing-xxs);
}

[role="group"]:not(:first-child) {
  margin-block-start: var(--spacing-xs);
}

[role="group"] > * {
  margin-inline-start: var(--spacing-s);
}

/* ===== Options and group labels ===== */

.group-label,
[role="option"] {
  padding: var(--spacing-xxs) var(--spacing-xs);
}

.group-label {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  color: var(--grey-70);
}

[role="option"] {
  @include utils.space-between;
  gap: var(--spacing-m);

  border-radius: var(--border-radius);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      background-color var(--transition-duration) ease-in-out,
      color var(--transition-duration) ease-in-out;
  }
}

[role="option"][aria-selected="true"] {
  background-color: var(--purple-20);
  color: var(--purple-80);

  @media (forced-colors: active) {
    color: SelectedItemText;
    background-color: SelectedItem;
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      background-color: var(--purple-30);
    }
  }
}

[role="option"][aria-selected="false"] {
  svg {
    visibility: hidden;
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      background-color: var(--grey-10);
    }
  }
}

[role="option"][aria-disabled="true"] {
  background-color: var(--grey-30);
  border-color: var(--grey-30);
  color: var(--grey-70);

  @media (forced-colors: active) {
    color: GrayText;
  }
}

/* ===== Focus indicator ===== */

[role="listbox"]:focus-visible {
  outline: 0;
}

[role="listbox"]:focus-visible [data-active="true"] {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

/* ===== Global ===== */

svg {
  inline-size: var(--icon-size);
}
</style>
