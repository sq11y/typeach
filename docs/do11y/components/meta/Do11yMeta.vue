<template>
  <Do11yComponentMetaProps v-if="meta.props.length" :meta="meta" />
  <Do11yComponentMetaGrid v-if="meta.slots.length" :meta="meta.slots" title="Slots" />
  <Do11yComponentMetaGrid v-if="meta.events.length" :meta="meta.events" title="Events" events />
</template>

<script lang="ts" setup>
import type { Meta } from "do11y";

import Do11yComponentMetaProps from "./Do11yMetaProps.vue";
import Do11yComponentMetaGrid from "./Do11yMetaGrid.vue";

interface MetaProps {
  meta: Meta;
}

defineProps<MetaProps>();
</script>
