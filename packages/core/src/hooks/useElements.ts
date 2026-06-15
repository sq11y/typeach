import {
  ref,
  computed,
  provide,
  inject,
  markRaw,
  watchEffect,
  onMounted,
  onBeforeUnmount,
  type Ref,
  type ComputedRef,
} from "vue";

import { isDisabledElement, type ElementRef } from "../utils";

export interface Elements {
  /**
   * A function that returns
   * the relevant elements.
   */
  getElements(includeDisabledItems?: boolean): HTMLElement[];

  /**
   * A reactive array of
   * the elements.
   */
  elements: ComputedRef<HTMLElement[]>;
}

interface ElementsContext {
  /**
   * The parent container
   * for the elements.
   */
  parent: ElementRef;

  /**
   * A ref containing
   * the current elements.
   */
  items: Ref<Map<HTMLElement, HTMLElement>>;
}

/**
 * Allows you to keep track of elements
 * with a common key.
 */
export const useElements = (key: string, parent?: ElementRef): Elements => {
  const items = ref(new Map<HTMLElement, HTMLElement>());

  const context: ElementsContext = parent
    ? { items, parent }
    : inject(`${key}-elements`, { items, parent: ref() });

  if (parent) {
    provide(`${key}-elements`, context);
  }

  const elements = computed(() => Array.from(context.items.value.values()));

  const getElements = (includeDisabledItems: boolean = true) => {
    const parentElement = context.parent.value;

    if (!parentElement) {
      return [];
    }

    const order = Array.from(parentElement?.querySelectorAll(`[data-elements-${key}="true"]`));

    return Array.from(context.items.value.values())
      .sort((a, b) => order.indexOf(a) - order.indexOf(b))
      .filter((i) => includeDisabledItems || !isDisabledElement(i));
  };

  return {
    getElements,
    elements,
  };
};

/**
 * Allows you to provide an element to
 * `useElements` based on it's key.
 */
export const provideElement = (key: string, element: ElementRef, ignore?: Ref<boolean>) => {
  const context = inject<ElementsContext | undefined>(`${key}-elements`, undefined);

  watchEffect((cleanup) => {
    if (!element.value) {
      return;
    }

    const id = markRaw(element.value);

    if (ignore?.value) {
      context?.items.value.delete(id);
    } else {
      context?.items.value.set(id, element.value);
    }

    cleanup(() => context?.items.value.delete(id));
  });

  onMounted(() => {
    element.value?.setAttribute(`data-elements-${key}`, "true");
  });

  onBeforeUnmount(() => {
    element.value?.removeAttribute(`data-elements-${key}`);
  });
};
