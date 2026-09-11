import type { ComputedRef, InjectionKey, WritableComputedRef } from "vue";
import type { SharedIds } from "../../../hooks/useId";

export interface Disclosure {
  disabled: ComputedRef<boolean>;
  popover: ComputedRef<boolean>;
  sharedIds: SharedIds;
  open: WritableComputedRef<boolean>;
}

export const DisclosureKey: InjectionKey<Disclosure> = Symbol("disclosure");
