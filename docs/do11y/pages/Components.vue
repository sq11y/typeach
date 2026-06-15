<template>
  <h1 id="components-heading">Components</h1>

  <Do11yComponentGrid aria-labelledby="components-heading" :components="componentRoutes" />

  <h2 id="fields-heading">Fields</h2>

  <Do11yComponentGrid aria-labelledby="fields-heading" :components="fieldsRoutes" />
</template>

<script lang="ts" setup>
import { computed } from "vue";

import routes from "do11y:routes";

import Do11yComponentGrid from "../components/Do11yComponentGrid.vue";

const componentRoutes = computed(() => {
  return routes.filter((r) => {
    return !r.path.startsWith("/c") ? false : r.path !== "/c";
  });
});

const fieldsRoutes = computed(() => {
  return routes.filter((r) => {
    return r.path.startsWith("/f");
  });
});
</script>
