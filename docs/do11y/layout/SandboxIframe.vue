<template>
  <iframe :id="frameId" ref="iframe" :title="`${title} sandbox`" :src="url" />

  <Do11yCodeBlock :highlighted-code="showStyles ? highlightedSource : highlightedStylelessSource">
    <Do11ySwitch
      v-model="showStyles"
      :icon="showStyles ? PaintBrushCheckedIcon : PaintBrushUncheckedIcon"
    >
      Styles
    </Do11ySwitch>
  </Do11yCodeBlock>
</template>

<script lang="ts" setup>
import { ref, useId } from "vue";

import type { SandboxIframeProps } from "do11y";

import Do11yCodeBlock from "../components/Do11yCodeBlock.vue";
import Do11ySwitch from "../components/Do11ySwitch.vue";

import PaintBrushUncheckedIcon from "../icons/paint-brush--unchecked.svg?component";
import PaintBrushCheckedIcon from "../icons/paint-brush--checked.svg?component";

interface Props extends SandboxIframeProps {
  title: string;
  height?: `${string}rem`;
}

const props = withDefaults(defineProps<Props>(), {
  height: "17rem",
});

const iframe = ref<HTMLIFrameElement>();

const frameId = useId();

const showStyles = ref(false);
</script>

<style lang="scss">
iframe {
  margin-block-end: var(--spacing-l);

  border-radius: var(--border-radius);
  border: var(--border);

  width: 100%;
  height: v-bind("props.height");
}
</style>
