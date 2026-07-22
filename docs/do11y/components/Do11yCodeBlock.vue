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
    <div :aria-hidden="!showCode" v-html="modifiedHighlightedCode" />

    <Do11yButton v-if="!showCode" :class="c('toggle-button')" grey @click="showCode = true">
      View code
    </Do11yButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useBemClass, useThemeSettingsStore } from "@typeach/core";

import Do11ySwitch from "./Do11ySwitch.vue";
import Do11yCopyButton from "./Do11yCopyButton.vue";
import Do11yButton from "./Do11yButton.vue";

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

const showCode = ref(false);

const modifiedHighlightedCode = computed(() => props.highlightedCode.replace(`tabindex="0"`, ""));

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
  position: relative;

  border: var(--invisible-border);
  border-radius: var(--border-radius);

  pre {
    z-index: -1;
    position: relative;
  }

  [aria-hidden="true"] pre {
    max-block-size: 20rem;

    &::before {
      position: absolute;
      content: "";
      inset: 0;

      background: linear-gradient(180deg, transparent, var(--grey-10));
    }
  }
}

.code-block__toolbar {
  background-color: var(--grey-10);

  @include utils.center-flex(var(--spacing-xs));
  justify-content: end;

  padding: var(--spacing-m);
  padding-block-end: 0;
}

.code-block__toggle-button {
  position: absolute;
  inset-block-end: var(--spacing-l);
  justify-self: center;
}
</style>
