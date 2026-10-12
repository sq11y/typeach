import type { InjectionKey, Ref } from "vue";

export interface SwitchFieldContext {
  modelValue: Ref<boolean | "mixed">;
}

export const SwitchFieldContextKey: InjectionKey<SwitchFieldContext> = Symbol("Switch-field");
