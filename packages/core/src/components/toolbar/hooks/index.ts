import type { InjectionKey } from "vue";
import type { RovingTabindex } from "../../../hooks";

export type ToolbarContext = Pick<RovingTabindex, "onKeyDown" | "navigateTo">;

export const ToolbarContextKey: InjectionKey<ToolbarContext> = Symbol("toolbar");
