import Fuse, { type FuseOptionKey } from "fuse.js";
import { computed, toValue, type MaybeRefOrGetter } from "vue";

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
      threshold: 0.4,
      keys,
    });

    return searchValue
      ? fuseInstance.search(searchValue, { limit: 3 }).map((r) => r.item)
      : itemsValue;
  });
};
