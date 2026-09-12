import type { InjectionKey } from "vue";
import type { RovingTabindex } from "../../../hooks";

export type ToolbarContext = Pick<RovingTabindex, "onKeyDown" | "moveTo">;

export const ToolbarContextKey: InjectionKey<ToolbarContext> = Symbol("toolbar");
