import type { InjectionKey } from "vue";
import type { RovingTabindex } from "../../../hooks";

export const ToolbarKey: InjectionKey<Pick<RovingTabindex, "onKeyDown" | "moveTo">> =
  Symbol("toolbar");
