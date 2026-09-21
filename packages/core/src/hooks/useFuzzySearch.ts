import Fuse, { type FuseOptionKey } from "fuse.js";
import { computed, toValue, type MaybeRefOrGetter } from "vue";

/**
 * Helps with a simple [fuse.js](https://www.fusejs.io) search.
 */
export const useFuzzySearch = <T>(
  search: MaybeRefOrGetter<string | undefined>,
  items: MaybeRefOrGetter<T[]>,
  keys: FuseOptionKey<T>[],
) => {
  return computed(() => {
    const searchValue = toValue(search);

    const itemsValue = toValue(items);

    if (!searchValue) {
      return itemsValue;
    }

    const fuseInstance = new Fuse([...itemsValue] as Readonly<T[]>, {
      threshold: 0.2,
      keys,
    });

    return searchValue
      ? fuseInstance.search(searchValue, { limit: 3 }).map((r) => r.item)
      : itemsValue;
  });
};
