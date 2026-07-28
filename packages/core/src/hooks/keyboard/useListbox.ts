import { toValue, type InjectionKey, type MaybeRefOrGetter, type Ref } from "vue";

import { isDisabledElement, type Orientation } from "../../utils";

import type { Elements } from "../useElements";

import { useRovingTabindex, type RovingTabindex } from "./useRovingTabindex";

export interface Listbox extends Pick<RovingTabindex, "moveTo"> {
  /**
   * The `onKeydown` event you should
   * apply to the options.
   */
  onKeyDown(value: string, event: KeyboardEvent): void;

  /**
   * The `onSpace` event you should
   * apply to the enabled options.
   */
  onSpace(value: string, event: KeyboardEvent): void;
}

export const ListboxKey: InjectionKey<Listbox> = Symbol("listbox");

/* eslint-disable max-lines-per-function */
export const useListbox = (
  orientation: MaybeRefOrGetter<Orientation>,
  multiselect: MaybeRefOrGetter<boolean>,
  modelValue: Ref<string[]>,
  getElements: Elements["getElements"],
): Listbox => {
  const { moveTo, moveRelatively, moveToEdge, onKeyDown, getCurrentTabStop } = useRovingTabindex(
    orientation,
    getElements,
  );

  const clickFocusedOption = () => {
    const element = getCurrentTabStop();
    element?.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
  };

  const selectRange = (start: string, end: string) => {
    const elements = getElements();

    const startElementIndex = elements.findIndex((e) => e.getAttribute("data-value") === start);
    const endElementIndex = elements.findIndex((e) => e.getAttribute("data-value") === end);

    if (startElementIndex < 0 || endElementIndex < 0 || startElementIndex === endElementIndex) {
      return;
    }

    /* prettier-ignore */
    const range = startElementIndex < endElementIndex
      ? elements.slice(startElementIndex, endElementIndex)
      : elements.slice(endElementIndex, startElementIndex);

    const newValues = range
      .filter((element) => !isDisabledElement(element) && !!element.getAttribute("data-value"))
      .map((element) => element.getAttribute("data-value")!);

    if (elements[startElementIndex] && !isDisabledElement(elements[startElementIndex])) {
      newValues.unshift(start);
    }

    if (elements[endElementIndex] && !isDisabledElement(elements[endElementIndex])) {
      newValues.push(end);
    }

    modelValue.value = [...new Set(modelValue.value.concat(newValues))];
  };

  const selectToEdge = (value: string, edge: "start" | "end") => {
    const edgeElement = getElements().at(edge === "start" ? 0 : -1);
    const edgeValue = edgeElement?.getAttribute("data-value");

    if (edgeValue) {
      selectRange(value, edgeValue);
    }
  };

  return {
    moveTo,

    onSpace(value) {
      /* `Shift` + `Space` is ignored for multiselect */

      if (modelValue.value.includes(value)) {
        modelValue.value = modelValue.value.filter((v) => v !== value);
      } else {
        modelValue.value = toValue(multiselect) ? [...modelValue.value, value] : [value];
      }
    },

    onKeyDown(value, event) {
      if (!toValue(multiselect) || (!event.shiftKey && !event.ctrlKey)) {
        return onKeyDown(event);
      }

      const isVertical = toValue(orientation) === "vertical";

      if (event.ctrlKey && event.key === "a") {
        event.preventDefault();

        return (modelValue.value = getElements(false)
          .map((element) => element.getAttribute("data-value"))
          .filter((value): value is string => !!value));
      }

      if (!event.shiftKey) {
        return;
      }

      switch (event.key) {
        case isVertical ? "ArrowUp" : "ArrowLeft":
          event.preventDefault();
          moveRelatively(-1);
          clickFocusedOption();
          break;

        case isVertical ? "ArrowDown" : "ArrowRight":
          event.preventDefault();
          moveRelatively(1);
          clickFocusedOption();
          break;

        case "Home":
        case "End":
          if (event.ctrlKey) {
            event.preventDefault();
            selectToEdge(value, event.key === "Home" ? "start" : "end");
            moveToEdge(event.key === "Home" ? "start" : "end");
          }
          break;

        default:
          break;
      }
    },
  };
};
