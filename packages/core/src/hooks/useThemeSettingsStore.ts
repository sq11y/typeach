import { ref } from "vue";
import { defineStore } from "pinia";
import { watchImmediate } from "@vueuse/core";

export const useThemeSettingsStore = defineStore("theme-settings", () => {
  const saturation = ref(1);

  const wrapCode = ref(true);

  const setCssVariable = (variable: string, value: string) => {
    document.documentElement.style.setProperty(`--${variable}`, value);
  };

  watchImmediate(saturation, (newSaturation) => {
    document.documentElement.style.setProperty("saturation", `${newSaturation}`);
  });

  watchImmediate(wrapCode, (newWrapCode) => {
    setCssVariable("code-white-space", newWrapCode ? "pre-wrap" : "pre");
  });

  return {
    saturation,
    wrapCode,
  };
});
