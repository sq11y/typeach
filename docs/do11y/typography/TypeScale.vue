<template>
  <ol class="type-scale">
    <li
      v-for="size of scale"
      :key="size"
      :style="`--font-size: var(--font-size-${size}); --line-height: var(--line-height-${size}); `"
      class="font-size"
    >
      {{ size }} ({{ variables[size] }})
    </li>
  </ol>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useCssVar } from "@vueuse/core";

const scale = ["xxxxxl", "xxxxl", "xxxl", "xxl", "xl", "l", "m", "s", "xs"] as const;

const variables = computed(() => {
  const result = {} as Record<(typeof scale)[number], string>;

  for (const size of scale) {
    result[size] = useCssVar(`--font-size-${size}`).value?.match(/\d+\.?\d*rem/)?.[0] ?? "";
  }

  return result;
});
</script>

<style>
.type-scale {
  --outdent: 4rem;

  list-style: none;
  overflow: hidden;
  padding-inline-start: 0;

  inline-size: calc(100% + var(--outdent));
  transform: translateX(calc(var(--outdent) / 2 * -1));

  border: var(--border);
  border-radius: var(--border-radius);

  overflow-wrap: break-word;
}

.font-size {
  inline-size: 100%;
  max-inline-size: 100%;

  padding-inline: calc(var(--spacing-xl) + (var(--outdent) / 2));

  font-size: var(--font-size);
  line-height: var(--line-height);

  &:first-child {
    padding-block-start: calc(var(--spacing-xl) + (var(--outdent) / 2));
  }

  &:last-child {
    padding-block-end: calc(var(--spacing-xl) + (var(--outdent) / 2));
  }

  &:nth-child(5),
  &:nth-child(7) {
    border-block-start: var(--border);
    padding-block-start: var(--spacing-xl);
  }

  &:nth-child(4),
  &:nth-child(6) {
    padding-block-end: var(--spacing-xl);
  }
}
</style>
