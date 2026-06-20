<template>
  <PeachyToolbar :orientation="orientation" controls="id">
    <PeachyButton>1</PeachyButton>
    <PeachyDownloadLink url="/logo.webp">2</PeachyDownloadLink>
    <PeachyButton>3</PeachyButton>
  </PeachyToolbar>

  <div id="id"></div>
</template>

<script lang="ts" setup>
import { PeachyDownloadLink } from "../../download-link";
import { PeachyToolbar } from "../../toolbar";
import { PeachyButton } from "../../button";

interface ToolbarTestProps {
  orientation?: "vertical";
}

defineProps<ToolbarTestProps>();
</script>

<style>
[aria-orientation="vertical"] {
  display: grid;
}
</style>
