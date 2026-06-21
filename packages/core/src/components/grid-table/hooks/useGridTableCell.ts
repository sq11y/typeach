import { computed, type TemplateRef } from "vue";
import { GridRowIdKey } from ".";
import { GridKey, provideElement, useContext } from "../../../hooks";

export const useGridTableCell = (node: TemplateRef<{ $el: HTMLElement }>) => {
  const element = computed<HTMLElement | undefined>(() => node.value?.$el);

  const rowId = useContext(GridRowIdKey)!;

  provideElement("table", element);

  provideElement(rowId, element);

  const { onKeyDown } = useContext(GridKey);

  return {
    onKeyDown,
    rowId,
  };
};
