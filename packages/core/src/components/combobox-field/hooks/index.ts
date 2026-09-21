import type { InjectionKey, Ref } from "vue";

export interface ComboboxFieldContext {
  filter: Ref<string>;
}

export const ComboboxFieldContextKey: InjectionKey<ComboboxFieldContext> = Symbol("combobox-field");
