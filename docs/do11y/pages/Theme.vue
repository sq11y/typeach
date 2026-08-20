<template>
  <h1 id="theme-heading">Theme</h1>

  <div class="description"><code>pnpm i @typeach/theme</code></div>

  <Do11yComponentGrid aria-labelledby="theme-heading" :components="pages" />
</template>

<script lang="ts" setup>
import Do11yComponentGrid from "../components/Do11yComponentGrid.vue";

const pages = [
  {
    path: "/p/colors",
    meta: { title: "Colors", illustration: "colors.png", color: "pink" },
  },
  {
    path: "/p/typography",
    meta: { title: "Typography", illustration: "typography.png", color: "green" },
  },
  {
    path: "/p/spacing",
    meta: { title: "Spacing", illustration: "spacing.png", color: "blue" },
  },
];
</script>
