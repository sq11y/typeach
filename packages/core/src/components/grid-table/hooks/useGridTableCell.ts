import { computed, inject, type TemplateRef } from "vue";
import { GridRowIdKey } from ".";
import { GridKey, provideElement } from "../../../hooks";

export const useGridTableCell = (node: TemplateRef<{ $el: HTMLElement }>) => {
  const element = computed<HTMLElement | undefined>(() => node.value?.$el);

  const rowId = inject(GridRowIdKey)!;

  provideElement("table", element);

  provideElement(rowId, element);

  const { onKeyDown } = inject(GridKey)!;

  return {
    onKeyDown,
    rowId,
  };
};
