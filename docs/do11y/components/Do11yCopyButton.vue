<template>
  <PeachyCopyButton v-slot="{ isCopying }" :content="content" class="button">
    {{ isCopying ? "Copied" : "Copy" }}

    <CopiedSvg v-if="isCopying" aria-hidden="true" />
    <CopySvg v-else aria-hidden="true" />
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";

import CopySvg from "../icons/clipboard.svg?component";
import CopiedSvg from "../icons/clipboard--checked.svg?component";

interface CopyButtonProps {
  /**
   * The content that is to be copied on click.
   */
  content: string;
}

defineProps<CopyButtonProps>();
</script>
