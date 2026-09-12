import type { ComputedRef, InjectionKey, Ref } from "vue";

import type { RovingTabindex, SharedIds } from "../../../hooks";

export interface TabContext {
  sharedIds: SharedIds;
  selectedPanel: Ref<number | string | undefined>;
}

export type TabsListContext = Pick<RovingTabindex, "onKeyDown"> & {
  selectionFollowsFocus: ComputedRef<boolean>;
};

export const TabContextKey: InjectionKey<TabContext> = Symbol("tabs");

export const TabListContextKey: InjectionKey<TabsListContext> = Symbol("tabs-list");
