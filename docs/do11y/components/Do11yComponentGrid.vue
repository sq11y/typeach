<template>
  <PeachyVisuallyHidden v-if="search !== undefined" aria-live="assertive" aria-atomic="true">
    {{ search !== undefined ? searchResultText : undefined }}
  </PeachyVisuallyHidden>

  <nav
    v-if="searchResults.length && search !== ''"
    :class="c('nav', { scrollable })"
    v-bind="$attrs"
  >
    <ul :class="c('list')">
      <li
        v-for="component of searchResults"
        :key="component.path"
        :class="c('list-item')"
        :style="`
          --c-color: var(--${component.meta.color}-80);
          --c-background-color: var(--${component.meta.color}-20);
          --c-border-color: var(--${component.meta.color}-70);
        `"
      >
        <img
          width="500"
          height="281"
          :src="`${router.options.history.base}/illustrations/${component.meta.illustration}`"
          alt=""
        />

        <div :class="c('description')">
          <router-link :to="component.path" @click="emit('click')">
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
import { useBemClass, useFuzzySearch, PeachyVisuallyHidden } from "@typeach/core";

import routes from "do11y:routes";

export interface ComponentGridProps {
  /**
   * The components to show.
   */
  components?: string[];

  /**
   * The current search term.
   *
   * When search is supported, this should never be `undefined`. If you want to specify that there is _currently_ no search term - pass `""`.
   */
  search?: string;

  /**
   * If the area should be scrollable.
   */
  scrollable?: boolean;
}

export interface ComponentGridEmits {
  /**
   * When a component is selected.
   */
  click: [];
}

const props = defineProps<ComponentGridProps>();

const emit = defineEmits<ComponentGridEmits>();

const c = useBemClass("component-grid");

const router = useRouter();

const compoonentRoutes = computed(() => {
  return routes.filter((r) => {
    if (r.path.startsWith("/f")) {
      return true;
    }

    return !r.path.startsWith("/c") ? false : r.path !== "/c";
  });
});

const componentRoutesToInclude = computed(() => {
  return props.components
    ? compoonentRoutes.value.filter((c) => props.components!.some((f) => f === c.meta.title))
    : compoonentRoutes.value;
});

const searchResults = useFuzzySearch(() => props.search, componentRoutesToInclude, [
  "meta.title",
  "meta.alternativeTitles",
  "meta.description",
]);

const searchResultText = computed(() => {
  return `Found ${searchResults.value.length} results for ${props.search}`;
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";
@use "../style/mixins";

.component-grid__nav--scrollable {
  overflow-block: auto;
  scrollbar-gutter: stable;

  padding: var(--spacing-xs);
  margin: calc(var(--spacing-xs) * -1);
}

.component-grid__list {
  --prose-flow-scale: 0;

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

  margin-block-start: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      outline var(--transition-duration) ease-in-out,
      border-color var(--transition-duration) ease-in-out;
  }

  &:hover,
  &:has(:focus-visible) {
    border-color: var(--c-border-color);

    .component-grid__description {
      color: var(--c-color);
      background-color: var(--c-background-color);
    }
  }

  &:has(:focus-visible) {
    @include mixins.focus-visible(var(--c-border-color));
  }

  a {
    color: inherit;

    font-size: var(--font-size-l);
    line-height: var(--line-height-l);

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
  }
}

.component-grid__description {
  padding: var(--spacing-l);
  padding-block: var(--spacing-m);
  margin-block-start: calc((var(--spacing-m) / 2) * -1);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color var(--transition-duration) ease-in-out,
      color var(--transition-duration) ease-in-out;
  }
}
</style>
