<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

## Anatomy

<img alt="" class="anatomy-illustration" src="./images/copy-button-anatomy.png" />

1. Copy button

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- Copying content.

</template>

<template v-slot:dont>

- Downloading content instantly, use [Download link](/c/download-link).

</template>

</Do11yDoDont>
