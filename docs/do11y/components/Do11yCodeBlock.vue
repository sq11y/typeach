<template>
  <div :class="c()">
    <div :class="c('toolbar')">
      <slot />

      <Do11ySwitch v-model="themeSettings.wrapCode" :icon="true ? TextWrapCheckIcon : TextWrapIcon">
        Wrap
      </Do11ySwitch>

      <Do11yCopyButton :content="code" />
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="highlightedCode" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useBemClass, useThemeSettingsStore } from "@typeach/core";

import Do11ySwitch from "./Do11ySwitch.vue";
import Do11yCopyButton from "./Do11yCopyButton.vue";

import TextWrapIcon from "../icons/text-wrap.svg?component";
import TextWrapCheckIcon from "../icons/text-wrap--checked.svg?component";

interface CodeBlockProps {
  /**
   * The HTMl for the code.
   */
  highlightedCode: string;
}

interface CodeBlockSlots {
  /**
   * Additional controls for the code block.
   */
  default: (data: void) => void;
}

const props = defineProps<CodeBlockProps>();

defineSlots<CodeBlockSlots>();

const c = useBemClass("code-block");

const themeSettings = useThemeSettingsStore();

const code = computed(() => {
  const element = document.createElement("div");
  element.innerHTML = props.highlightedCode;
  return element.textContent;
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.code-block {
  overflow: hidden;

  border: var(--invisible-border);
  border-radius: var(--border-radius);

  background-color: var(--grey-10);

  pre:focus-visible {
    outline-offset: -2px;
    box-shadow: inset 0 0 0 6px var(--blue-30);
  }
}

.code-block__toolbar {
  @include utils.center-flex(var(--spacing-xs));
  justify-content: end;

  padding: var(--spacing-m);
  padding-block-end: 0;
}
</style>
