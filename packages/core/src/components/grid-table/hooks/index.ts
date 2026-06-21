import type { InjectionKey } from "vue";

export * from "./useGridTableCell";

export const GridRowIdKey: InjectionKey<string> = Symbol("row");
