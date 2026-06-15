import type { ComputedRef, InjectionKey, WritableComputedRef } from "vue";
import type { SharedId } from "../../../hooks/useId";

export interface Disclosure {
  disabled: ComputedRef<boolean>;
  popover: ComputedRef<boolean>;
  panelId: SharedId;
  open: WritableComputedRef<boolean>;
}

export const DisclosureKey: InjectionKey<Disclosure> = Symbol("disclosure");
