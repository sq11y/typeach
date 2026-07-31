<template>
  <nav :class="c('container')">
    <ol :class="c()">
      <li v-for="link of documentOutline[0]?.children || []" :key="link.heading.id">
        <RouterLink :to="`#${link.heading.id}`">
          {{ link.heading.title }}
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { useBemClass, useDocumentOutline } from "@typeach/core";
import { kebabCase } from "change-case";

const c = useBemClass("table-of-content");

const { documentOutline } = useDocumentOutline((heading, level) => {
  if (!heading.id && level === 2) {
    heading.id = kebabCase(heading.textContent);
  }

  return {
    title: heading.textContent,
    id: heading.id,
  };
});
</script>

<style lang="scss">
iframe {
  anchor-name: --iframe;
}

.table-of-content__container {
  position: absolute;
  position-anchor: --iframe;
  inset-block-start: anchor(top);
  inset-inline-start: calc(anchor(right) + var(--spacing-xl));

  /* @TODO Fix magic number */
  block-size: calc(100% - 60rem);
}

.table-of-content {
  position: sticky;
  inset-block-start: calc(5rem + var(--spacing-xxxl));
  inline-size: 10rem;

  display: flex;
  flex-direction: column;
}
</style>
