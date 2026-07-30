<!-- prettier-ignore -->
<template>
  <PeachyListboxField>
    <PeachyFieldLabel>Favorite characters</PeachyFieldLabel>

    <PeachyListboxInput
      v-model="value"
      multiselect
    >
      <PeachyListboxOption value="devi-vishwakumar">Devi Vishwakumar <HeartSvg aria-hidden="true" /></PeachyListboxOption>
      <PeachyListboxOption value="jinx">Jinx <HeartSvg aria-hidden="true" /></PeachyListboxOption>

      <PeachyListboxGroup>
        <PeachyListboxGroupTitle>Grey's Anatomy</PeachyListboxGroupTitle>

        <PeachyListboxOption value="christina-yang">Christina Yang <HeartSvg aria-hidden="true" /></PeachyListboxOption>
        <PeachyListboxOption value="izzie-stevens">Izzie Stevens <HeartSvg aria-hidden="true" /></PeachyListboxOption>
        <PeachyListboxOption value="meredith-grey">Meredith Grey <HeartSvg aria-hidden="true" /></PeachyListboxOption>
        <PeachyListboxOption value="miranda-bailey">Miranda Bailey <HeartSvg aria-hidden="true" /></PeachyListboxOption>
      </PeachyListboxGroup>

      <PeachyListboxGroup>
        <PeachyListboxGroupTitle>One Tree Hill</PeachyListboxGroupTitle>

        <PeachyListboxOption disabled value="peyton-sawyer">Peyton Sawyer <HeartSvg aria-hidden="true" /></PeachyListboxOption>
        <PeachyListboxOption value="brooke-davis">Brooke Davis <HeartSvg aria-hidden="true" /></PeachyListboxOption>
        <PeachyListboxOption value="haley-scott">Haley Scott <HeartSvg aria-hidden="true" /></PeachyListboxOption>
      </PeachyListboxGroup>
    </PeachyListboxInput>
  </PeachyListboxField>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  PeachyListboxField,
  PeachyListboxGroup,
  PeachyListboxInput,
  PeachyListboxOption,
  PeachyFieldLabel,
  PeachyListboxGroupTitle,
} from "@typeach/core";

import HeartSvg from "./icons/heart.svg?component";

const value = ref(["devi-vishwakumar", "jinx", "christina-yang", "brooke-davis"]);
</script>

<style lang="scss">
@use "@typeach/theme/utils";

/* ===== Variables ===== */

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);

  --font-weight-medium: 500;

  --icon-size: 1.25em;
}

/* ===== Label ===== */

label {
  display: block;
  margin-block-end: var(--spacing-s);

  font-weight: var(--font-weight-medium);
}

/* ===== Border radius ===== */

[role="listbox"] {
  border-radius: var(--border-radius);

  > :first-child,
  > :first-child > :first-child {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  > :last-child,
  > :last-child > :last-child {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
}

/* ===== List and groups ===== */

[role="listbox"] {
  min-inline-size: max-content;

  @include utils.stack;

  border: var(--border);
}

[role="group"]:not(:first-child) {
  margin-block-start: var(--spacing-xs);
}

/* ===== Options and group titles ===== */

[role="presentation"],
[role="option"] {
  padding: var(--spacing-xxs) var(--spacing-s);
}

[role="presentation"] {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  color: var(--grey-70);
}

[role="option"] {
  @include utils.space-between(var(--spacing-m));

  @include utils.transition("background-color, color");

  @include utils.enabled {
    cursor: pointer;
  }
}

[role="option"][aria-selected="true"] {
  background-color: var(--pink-30);
  color: var(--pink-80);

  @include utils.enabled {
    @include utils.hover {
      background-color: var(--pink-40);
    }
  }
}

[role="option"][aria-selected="false"] {
  @include utils.enabled {
    @include utils.hover {
      background-color: var(--grey-20);
    }
  }
}

/* ===== Disabled ===== */

[role="option"] {
  @include utils.disabled {
    background-color: var(--grey-50);
    color: var(--grey-80);

    @media (forced-colors: active) {
      color: GrayText;
      border-color: GrayText;
    }
  }
}

[role="group"] > * {
  padding-inline-start: var(--spacing-l);
}

/* ===== Selected indicator ===== */

svg {
  inline-size: var(--icon-size);
  min-inline-size: var(--icon-size);

  @include utils.transition("opacity");
}

[role="option"][aria-selected="false"] {
  svg {
    opacity: 0;
  }
}

/* ===== Focus indicators ===== */

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
  isolation: isolate;
}
</style>
