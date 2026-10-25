<template>
  <div :class="c()">
    <div :class="c('toolbar')">
      <Do11ySizeRadio v-model="size" />
    </div>

    <div :class="c('wrapper')">
      <iframe :id="frameId" ref="element" :title="`${title} sandbox`" :src="url" />
    </div>
  </div>

  <Do11yCodeBlock :highlighted-code="showStyles ? highlightedSource : highlightedStylelessSource">
    <Do11ySwitch
      v-model="showStyles"
      :icon="showStyles ? PaintBrushCheckedSvg : PaintBrushUncheckedSvg"
    >
      Styles
    </Do11ySwitch>
  </Do11yCodeBlock>
</template>

<script lang="ts" setup>
import { computed, ref, useId, useTemplateRef, watch } from "vue";
import { useBemClass } from "@typeach/core";

import type { SandboxIframeProps } from "do11y";

import Do11yCodeBlock from "../components/Do11yCodeBlock.vue";
import Do11ySwitch from "../components/Do11ySwitch.vue";
import Do11ySizeRadio from "../components/Do11ySizeRadio.vue";

import PaintBrushUncheckedSvg from "../icons/paint-brush--unchecked.svg?component";
import PaintBrushCheckedSvg from "../icons/paint-brush--checked.svg?component";

interface Props extends SandboxIframeProps {
  /**
   * The component name.
   */
  title: string;

  /**
   * Preferred block size.
   */
  blockSize?: `${string}rem`;
}

const props = withDefaults(defineProps<Props>(), {
  blockSize: "17rem",
});

const c = useBemClass("sandbox-iframe");

const frameId = useId();

const element = useTemplateRef("element");

const showStyles = ref(false);

const size = ref<"mobile" | "desktop">();

const inlineSize = computed(() => {
  if (!size.value) {
    return "100%";
  }

  return size.value === "mobile" ? "278px" : "calc(48rem - (2 * var(--border-width)))";
});

watch(inlineSize, () => {
  element.value?.style.removeProperty("width");
});
</script>

<style lang="scss" scoped>
@use "@typeach/theme/utils";

iframe {
  border: 0;

  inline-size: v-bind("inlineSize");
  max-inline-size: calc(48rem - (2 * var(--border-width)));
  min-inline-size: 278px;
  block-size: v-bind("props.blockSize");

  background-color: var(--bg);
}

.sandbox-iframe {
  border-radius: var(--border-radius);
  border: var(--border);
  overflow: hidden;
}

.sandbox-iframe__wrapper {
  overflow-inline: auto;
  background-color: var(--grey-20);
  scrollbar-width: none;
}

.sandbox-iframe__toolbar {
  border-block-end: var(--border);

  @include utils.dock;
  justify-content: end;
  gap: var(--spacing-m);

  padding: var(--spacing-m);
}
</style>
