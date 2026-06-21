import type { InjectionKey, Ref } from "vue";

import { useContext } from "../../../hooks";

export interface SwitchFieldContext {
  id: string;
  modelValue: Ref<boolean | "mixed">;
}

export const SwitchFieldInjectionKey: InjectionKey<SwitchFieldContext> = Symbol("Switch-field");

export const useSwitchField = (): SwitchFieldContext => useContext(SwitchFieldInjectionKey);
