import { ref, toValue, type MaybeRefOrGetter } from "vue";

import { useTimeout } from "@vueuse/core";

import type { NavigableElementsOptions } from "./useNavigableElements";

import { isRepeatingCharacter, startsWith } from "../../utils";

export interface Typeahead {
  /**
   * Add a character to the search.
   */
  type(character: string): void;
}

/**
 * Helps loop through elements matching
 * the current search.
 */
export const useTypeahead = (options: MaybeRefOrGetter<NavigableElementsOptions>): Typeahead => {
  const search = ref("");

  const repeatingTimeout = useTimeout(500, {
    controls: true,

    callback() {
      search.value = "";
    },
  });

  return {
    type(key: string) {
      const { getElements, moveTo, isMovedTo } = toValue(options);

      if (repeatingTimeout.isPending.value) {
        repeatingTimeout.stop();
      }

      const character = key.toLowerCase();

      search.value += character;

      const lookup = isRepeatingCharacter(search.value, character) ? character : search.value;

      const elements = getElements();

      const matches = elements.filter((e) => startsWith(e.textContent, lookup));

      const item = elements.find((e) => isMovedTo(e));

      const next = matches[matches.findIndex((element) => item?.isSameNode(element)) + 1];

      if (next) {
        moveTo(next, item);
      }

      repeatingTimeout.start();
    },
  };
};
