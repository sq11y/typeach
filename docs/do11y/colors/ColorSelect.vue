<template>
  <div :class="c()">
    <span aria-hidden="true">Show accessible values for</span>

    <Do11ySelect
      v-model="modelValue"
      placeholder="Pick a value"
      :label="colorLabel"
      :options="colorOptions"
    >
      <template #option-icon="{ option }">
        <div class="color-swatch" :style="`background-color: var(${option.value});`" />
      </template>
    </Do11ySelect>

    <template v-if="modelValue">
      <Do11ySelect
        v-model="compatibilityModelValue"
        label="Minimum contrast"
        placeholder="Pick compatibility level"
        :options="compatibilityOptions"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";

import { useBemClass, type ComboboxGroup, type ComboboxOption } from "@typeach/core";

import { colors, ColorValues, type ColorContrastKey } from "./colors.ts";

import Do11ySelect from "../components/Do11ySelect.vue";

const c = useBemClass("color-select");

const compatibilityModelValue = defineModel<ColorContrastKey>("compatibility");

const modelValue = defineModel<string>();

watch(modelValue, (newModelValue, oldModelValue) => {
  if (newModelValue && !oldModelValue) {
    compatibilityModelValue.value = "AAText";
  }

  if (newModelValue === "none") {
    modelValue.value = undefined;
  }
});

const colorOptions = computed<(ComboboxGroup | ComboboxOption)[]>(() => {
  const colorOptions = colors.map((color): ComboboxGroup | ComboboxOption => {
    const label = color.charAt(0).toUpperCase() + color.slice(1);

    return {
      label,
      options: ColorValues.map((i) => ({
        label: `${label} ${i}`,
        value: `--${color}-${i}`,
        id: `${color}-${i}`,
      })),
    };
  });

  if (modelValue.value) {
    colorOptions.unshift({
      label: "None",
      value: "none",
      id: "none",
    });
  }

  return colorOptions;
});

const compatibilityOptions: { label: string; value: ColorContrastKey; id: ColorContrastKey }[] = [
  { label: "AA Interface (3:1)", value: "AAInterface", id: "AAInterface" },
  { label: "AA Text (4:5)", value: "AAText", id: "AAText" },
  { label: "AAA Interface (4:5)", value: "AAAInterface", id: "AAAInterface" },
  { label: "AAA Text (7:1)", value: "AAAText", id: "AAAText" },
];

const colorLabel = computed(() => {
  const currentCompatibility =
    compatibilityOptions.find((o) => o.value === compatibilityModelValue.value) ||
    compatibilityOptions.find((o) => o.id === "AAText")!;

  return `Show accessible values, ${currentCompatibility.label}, for...`;
});
</script>

<style lang="scss">
@use "@typeach/theme/utils";

.color-select {
  @include utils.dock;
  gap: var(--relative-spacing-xxs);

  border-radius: var(--border-radius);
  border: var(--invisible-border);

  background-color: var(--grey-10);
  padding: var(--spacing-s) var(--spacing-l);
}
</style>
