import { watchImmediate } from "@vueuse/core";
import { computed, ref, type WritableComputedRef } from "vue";

export type SharedId = WritableComputedRef<string, string | undefined>;

export type SharedIds = {
  set: (key: string, id?: string) => void;
  get: (key: string) => string;
};

export const shareId = (fallback: string): SharedId => {
  const internalId = ref<string>();

  return computed({
    set(id) {
      internalId.value = id;
    },

    get() {
      return internalId.value ?? fallback;
    },
  });
};

export const useSharedId = (id: SharedId, getter: () => string | undefined) => {
  watchImmediate(getter, (newId) => {
    id.value = newId;
  });
};

export const shareDynamicIds = (): SharedIds => {
  const internalIds = ref<Map<string, string>>(new Map());

  return {
    set(key, id) {
      if (id) {
        internalIds.value.set(key, id);
      } else {
        internalIds.value.delete(key);
      }
    },

    get(key) {
      return internalIds.value.get(key)!;
    },
  };
};

export const useSharedDynamicIds = (
  ids: SharedIds,
  key: string,
  getter: () => string | undefined,
) => {
  watchImmediate(getter, (newId) => {
    ids.set(key, newId);
  });
};
