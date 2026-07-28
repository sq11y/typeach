import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { Listbox } from "../../../hooks";

export interface ListboxFieldContext extends Listbox {
  modelValue: Ref<string[]>;
  multiselect: ComputedRef<boolean>;
}

export const ListboxFieldInjectionKey: InjectionKey<ListboxFieldContext> = Symbol("listbox-field");

export const ListboxFieldGroupInjectionKey: InjectionKey<string> = Symbol("listbox-field-group");
