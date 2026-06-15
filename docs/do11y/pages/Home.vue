<template></template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onBeforeMount(() => {
  router.push({ path: "/p/components" });
});
</script>
