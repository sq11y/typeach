import type { InjectionKey } from "vue";
import type { GridContext } from "./useGrid";

export * from "./useGridTableCell";
export * from "./useGrid";

export const GridRowIdKey: InjectionKey<string> = Symbol("row");

export const GridContextKey: InjectionKey<GridContext> = Symbol("grid");
