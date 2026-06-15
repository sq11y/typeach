<template>
  <PeachyCopyButton v-slot="{ isCopying }" content="Hello world.">
    {{ isCopying ? "Copied" : "Copy" }}
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";
</script>
