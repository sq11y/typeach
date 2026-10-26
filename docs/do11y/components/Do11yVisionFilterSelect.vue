<template>
  <Do11ySelect
    v-model="selectedId"
    placeholder="No vision filter"
    label="Vision filter"
    :options="selectedId && selectedId !== 'undefined' ? options : options.slice(1, -1)"
  />

  <svg
    aria-hidden="true"
    color-interpolation-filters="sRGB"
    style="position: absolute; inline-size: 0; block-size: 0; overflow: hidden"
  >
    <defs>
      <filter id="a11y-vision-protanopia">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-protanomaly">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-deuteranopia">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-deuteranomaly">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-tritanopia">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-tritanomaly">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>

      <filter id="a11y-vision-achromatopsia">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

import Do11ySelect from "./Do11ySelect.vue";

export interface VisionFilterSelectEmits {
  /**
   * Emitted when the filter changes.
   */
  filter: [string | undefined];
}

const emit = defineEmits<VisionFilterSelectEmits>();

const selectedId = ref<string>();

const options = [
  {
    label: "Reset vision filter",
    value: "undefined",
    id: "undefined",
  },
  {
    label: "Blurred vision",
    value: "blur(2px)",
    percentage: 22.9,
    id: "blur",
  },
  {
    label: "Deuteranomaly",
    value: "url('#a11y-vision-deuteranomaly')",
    percentage: 2.7,
    id: "deuteranomaly",
  },
  {
    label: "Deuteranopia",
    value: 'url("#a11y-vision-deuteranopia")',
    percentage: 0.56,
    id: "deuteranopia",
  },
  {
    label: "Protanomaly",
    value: 'url("#a11y-vision-protanomaly")',
    percentage: 0.66,
    id: "protanomaly",
  },
  {
    label: "Protanopia",
    value: 'url("#a11y-vision-protanopia")',
    percentage: 0.59,
    id: "protanopia",
  },
  {
    label: "Tritanomaly",
    value: 'url("#a11y-vision-tritanomaly")',
    percentage: 0.01,
    id: "tritanomaly",
  },
  {
    label: "Tritanopia",
    value: 'url("#a11y-vision-tritanopia")',
    percentage: 0.016,
    id: "tritanopia",
  },
  {
    label: "Achromatopsia",
    value: 'url("#a11y-vision-achromatopsia")',
    percentage: 0.0001,
    id: "achromatopsia",
  },
  {
    label: "Greyscale",
    value: "grayscale(100%)",
    id: "greuscale",
  },
];

watch(selectedId, (newSelectedId) => {
  const selectedOption = options.find((o) => o.value === newSelectedId);

  if (newSelectedId === "undefined" || !selectedOption) {
    emit("filter", undefined);
  } else {
    emit("filter", selectedOption.value);
  }
});
</script>
