<script lang="ts" setup>
  import illustration from './images/download-link-anatomy.png';

  const anatomy = `
    <template>
      <PeachyDownloadLink />
    </template>

    <script lang="ts" setup>
      import { PeachyDownloadLink } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Download link

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Downloading content instantly.

</template>

<template v-slot:dont>

- Downloading content with a significant loading time, use [Button](/c/button).

</template>

</Do11yDoDont>
