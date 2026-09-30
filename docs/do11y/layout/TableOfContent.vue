<template>
  <nav aria-label="Table of content">
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

<style>
/* stylelint-disable selector-pseudo-class-no-unknown */

.table-of-content {
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  padding-inline-start: 1.375rem;

  a {
    color: var(--grey-70);
    text-decoration: none;
  }

  li:not(:has(:target-current))::before {
    background-color: transparent;
  }
}

@supports (scroll-target-group: auto) {
  html {
    scroll-target-group: auto;
  }

  .table-of-content a:target-current {
    color: var(--pink-80);
    font-weight: var(--font-weight-medium);
  }
}
</style>
