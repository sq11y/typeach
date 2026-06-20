<!-- prettier-ignore -->
<template>
  <PeachyToolbar :controls="id" aria-label="Image controls">
    <PeachyButton
      v-for="(control, i) of controls"
      :key="i"
      :disabled="control.disabled"
      @click="control.onClick"
    >
      {{ control.label }}
    </PeachyButton>
  </PeachyToolbar>

  <figure>
    <div class="image-container">
      <img
        :id="id"
        :src="haymarketAffairPoster"
        alt="Zara Larsson wearing a sparkling pink top"
      />
    </div>
  </figure>
</template>

<script lang="ts" setup>
import { ref, computed, useId } from "vue";

import { PeachyToolbar, PeachyButton } from "@typeach/core";

const id = useId();

const zoom = ref(100);

const cssScale = computed(() => Math.min(Math.max(zoom.value, 25), 200) / 100);

const controls = computed(() => [
  {
    label: "Zoom out",
    onClick: () => (zoom.value -= 25),
    disabled: zoom.value <= 100,
  },
  {
    label: "Zoom in",
    onClick: () => (zoom.value += 25),
    disabled: zoom.value >= 200,
  },
  {
    label: "Reset",
    onClick: () => (zoom.value = 100),
    disabled: zoom.value === 100,
  },
]);

const haymarketAffairPoster = `https://upload.wikimedia.org/wikipedia/commons/e/eb/Haymarketnewspaper.jpg`;
</script>

<style lang="scss" scoped>
.image-container {
  overflow: hidden;
}

img {
  will-change: scale;
  transform-origin: top left;
  transition: scale calc(var(--transition-duration) / 2) cubic-bezier(0.65, 0, 0.35, 1);
  scale: v-bind("cssScale");
}
</style>

<style lang="scss">
@use "@typeach/theme/utils";

:root {
  --border-radius: 8px;
  --border-shape: 1px solid;
  --border: var(--border-shape) var(--grey-40);
}

[role="toolbar"] {
  @include utils.center-flex(var(--spacing-xs));
  justify-content: center;
  flex-wrap: wrap;
}

figure {
  margin-block-start: var(--spacing-l);

  @include utils.vertical-flex(var(--spacing-xs));
  align-items: center;

  .image-container {
    border-radius: var(--border-radius);
  }

  img {
    width: 14rem;
    border-radius: inherit;
  }

  figcaption {
    margin-block-start: var(--spacing-s);
  }
}

button {
  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-l);

  border: var(--border);
  border-radius: var(--border-radius);

  background-color: var(--bg);
  color: var(--grey-70);

  @include utils.transition("background-color, border-color");

  @include utils.enabled {
    cursor: pointer;

    &:active {
      background-color: var(--grey-10);
      border-color: var(--grey-60);
    }

    @include utils.hover {
      border-color: var(--grey-60);
    }
  }

  @include utils.disabled {
    background-color: var(--grey-20);
  }
}

a {
  color: var(--blue-80);

  border-radius: var(--border-radius);
  corner-shape: squircle;

  padding-inline: var(--relative-spacing-xs);
  margin-inline: calc(var(--relative-spacing-xs) * -1);
}

*:focus-visible {
  outline: 2px solid var(--blue-80);
  box-shadow: 0 0 0 6px var(--blue-30);
}
</style>
