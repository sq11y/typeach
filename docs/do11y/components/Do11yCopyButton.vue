<template>
  <PeachyCopyButton v-slot="{ isCopying }" :content="content">
    {{ isCopying ? "Copied" : "Copy" }}

    <CopiedIcon v-if="isCopying" />
    <CopyIcon v-else />
  </PeachyCopyButton>
</template>

<script lang="ts" setup>
import { PeachyCopyButton } from "@typeach/core";

import CopyIcon from "../icons/clipboard.svg?component";
import CopiedIcon from "../icons/clipboard--checked.svg?component";

interface CopyButtonProps {
  content: string;
}

defineProps<CopyButtonProps>();
</script>
