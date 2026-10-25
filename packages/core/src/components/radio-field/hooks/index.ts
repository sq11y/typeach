import type { ComputedRef, InjectionKey, Ref } from "vue";

export interface RadioFieldContext {
  modelValue: Ref<string | undefined>;
  groupId: string;
}

export const RadioFieldContextKey: InjectionKey<RadioFieldContext> = Symbol("radio-field");

export const RadioOptionContextKey: InjectionKey<ComputedRef<string | undefined>> =
  Symbol("radio-option");
