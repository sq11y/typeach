<script setup>
  import { useRouter } from 'vue-router';
  import illustration from './images/copy-button-anatomy.png';

  const router = useRouter();

  const anatomy = `
    <template>
      <PeachyCopyButton />
    </template>

    <script lang="ts" setup>
      import { PeachyCopyButton } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Copy button

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Copying content.

</template>

<template v-slot:dont>

- Downloading content instantly, use [Download link](/c/download-link).

</template>

</Do11yDoDont>
