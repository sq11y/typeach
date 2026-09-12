<template>
  <nav :class="c()">
    <ul :class="c('list')">
      <li
        v-for="component of filteredComponents"
        :key="component.path"
        :class="c('list-item')"
        :style="`
          --c-color: var(--${component.meta.color}-80);
          --c-background-color: var(--${component.meta.color}-30);
          --c-pale-background-color: var(--${component.meta.color}-10);
          --c-border-color: var(--${component.meta.color}-60);
        `"
      >
        <img
          width="500"
          height="281"
          :src="`${router.options.history.base}/illustrations/${component.meta.illustration}`"
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
import { computed } from "vue";

import { useRouter } from "vue-router";
import { useBemClass } from "@typeach/core";

import routes from "do11y:routes";

export interface ComponentGridProps {
  /**
   * The components to show.
   */
  components?: string[];
}

const props = defineProps<ComponentGridProps>();

const c = useBemClass("component-grid");

const router = useRouter();

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

const filteredComponents = computed(() => {
  const components = [...componentRoutes.value, ...fieldsRoutes.value];

  return props.components
    ? components.filter((c) => props.components!.some((filter) => filter === c.meta.title))
    : components;
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style/mixins";

.component-grid__list {
  list-style: none;
  margin-inline-start: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: var(--spacing-l);
}

.component-grid__list-item {
  position: relative;
  overflow: hidden;

  border-radius: var(--border-radius);
  border: var(--border);

  background-color: var(--c-pale-background-color);
  color: var(--c-color);

  margin-block-start: 0;

  @include utils.transition(border-color, background-color);

  @include utils.hover {
    border-color: var(--c-border-color);
    background-color: var(--c-background-color);
  }

  &:has(:focus-visible) {
    @include mixins.focus-visible;
  }

  a {
    color: inherit;

    font-size: var(--font-size-l);
    line-height: var(--line-height-l);

    @include utils.transition(color);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
    }

    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }

  p {
    margin-block-start: var(--spacing-xxs);

    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }

  img {
    inline-size: 100%;
    block-size: auto;
    background-color: var(--bg);
    border-block-end: var(--invisible-border);
  }
}

.component-grid__description {
  padding: var(--spacing-l);
}
</style>
