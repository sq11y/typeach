import { computed, type ComputedRef, type InjectionKey, type TemplateRef } from "vue";

import { useElements, useContext, useContextProvider } from "../../../hooks";

export interface FieldContext {
  id: string;
  hasErrors: ComputedRef<boolean>;
  errorIds: ComputedRef<string[]>;
  descriptionIds: ComputedRef<string[]>;
}

export interface FieldGroupContext {
  id: string;
}

export const FieldGroupKey: InjectionKey<FieldGroupContext> = Symbol("field-group");

export const FieldInjectionKey: InjectionKey<FieldContext> = Symbol("field");

export const useFieldProvider = (
  id: string,
  list?: TemplateRef<HTMLElement> | ComputedRef<HTMLElement | undefined>,
) => {
  const { elements: errorElements } = useElements("field-error", list);
  const { elements: descriptionElements } = useElements("field-description", list);

  const getElementIds = (array: HTMLElement[]) => array.filter((i) => i.id).map((i) => i.id);

  return useContextProvider(FieldInjectionKey, {
    id,

    hasErrors: computed(() => errorElements.value.length > 0),
    errorIds: computed(() => getElementIds(errorElements.value)),
    descriptionIds: computed(() => getElementIds(descriptionElements.value)),
  });
};

export const useField = () => useContext(FieldInjectionKey);
