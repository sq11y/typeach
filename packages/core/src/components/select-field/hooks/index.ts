import type { ComputedRef, InjectionKey, Ref } from "vue";
import type { ComboxboxContext } from "../../../hooks";

/* prettier-ignore */
export interface SelectFieldContext extends Omit<ComboxboxContext, "activeOption" | "filteredOptions"> {
  modelValue: Ref<string[]>;
  multiselect: ComputedRef<boolean>;
  open: Ref<boolean>;
}

export const SelectFieldContextKey: InjectionKey<SelectFieldContext> = Symbol("select-field");
