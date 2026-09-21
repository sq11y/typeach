<!-- prettier-ignore -->
<template>
  <PeachyComboboxField v-model="modelValue" class="combobox-container" multiselect>
    <PeachyFieldLabel>
      Favorite characters
    </PeachyFieldLabel>

    <PeachyComboboxSelectionList>
      <PeachyComboboxSelectionListItem
        v-for="value in modelValue"
        :key="value"
      >
        {{ value }}
      </PeachyComboboxSelectionListItem>
    </PeachyComboboxSelectionList>

    <PeachyComboboxInput placeholder="Search a character.." />

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
  </PeachyComboboxField>
</template>

<script lang="ts" setup>
import {
  PeachyFieldLabel,
  PeachyComboboxField,
  PeachyComboboxInput,
  PeachyComboboxSelectionList,
  PeachyComboboxSelectionListItem,
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
  --invisible-border: var(--border-shape) transparent;

  --icon-size: 1.25em;
}

/* ===== Container ===== */

.combobox-container {
  inline-size: 16rem;
  display: grid;
  gap: var(--spacing-xs);
}

/* ===== Label ===== */

label {
  cursor: pointer;
  display: block;
}

/* ===== Selected options ===== */

ul {
  list-style: none;
  padding-inline-start: 0;

  @include utils.dock(var(--spacing-xxs));

  li {
    border-radius: var(--border-radius);
    padding-inline: var(--relative-spacing-s);

    background-color: var(--purple-20);
    color: var(--purple-80);

    border: var(--invisible-border);
  }
}

/* ===== Input ===== */

input[role="combobox"] {
  anchor-name: --combobox-input;

  background-color: var(--bg);
  color: var(--fg);

  padding: var(--spacing-xs) var(--spacing-m);

  border-radius: var(--border-radius);
  border: var(--border);

  @include utils.transition(border-color);

  @include utils.enabled {
    @include utils.hover {
      border-color: var(--purple-60);
    }
  }
}

/* ===== Border radius ===== */

[role="listbox"] {
  border-radius: var(--border-radius);

  [role="option"] {
    border-radius: calc(var(--border-radius) / 2);
  }
}

/* ===== List and groups ===== */

[role="listbox"] {
  position: absolute;
  position-anchor: --combobox-input;
  position-area: bottom center;
  inline-size: anchor-size(width);
  margin-block-start: var(--spacing-xs);

  max-block-size: 14rem;
  overflow-block: auto;
  scrollbar-width: thin;

  padding: var(--spacing-s) var(--spacing-xs);
  border: var(--border);
}

[role="group"]:not(:first-child) {
  margin-block-start: var(--spacing-s);
}

[role="group"] {
  @include utils.stack(var(--spacing-xxs));
}

/* ===== Options and group labels ===== */

.group-label,
[role="option"] {
  padding: var(--spacing-xxs) var(--spacing-xs);
}

.group-label {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  color: var(--grey-70);
}

[role="option"] {
  scroll-margin-block: 1em;

  @include utils.space-between(var(--spacing-m));

  @include utils.transition("background-color, color");

  @include utils.enabled {
    cursor: pointer;
  }
}

[role="option"][aria-selected="true"] {
  background-color: var(--purple-20);
  color: var(--purple-80);

  @include utils.enabled {
    @include utils.hover {
      background-color: var(--purple-30);
    }
  }
}

[role="option"][aria-selected="false"] {
  @include utils.enabled {
    @include utils.hover {
      background-color: var(--grey-10);
    }
  }
}

[role="option"][data-active="true"] {
  outline: 2px solid var(--purple-60);
  outline-offset: -2px;
}

[role="group"] > * {
  margin-inline-start: var(--spacing-s);
}

/* ===== Selected indicator ===== */

svg {
  inline-size: var(--icon-size);
  @include utils.transition("opacity");
}

[role="option"][aria-selected="false"] svg {
  visibility: hidden;
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
