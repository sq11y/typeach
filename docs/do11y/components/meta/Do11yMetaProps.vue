<template>
  <Do11yTable
    :class="c('table')"
    :titles="['Prop', 'Type']"
    :small-titles="['Prop', 'Description', 'Type']"
    :rows="props"
  >
    <template #prop="{ row, small }">
      <!-- prettier-ignore -->
      <div :class="c('title')">
        {{ row.name }}<span :class="row.required ? 'required' : small ? 'faded-green' : 'faded'">{{ row.required ? "*" : "?" }}</span>
      </div>

      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="!small && row.description"
        :class="c('description')"
        v-html="row.description?.replace('<code', '<code class=grey')"
      />
    </template>

    <template #description="{ row }">
      <!-- eslint-disable vue/no-v-html -->
      <div v-if="row.description" v-html="row.description?.replace('<code', '<code class=grey')" />
    </template>

    <template #type="{ row }">
      <div :class="c('types')">
        <code v-for="(type, i) in splitTypes(row.type)" :key="i">
          {{ type }}
        </code>
      </div>

      <div :class="c('necessity')">
        <span v-if="row.required" class="required">Required</span>

        <div v-else>
          <span class="faded">Default:</span>
          <code class="colorless">{{ row.default ?? "undefined" }}</code>
        </div>
      </div>
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import type { Meta } from "do11y";
import { useBemClass } from "@typeach/core";

import Do11yTable from "../Do11yTable.vue";

interface MetaProps {
  /**
   * The props.
   */
  props: Meta["props"];
}

defineProps<MetaProps>();

const c = useBemClass("meta-props");

const splitTypes = (type: string) => {
  return type
    .split("|")
    .map((t) => t.trim())
    .filter((t) => t !== "undefined");
};
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.meta-props__table td:first-child {
  max-inline-size: 28rem;
}

.meta-props__types {
  @include utils.dock;
  gap: var(--spacing-xs);

  * {
    min-inline-size: max-content;
  }
}

table .meta-props__title {
  font-size: var(--font-size-l);
  line-height: var(--line-height-l);

  font-family: var(--font-family-heading);
}

.meta-props__description,
.meta-props__necessity {
  margin-block-start: var(--spacing-xs);
}

.meta-props__necessity {
  min-inline-size: max-content;
}
</style>
