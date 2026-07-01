<template>
  <!-- Templates -->

  <DefineDescriptionTemplate v-slot="{ row }">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="row.description" v-html="row.description" />
  </DefineDescriptionTemplate>

  <DefineNecessityTemplate v-slot="{ row, small }">
    <div :class="small ? 'small-faded-text' : ''">
      <span v-if="row.required" class="required-tag">Required</span>

      <template v-else>
        Optional, defaults to <code class="neutral"> {{ row.default ?? "undefined" }} </code>.
      </template>
    </div>
  </DefineNecessityTemplate>

  <!-- Templates end -->

  <h4>Props</h4>

  <Do11yTable
    :titles="['Prop', 'Type', 'Description & Necessity']"
    :small-titles="['Prop', 'Type', 'Description', 'Necessity']"
    :rows="sortedProps"
  >
    <template #prop="{ row }">
      {{ row.name }}
    </template>

    <template #type="{ row }">
      <div class="tags">
        <div v-for="(type, i) in splitTypes(row.type)" :key="i">
          <code>
            {{ type }}
          </code>
        </div>
      </div>
    </template>

    <template #description-necessity="{ row }">
      <ReuseDescriptionTemplate :row="row" />
      <ReuseNecessityTemplate :row="row" :small="true" />
    </template>

    <template #description="{ row }">
      <ReuseDescriptionTemplate :row="row" />
    </template>

    <template #necessity="{ row }">
      <ReuseNecessityTemplate :row="row" />
    </template>
  </Do11yTable>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { createReusableTemplate } from "@vueuse/core";

import type { Meta } from "do11y";

import Do11yTable from "../Do11yTable.vue";

interface MetaProps {
  /**
   * The generated component meta.
   */
  meta: Meta;
}

const props = defineProps<MetaProps>();

const [DefineDescriptionTemplate, ReuseDescriptionTemplate] = createReusableTemplate<{
  row: Meta["props"][number];
}>();

const [DefineNecessityTemplate, ReuseNecessityTemplate] = createReusableTemplate<{
  row: Meta["props"][number];
  small?: boolean;
}>();

const splitTypes = (type: string) => {
  return type
    .split("|")
    .map((t) => t.trim())
    .filter((t) => t !== "undefined");
};

const sortedProps = computed(() => {
  return [...props.meta.props].sort((a, b) => {
    return a.required && b.required ? 0 : a.required ? -1 : 1;
  });
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.tags {
  @include utils.center-flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);

  * {
    min-inline-size: max-content;
  }
}

.small-faded-text {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);

  color: var(--grey-70);
}
</style>
