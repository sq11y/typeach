import {
  defaultWindow,
  unrefElement,
  useMutationObserver,
  type ConfigurableWindow,
  type MaybeElementRef,
} from "@vueuse/core";

import {
  computed,
  onBeforeMount,
  onUnmounted,
  ref,
  shallowRef,
  toValue,
  watch,
  type MaybeRefOrGetter,
} from "vue";

type CssColorVars = Record<string, string | undefined>;

/**
 * Watches for changes to CSS variables, and gets the final computed `<color>` value.
 */
export const useCssColorVars = (
  props: MaybeRefOrGetter<string[]>,
  target?: MaybeElementRef,
  options: ConfigurableWindow = {},
) => {
  const { window = defaultWindow } = options;

  const variables = ref<CssColorVars>({});

  const element = computed(() => unrefElement(target) || window?.document.documentElement);

  const paintedElement = shallowRef<HTMLElement>();

  const updateCssColorVars = () => {
    const keys = toValue(props);

    if (!element.value || !window || !paintedElement.value || !keys.length) {
      return;
    }

    for (const key of keys) {
      paintedElement.value.style.backgroundColor = `var(${key})`;
      const computedValue = window.getComputedStyle(paintedElement.value).backgroundColor;
      variables.value[key] = computedValue;
    }
  };

  useMutationObserver(element, updateCssColorVars, {
    attributeFilter: ["style", "class"],
    window,
  });

  watch([element, () => toValue(props), paintedElement], updateCssColorVars, { immediate: true });

  onBeforeMount(() => {
    if (!window) {
      return;
    }

    const newPaintedElement = window.document.createElement("div");
    newPaintedElement.hidden = true;

    element.value?.appendChild(newPaintedElement);
    paintedElement.value = newPaintedElement;
  });

  onUnmounted(() => {
    if (paintedElement.value && window?.document.body.contains(paintedElement.value)) {
      window.document.body.removeChild(paintedElement.value);
    }
  });

  return computed(() => variables.value);
};
