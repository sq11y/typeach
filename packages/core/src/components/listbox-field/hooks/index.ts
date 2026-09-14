import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { ListboxContext } from "./useListbox";

export interface ListboxFieldContext extends ListboxContext {
  modelValue: Ref<string[]>;
  multiselect: ComputedRef<boolean>;
}

export const ListboxFieldContextKey: InjectionKey<ListboxFieldContext> = Symbol("listbox-field");

export const ListboxFieldGroupContextKey: InjectionKey<string> = Symbol("listbox-field-group");
