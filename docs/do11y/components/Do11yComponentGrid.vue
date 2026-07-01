<template>
  <nav :class="c()">
    <ul>
      <li v-for="component of components" :key="component.path">
        <div :class="c('description')">
          <router-link :to="component.path">
            {{ component.meta.title }}
          </router-link>

          <p>{{ component.meta.description }}</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";

import { useBemClass } from "@typeach/core";

interface ComponentGridProps {
  /**
   * The component routes.
   */
  components: (Omit<RouteRecordRaw, "meta"> & {
    meta: Exclude<RouteRecordRaw["meta"], undefined>;
  })[];
}

defineProps<ComponentGridProps>();

const c = useBemClass("component-grid");
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.component-grid {
  ul {
    list-style: none;
    padding-inline-start: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: var(--spacing-l);
  }

  li {
    position: relative;
    overflow: hidden;

    border-radius: var(--border-radius);
    border: var(--invisible-border);
    background-color: var(--grey-10);

    a {
      font-size: var(--font-size-l);
      line-height: var(--line-height-l);
    }

    p {
      margin-block-start: var(--spacing-xs);
    }
  }
}

.component-grid__description {
  padding: var(--spacing-l);
}
</style>
