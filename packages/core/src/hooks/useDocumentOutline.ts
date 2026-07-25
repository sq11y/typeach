import { computed, nextTick, onMounted, ref } from "vue";
import { useMutationObserver } from "@vueuse/core";

export interface Outline {
  heading: HTMLHeadingElement;
  children: Outline[];
  level: number;
}

/**
 * Gives you a nested array of the
 * headings on the page.
 */
export const useDocumentOutline = <T = Outline>(
  map: (heading: HTMLHeadingElement, level: number) => T,
) => {
  const headings = ref<HTMLHeadingElement[]>([]);

  const sortedHeadings = computed(() => {
    return headings.value.sort((a, b) => (a === b ? 0 : a.compareDocumentPosition(b) & 2 ? 1 : -1));
  });

  const getHeadings = () => document.querySelectorAll<HTMLHeadingElement>("h1, h2, h3, h4, h5, h6");

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
        stack[stack.length - 1]?.children.push(node);
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
      const mappedItem = {
        level: item.level,
        heading: map(item.heading, item.level),

        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        children: item.children as any,
      };

      if (item.children) {
        mappedItem.children = mapOutline(item.children);
      }

      return mappedItem;
    });
  };

  onMounted(async () => {
    await nextTick();
    headings.value = Array.from(getHeadings());
  });

  const mutationObserver: MutationCallback = (mutations) => {
    const currentHeadings = Array.from(getHeadings());

    const isHeadingsChanged = currentHeadings.some((el) => {
      return mutations.some((m) => [...m.addedNodes, ...m.removedNodes].includes(el));
    });

    if (isHeadingsChanged) {
      headings.value = currentHeadings;
    }
  };

  useMutationObserver(document.body, mutationObserver, { childList: true, subtree: true });

  return {
    documentOutline: computed(() => mapOutline(rawDocumentOutline.value)),
  };
};
