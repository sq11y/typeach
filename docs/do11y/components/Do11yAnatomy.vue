<template>
  <h2 :class="c('title')">
    Anatomy

    <Do11yCopyButton class="s" :content="code" label="Copy for Vue" />
  </h2>

  <img alt="" :class="c('illustration')" :src="illustration" />

  <slot />
</template>

<script lang="ts" setup>
import { useBemClass } from "@typeach/core";

import Do11yCopyButton from "./Do11yCopyButton.vue";

export interface AnatomyProps {
  /**
   * The url to the illustration.
   */
  illustration: string;

  /**
   * The simple anatomy code.
   */
  code: string;
}

export interface AnatomySlots {
  /**
   * The nested list visualization of the anatomy.
   */
  default: () => void;
}

defineProps<AnatomyProps>();

defineSlots<AnatomySlots>();

const c = useBemClass("anatomy");
</script>

<style lang="scss" scoped>
@use "@typeach/theme/utils";

.anatomy__title {
  @include utils.space-between;
  gap: var(--relative-spacing-s);
}

.anatomy__illustration {
  inline-size: 100%;
  border: var(--border);
  border-radius: var(--border-radius);
}
</style>
