<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="meta.description" v-html="meta.description" />

  <Do11yComponentMetaProps v-if="meta.props.length" :meta="meta" />

  <Do11yComponentMetaGrid v-if="meta.events.length" :props="meta.events" emit />

  <Do11yComponentMetaGrid v-if="meta.slots.length" :props="meta.slots" />
</template>

<script lang="ts" setup>
import type { Meta } from "do11y";

import Do11yComponentMetaProps from "./Do11yMetaProps.vue";
import Do11yComponentMetaGrid from "./Do11yMetaGrid.vue";

interface MetaProps {
  /**
   * The generated component meta.
   */
  meta: Meta;
}

defineProps<MetaProps>();
</script>
