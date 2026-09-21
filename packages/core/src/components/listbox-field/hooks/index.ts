import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { ComboxboxContext, SharedIds } from "../../../hooks";

export interface ListboxFieldContext extends ComboxboxContext {
  modelValue: Ref<string[]>;
  multiselect: ComputedRef<boolean>;

  /**
   * From wrappers such as Combobox or Select.
   */
  filter?: Ref<string>;
  open?: Ref<boolean>;
}

export const ListboxFieldContextKey: InjectionKey<ListboxFieldContext> = Symbol("listbox-field");

export const ListboxFieldGroupContextKey: InjectionKey<SharedIds> = Symbol("listbox-field-group");

export const ListboxFieldStandaloneContextKey: InjectionKey<boolean> = Symbol("standalone-listbox");
