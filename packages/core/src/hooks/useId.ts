import { watchImmediate } from "@vueuse/core";
import { ref } from "vue";

export type SharedIds = {
  /**
   * The setter.
   */
  set: (key: string, id?: string) => void;

  /**
   * The getter.
   */
  get: (key: string) => string;

  /**
   * If there is a shared id for the key.
   */
  has: (key: string) => boolean;
};

/**
 * Helps with sharing ids
 * between sub-components.
 */
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

    has(key) {
      return sharedIds.value.has(key);
    },
  };
};

/**
 * Add an id to the shared ids.
 */
export const shareId = (ids: SharedIds, key: string, getter: () => string) => {
  watchImmediate(getter, (newId) => {
    ids.set(key, newId);
  });
};
