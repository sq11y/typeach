<template>
  <Do11yTable :titles="['Value', '4.5:1', '3:1', '7:1']" :rows="matchesForWCAG" unresponsive small>
    <template #value="{ row }">
      <div :class="c('rule')">
        <div class="color-swatch" :style="`background-color: var(--grey-${row.bg});`" />
        {{ row.bg }}
      </div>
    </template>

    <template #451="{ row }">
      <div v-if="row.fg" :class="c('rule')">
        <div class="color-swatch" :style="`background-color: var(--grey-${row.fg});`" />
        {{ row.fg }}
      </div>
    </template>

    <template #31="{ row }">
      <div v-if="row.ui" :class="c('rule')">
        <div class="color-swatch" :style="`background-color: var(--grey-${row.ui});`" />
        {{ row.ui }}
      </div>
    </template>

    <template #71="{ row }">
      <div v-if="row.aaa" :class="c('rule')">
        <div class="color-swatch" :style="`background-color: var(--grey-${row.aaa});`" />
        {{ row.aaa }}
      </div>
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";
import { matchesForWCAG } from "./colors.ts";

import Do11yTable from "../components/Do11yTable.vue";

const c = useBemClass("color-rules");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.color-rules__rule {
  @include utils.dock;
  gap: var(--spacing-s);
}
</style>
