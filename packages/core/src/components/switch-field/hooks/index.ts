import type { InjectionKey, Ref } from "vue";

export interface SwitchFieldContext {
  id: string;
  modelValue: Ref<boolean | "mixed">;
}

export const SwitchFieldContextKey: InjectionKey<SwitchFieldContext> = Symbol("Switch-field");
