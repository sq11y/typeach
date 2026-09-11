import { watchImmediate } from "@vueuse/core";
import { ref } from "vue";

export type SharedIds = {
  set: (key: string, id?: string) => void;
  get: (key: string) => string;
};

export const useSharedIds = (): SharedIds => {
  const sharedIds = ref<Map<string, string>>(new Map());

  return {
    set(key, id) {
      if (id) {
        sharedIds.value.set(key, id);
      } else {
        sharedIds.value.delete(key);
      }
    },

    get(key) {
      return sharedIds.value.get(key)!;
    },
  };
};

export const shareId = (ids: SharedIds, key: string, getter: () => string) => {
  watchImmediate(getter, (newId) => {
    ids.set(key, newId);
  });
};
