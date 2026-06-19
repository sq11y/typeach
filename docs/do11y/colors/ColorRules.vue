<template>
  <Do11yTable
    :titles="['Background', 'Text']"
    :rows="apca ? matchesForAPCA : matchesForWCAG"
    unresponsive
  >
    <template v-slot:background="{ row }">
      <div class="color-rule">
        <div :style="`--color: var(--grey-${row.bg});`" />
        {{ row.bg }}
      </div>
    </template>

    <template v-slot:text="{ row }">
      <div class="color-rule">
        <div v-if="row.fg !== 'ui'" :style="`--color: var(--grey-${row.fg});`" />
        {{ typeof row.fg === "string" ? row.fg : row.fg <= 50 ? `<=${row.fg}` : `>=${row.fg}` }}
      </div>
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import Do11yTable from "../components/Do11yTable.vue";

interface ColorRulesProps {
  apca?: boolean;
}

defineProps<ColorRulesProps>();

import { matchesForWCAG, matchesForAPCA } from "./color-matches";
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.color-rule {
  @include utils.center-flex(var(--spacing-s));

  div {
    forced-color-adjust: none;

    height: var(--icon-size);
    width: calc(var(--icon-size) * 1.5);

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

table:has(.color-rule) {
  font-family: var(--font-family-mono);
}

td:has(.color-rule) {
  padding-block: var(--spacing-m);
}
</style>
