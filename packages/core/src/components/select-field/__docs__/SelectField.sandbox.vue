<!-- prettier-ignore -->
<template>
  <PeachySelectField v-model="modelValue" class="combobox-container">
    <PeachyFieldLabel>
      Favorite character
    </PeachyFieldLabel>

    <PeachySelectButton>
      {{ modelValue.join(', ') }}
    </PeachySelectButton>

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
  </PeachySelectField>
</template>

<script lang="ts" setup>
import {
  PeachyFieldLabel,
  PeachySelectField,
  PeachySelectButton,
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
  default: () => ["Brooke Davis"],
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
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;
  --transition-duration: 0.15s;
}

/* ===== Container ===== */

.combobox-container {
  inline-size: 16rem;
  display: grid;
  gap: var(--spacing-s);
}

/* ===== Selected options ===== */

ul {
  list-style: none;
  padding-inline-start: 0;

  @include utils.dock;
  gap: var(--spacing-xxs);

  li {
    border-radius: var(--border-radius);
    padding-inline: var(--relative-spacing-s);

    background-color: var(--purple-20);
    color: var(--purple-80);

    border: var(--invisible-border);
  }
}

/* ===== Input ===== */

button[role="combobox"] {
  anchor-name: --combobox-input;

  text-align: start;

  background-color: var(--bg);
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  @media (hover: hover) {
    &:hover:enabled {
      border-color: var(--purple-60);
    }
  }

  &:disabled {
    background-color: var(--grey-20);
  }
}

/* ===== List & groups ===== */

[role="listbox"] {
  position: absolute;
  position-anchor: --combobox-input;
  position-area: bottom center;
  inline-size: anchor-size(width);
  margin-block-start: var(--spacing-xs);

  max-block-size: 14rem;
  overflow-block: auto;
  scrollbar-width: thin;

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

*:focus-visible {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

[role="combobox"]:focus-visible:has(+ [role="listbox"] [data-active="true"]) {
  outline: 0;
}

[role="combobox"]:focus-visible + [role="listbox"] [data-active="true"] {
  isolation: isolate;
  outline: 6px solid var(--blue-80);
}

/* ===== Global ===== */

svg {
  inline-size: var(--icon-size);
}
</style>
