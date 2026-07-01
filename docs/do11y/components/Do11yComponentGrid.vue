<template>
  <nav :class="c()">
    <ul :class="c('list')">
      <li v-for="component of components" :key="component.path" :class="c('list-item')">
        <img
          :src="`${$router.options.history.base || '/'}illustrations/${component.meta.illustration}`"
          alt=""
        />

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
import { useRouter } from "vue-router";

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

const router = useRouter();
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.component-grid__list {
  list-style: none;
  padding-inline-start: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: var(--spacing-l);
}

.component-grid__list-item {
  position: relative;
  overflow: hidden;

  border-radius: var(--border-radius);
  border: var(--border);
  background-color: var(--grey-10);

  a {
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
    }
  }

  p {
    margin-block-start: var(--spacing-xxs);

    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }

  img {
    inline-size: 100%;
    background-color: var(--bg);
  }
}

.component-grid__description {
  padding: var(--spacing-l);
}
</style>
