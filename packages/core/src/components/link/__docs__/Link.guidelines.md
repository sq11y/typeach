<script lang="ts" setup>
  import illustration from './images/link-anatomy.png';

  const anatomy = `
    <template>
      <PeachyLink />
    </template>

    <script lang="ts" setup>
      import { PeachyLink } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Link

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Navigating the user to another website, page or area on the page.

</template>

<template v-slot:dont>

- Performing an action, use [Button](/c/button).
- Downloading content instantly, use [Download link](/c/download-link).
- You want to switch part of the page's content, use [Tabs](/c/tabs).

</template>

</Do11yDoDont>
