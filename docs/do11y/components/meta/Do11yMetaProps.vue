<template>
  <Do11yTable :titles="['Prop', 'Type', 'Description']" :rows="meta.props">
    <template #prop="{ row }">
      {{ row.name
      }}<span :class="row.required ? 'required' : 'faded'">{{ row.required ? "*" : "?" }}</span>
    </template>

    <template #type="{ row }">
      <div class="tags">
        <code v-for="(type, i) in splitTypes(row.type)" :key="i">
          {{ type }}
        </code>
      </div>

      <div class="small" style="margin-block-start: var(--spacing-xs)">
        <span v-if="row.required" class="required">Required</span>

        <div v-else style="min-inline-size: max-content">
          <span class="faded">Default:</span>
          <code class="colorless">{{ row.default ?? "undefined" }}</code>
        </div>
      </div>
    </template>

    <template #description="{ row }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="row.description" />
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import type { Meta } from "do11y";

import Do11yTable from "../Do11yTable.vue";

interface MetaProps {
  /**
   * The generated component meta.
   */
  meta: Meta;
}

defineProps<MetaProps>();

const splitTypes = (type: string) => {
  return type
    .split("|")
    .map((t) => t.trim())
    .filter((t) => t !== "undefined");
};
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.tags {
  @include utils.dock;
  gap: var(--spacing-xs);

  * {
    min-inline-size: max-content;
  }
}
</style>
