import { ref, type ComputedRef, type Ref } from "vue";
import { useTimeout } from "@vueuse/core";
import { isRepeatingCharacter, startsWith } from "../../utils";

export interface TypeAheadOption {
  label: string;
  value: string;
}

export interface Typeahead {
  /**
   * Add a character to the search.
   */
  type: (character: string) => void;
}

/**
 * Helps loop through elements matching
 * the current search.
 */
export const useTypeahead = (
  activeIndex: Ref<number>,
  options: ComputedRef<TypeAheadOption[]>,
): Typeahead => {
  const search = ref("");

  const repeatingTimeout = useTimeout(500, {
    controls: true,

    callback() {
      search.value = "";
    },
  });

  return {
    type(key) {
      if (repeatingTimeout.isPending.value) {
        repeatingTimeout.stop();
      }

      const character = key.toLowerCase();

      search.value += character;

      const lookup = isRepeatingCharacter(search.value, character) ? character : search.value;
      console.log("new search", lookup);

      const matches = options.value
        .map((option, index) => ({ ...option, index }))
        .filter((option) => startsWith(option.label, lookup));

      if (matches.length === 1) {
        activeIndex.value = matches[0]!.index;
      } else if (matches.length > 0) {
        const nextIndex = matches.find((i) => i.index > activeIndex.value);
        activeIndex.value = nextIndex ? nextIndex.index : matches[0]!.index;
      }

      repeatingTimeout.start();
    },
  };
};
