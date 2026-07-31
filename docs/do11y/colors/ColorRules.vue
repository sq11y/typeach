<template>
  <Do11yTable
    :titles="['Background', 'Text']"
    :rows="apca ? matchesForAPCA : matchesForWCAG"
    unresponsive
  >
    <template #background="{ row }">
      <div :class="c('rule')">
        <div :style="`--color: var(--grey-${row.bg});`" />
        {{ row.bg }}
      </div>
    </template>

    <template #text="{ row }">
      <div :class="c('rule')">
        <div v-if="row.fg !== 'ui'" :style="`--color: var(--grey-${row.fg});`" />
        {{ typeof row.fg === "string" ? row.fg : row.fg <= 50 ? `<=${row.fg}` : `>=${row.fg}` }}
      </div>
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import { matchesForWCAG, matchesForAPCA } from "./color-matches";

import Do11yTable from "../components/Do11yTable.vue";

interface ColorRulesProps {
  /**
   * If the color matches should pass APCA.
   */
  apca?: boolean;
}

defineProps<ColorRulesProps>();

const c = useBemClass("color-rules");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.color-rules__rule {
  @include utils.dock(var(--spacing-s));

  div {
    forced-color-adjust: none;

    block-size: var(--icon-size);
    inline-size: calc(var(--icon-size) * 1.5);

    border: var(--border);
    border-radius: calc(var(--border-radius) / 2);
    background-color: var(--color);

    @supports (corner-shape: squircle) {
      corner-shape: squircle;
      border-radius: calc(var(--border-radius) * 2);
    }

    @media (forced-colors: active) {
      border-color: ButtonBorder;
    }
  }
}

table:has(.color-rules__rule) {
  font-family: var(--font-family-mono);
}

td:has(.color-rules__rule) {
  padding-block: var(--spacing-m);
}
</style>
