<script lang="ts" setup>
  import illustration from './images/button-anatomy.png';

  const anatomy = `
    <template>
      <PeachyButton />
    </template>

    <script lang="ts" setup>
      import { PeachyButton } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Button

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to perform an action.
- Submitting a form.

</template>

<template v-slot:dont>

- Navigating the user to another website, page or area on the page, use [Link](/c/link).
- Downloading content instantly, use [Download link](/c/download-link).
- Copying content, use [Copy button](/c/copy-button).

</template>

</Do11yDoDont>
