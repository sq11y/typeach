import type { ComputedRef, InjectionKey, WritableComputedRef } from "vue";
import type { SharedIds } from "../../../hooks/useId";

export interface DisclosureContext {
  disabled: ComputedRef<boolean>;
  popover: ComputedRef<boolean>;
  sharedIds: SharedIds;
  open: WritableComputedRef<boolean>;
}

export const DisclosureContextKey: InjectionKey<DisclosureContext> = Symbol("disclosure");
