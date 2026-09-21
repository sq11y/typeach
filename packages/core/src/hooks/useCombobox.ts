import { computed, nextTick, ref, watch, type ComputedRef, type Ref } from "vue";

import { isMove, Move, navigateList, useTypeahead } from "./keyboard";
import { isTypeaheadCharacter } from "../utils";

import type { SharedIds } from "./useId";

export interface ComboboxOption {
  /**
   * The value for the option.
   */
  value: string;

  /**
   * The visible label for the option which should be used to determine
   */
  label: string;

  /**
   * If the option is disabled.
   */
  disabled?: boolean;

  /**
   * The id of the option.
   */
  id: string;
}

export interface ComboxboxContext {
  /**
   * The options.
   */
  optionsTracker: Ref<ComboboxOption[]>;

  /**
   * The filtered options.
   */
  options: ComputedRef<ComboboxOption[]>;

  /**
   * The currently navigated to index.
   */
  activeIndex: Ref<number>;

  /**
   * The currently navigated to element.
   */
  activeElementId: Ref<string>;

  /**
   * The `onbLUR` event you should apply to
   * the combobox itself.
   */
  onBlur(event: FocusEvent): void;

  /**
   * The `onClick` event you should apply to
   * the combobox itself.
   */
  onClick(event: MouseEvent): void;

  /**
   * The `onKeydown` event you should apply to
   * the combobox itself.
   */
  onKeyDown(event: KeyboardEvent): Promise<void>;

  /**
   * The `onClick` event you should apply to each option.
   */
  onOptionClick(index: number): void;

  /**
   * The `onMouseDown` event you should apply to each option.
   */
  onOptionMouseDown(event: MouseEvent): void;

  /**
   * The `onMouseUp` event you should apply to each option.
   */
  onOptionMouseUp(event: MouseEvent): void;
}

/* eslint-disable max-lines-per-function */
export const useCombobox = (
  modelValue: Ref<string[]>,
  multiselect: ComputedRef<boolean>,
  sharedIds: SharedIds,
  filter?: Ref<string>,
  open?: Ref<boolean>,
): ComboxboxContext => {
  const optionsTracker = ref<ComboboxOption[]>([]);

  const activeIndex = ref(0);

  const ignoreBlur = ref(false);

  const options = computed(() => {
    if (!filter) {
      return optionsTracker.value;
    }

    const formattedSearch = filter.value.toLowerCase().trim();

    return optionsTracker.value.filter((option) => {
      return option.label.toLowerCase().startsWith(formattedSearch);
    });
  });

  const { type } = useTypeahead(activeIndex, options);

  const activeOption = computed(() => options.value[activeIndex.value]);

  const activeElementId = computed(() => {
    return activeOption.value ? sharedIds.get(activeOption.value.value) : "";
  });

  /* prettier-ignore */
  watch(() => filter?.value, () => {
    const max = options.value.length - 1;

    activeIndex.value = navigateList(activeIndex.value, Move.Start, max);

    setOpen(options.value.length > 0);
  });

  const setFilter = (newFilter: string) => {
    if (filter) {
      filter.value = newFilter;
    }
  };

  const setOpen = (newOpen: boolean) => {
    if (open && open.value !== newOpen) {
      open.value = newOpen;
    }
  };

  /**
   * For multiple only.
   */
  const toggleOption = (index: number) => {
    const option = options.value[index];

    if (!option || option.disabled) {
      return;
    }

    if (modelValue.value.some((m) => m === option.value)) {
      modelValue.value = modelValue.value.filter((m) => m !== option.value);
    } else {
      modelValue.value = [...modelValue.value, option.value];
    }
  };

  /**
   * For multiple only.
   */
  const selectAllOptions = () => {
    modelValue.value = options.value
      .filter((o) => !o.disabled || modelValue.value.includes(o.value))
      .map((o) => o.value);
  };

  /**
   * For single only.
   */
  const selectOption = (index: number) => {
    const option = options.value[index];

    if (!option || option.disabled) {
      return;
    }

    modelValue.value = [option.value];
  };

  const onOptionMouseDown = () => {
    ignoreBlur.value = true;
  };

  const onOptionMouseUp = () => {
    setTimeout(() => {
      if (!multiselect.value) {
        setOpen(false);
      }
    }, 0);
  };

  const onOptionClick = (index: number) => {
    activeIndex.value = index;

    if (multiselect.value) {
      toggleOption(index);
    } else {
      selectOption(index);
    }

    setFilter("");
    document.getElementById(sharedIds.get("input"))?.focus();
  };

  const onBlur = () => {
    if (ignoreBlur.value) {
      ignoreBlur.value = false;
      return;
    }

    setOpen(false);
  };

  const onClick = () => {
    setOpen(true);
  };

  const onKeyDown = async (event: KeyboardEvent) => {
    const action = getComboboxAction(event, open ? open.value : true, !!filter);

    const max = options.value.length - 1;

    if (isMove(action)) {
      event.preventDefault();
      activeIndex.value = navigateList(activeIndex.value, action, max);
      setOpen(true);
      return;
    }

    switch (action) {
      case "clear":
        setFilter("");
        break;

      case "open":
      case "close":
        setOpen(action === "open");
        break;

      case "select":
        if (multiselect.value) {
          toggleOption(activeIndex.value);
          setFilter("");
        } else {
          selectOption(activeIndex.value);
          setFilter(activeOption.value?.label || "");
          await nextTick();
          setOpen(false);
        }

        break;

      case "select-all":
        if (multiselect.value) {
          selectAllOptions();
        }

        break;

      case "type":
        if (filter) {
          setOpen(true);
        } else {
          type(event.key);
        }

        break;

      default:
        break;
    }
  };

  return {
    optionsTracker,
    options,

    activeIndex,
    activeElementId,

    onClick,
    onBlur,
    onKeyDown,
    onOptionClick,
    onOptionMouseDown,
    onOptionMouseUp,
  };
};

type ComboboxAction = Move | "open" | "type" | "select" | "select-all" | "close" | "clear";

const getComboboxAction = (
  event: KeyboardEvent,
  open: boolean,
  filter: boolean,
): ComboboxAction | undefined => {
  const { key, altKey, ctrlKey, metaKey } = event;

  const openKeys = ["ArrowDown", "ArrowUp", "Enter", " ", "Home", "End"];

  const editingKeys = ["Backspace", "Clear"];

  if (!open && openKeys.includes(key)) {
    return "open";
  }

  if (editingKeys.includes(key) || (isTypeaheadCharacter(key) && !altKey && !ctrlKey && !metaKey)) {
    return "type";
  }

  switch (key) {
    case "ArrowUp":
    case "ArrowLeft":
      return open ? Move.Backward : Move.End;

    case "ArrowDown":
    case "ArrowRight":
      return open ? Move.Forward : undefined;

    case "PageUp":
      return Move.JumpBackward;

    case "PageDown":
      return Move.JumpForward;

    case "Home":
      return Move.Start;

    case "End":
      return Move.End;

    case "Enter":
      return "select";

    case " ":
      return filter ? undefined : "select";

    case "Escape":
      return open ? "close" : "clear";

    case "a":
    case "A":
      return ctrlKey ? "select-all" : undefined;

    default:
      return;
  }
};
