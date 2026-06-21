import type { ComputedRef, InjectionKey, Ref } from "vue";

import type { RovingTabindex, SharedIds } from "../../../hooks";

export interface TabContext {
  ids: SharedIds;
  selectedPanel: Ref<number | string | undefined>;
}

export type TabsListContext = Pick<RovingTabindex, "onKeyDown"> & {
  selectionFollowsFocus: ComputedRef<boolean>;
};

export const TabKey: InjectionKey<TabContext> = Symbol("tabs");

export const TabListKey: InjectionKey<TabsListContext> = Symbol("tabs-list");
