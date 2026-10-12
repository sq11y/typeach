import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useMutationObserver } from "@vueuse/core";

export type OutlineFunction<T = void> = (heading: HTMLHeadingElement, level: number) => T;

export interface Outline<H = HTMLHeadingElement> {
  /**
   * The heading element.
   */
  heading: H;

  /**
   * The level for the current heading.
   */
  level: number;

  /**
   * The diret subheadings.
   */
  children?: Outline<H>[];
}

/**
 * Gives you a nested array of the
 * headings on the page.
 *
 * Only works for the main page, _not_ dialogs.
 */
/* eslint-disable max-lines-per-function */
export const useDocumentOutline = <T = Outline>(
  map?: OutlineFunction<T>,
  watcher?: OutlineFunction,
) => {
  const headings = ref<HTMLHeadingElement[]>([]);

  const sortedHeadings = computed(() => {
    return headings.value.sort((a, b) => (a === b ? 0 : a.compareDocumentPosition(b) & 2 ? 1 : -1));
  });

  const getHeadings = () => {
    const selector = ":is(h1, h2, h3, h4, h5, h6):not(dialog *)";
    return document.querySelectorAll<HTMLHeadingElement>(selector);
  };

  const rawDocumentOutline = computed(() => {
    const outline: Outline[] = [];
    const stack: Outline[] = [];

    for (const heading of sortedHeadings.value) {
      const level = parseInt(heading.tagName.substring(1), 10);

      const node: Outline = {
        heading,
        children: [],
        level,
      };

      while (stack.length >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        outline.push(node);
      } else {
        stack[stack.length - 1]?.children?.push(node);
      }

      stack.push(node);
    }

    return outline;
  });

  const mapOutline = (array: Outline[]) => {
    if (!map) {
      return array;
    }

    return array.map((item) => {
      const mappedItem: Outline<HTMLHeadingElement | T> = {
        level: item.level,
        heading: map(item.heading, item.level),

        children: item.children,
      };

      if (item.children) {
        mappedItem.children = mapOutline(item.children);
      }

      return mappedItem;
    });
  };

  const walkOutline = (array: Outline[], action: OutlineFunction) => {
    return array.map((item) => {
      action(item.heading, item.level);

      if (item.children) {
        walkOutline(item.children, action);
      }
    });
  };

  const mutationObserver: MutationCallback = (mutations) => {
    const isHeadingsChanged = mutations.some((m) => {
      return [...m.addedNodes, ...m.removedNodes].some((n) => n instanceof HTMLHeadingElement);
    });

    if (isHeadingsChanged) {
      headings.value = Array.from(getHeadings());
    }
  };

  useMutationObserver(document.body, mutationObserver, { childList: true, subtree: true });

  onMounted(async () => {
    await nextTick();
    headings.value = Array.from(getHeadings());
  });

  watch(rawDocumentOutline, (newRawDocumentOutline) => {
    if (watcher) {
      walkOutline(newRawDocumentOutline, watcher);
    }
  });

  return {
    documentOutline: computed(() => mapOutline(rawDocumentOutline.value)),
  };
};
