import { computed, inject, type TemplateRef } from "vue";

import { provideElement } from "../../../hooks";

import { GridRowIdKey, GridContextKey } from ".";

export const useGridTableCell = (node: TemplateRef<{ $el: HTMLElement }>) => {
  const element = computed<HTMLElement | undefined>(() => node.value?.$el);

  const rowId = inject(GridRowIdKey)!;

  provideElement("table", element);

  provideElement(rowId, element);

  const { onKeyDown } = inject(GridContextKey)!;

  return {
    onKeyDown,
    rowId,
  };
};
