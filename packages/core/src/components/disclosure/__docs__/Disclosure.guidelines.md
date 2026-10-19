<script lang="ts" setup>
  import illustration from './images/disclosure-anatomy.png';

  const anatomy = `
    <template>
      <PeachyDisclosure>
        <PeachyDisclosureButton />
        <PeachyDisclosurePanel />
      </PeachyDisclosure>
    </template>

    <script lang="ts" setup>
      import { PeachyDisclosure, PeachyDisclosureButton, PeachyDisclosurePanel } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Button - toggles the content
2. Panel - the content

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to hide information that is only relevant to some users.
- Part of a frequently asked questions page.

</template>

<template v-slot:dont>

- You want sub-pages without loading a new page or you want to split the page into sections, use [Tabs](/c/tabs).

</template>

</Do11yDoDont>
