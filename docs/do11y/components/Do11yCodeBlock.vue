<template>
  <div :class="c()">
    <div :class="c('toolbar')">
      <slot />

      <Do11ySwitch v-model="themeSettings.wrapCode" :icon="true ? TextWrapCheckSvg : TextWrapSvg">
        Wrap
      </Do11ySwitch>

      <Do11yCopyButton :content="code" />
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div :id="id" :aria-hidden="!showCode" v-html="modifiedHighlightedCode" />

    <Do11yButton
      :class="c('toggle-button')"
      :aria-controls="id"
      :aria-expanded="showCode"
      grey
      @click="showCode = !showCode"
    >
      {{ showCode ? "Hide" : "Show" }} code

      <component :is="showCode ? CaretDownUpSvg : CaretUpDownSvg" aria-hidden="true" />
    </Do11yButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useId } from "vue";
import { useBemClass, useThemeSettingsStore } from "@typeach/core";

import Do11ySwitch from "./Do11ySwitch.vue";
import Do11yCopyButton from "./Do11yCopyButton.vue";
import Do11yButton from "./Do11yButton.vue";

import TextWrapSvg from "../icons/text-wrap.svg?component";
import TextWrapCheckSvg from "../icons/text-wrap--checked.svg?component";

import CaretUpDownSvg from "../icons/caret-up-down.svg?component";
import CaretDownUpSvg from "../icons/caret-down-up.svg?component";

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
  default: () => void;
}

const props = defineProps<CodeBlockProps>();

defineSlots<CodeBlockSlots>();

const c = useBemClass("code-block");

const id = useId();

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
