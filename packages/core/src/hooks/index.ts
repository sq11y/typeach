import { inject, type InjectionKey } from "vue";

export * from "./keyboard";

export * from "./useBemClass";
export * from "./useCalendar";
export * from "./useDocumentOutline";
export * from "./useElements";
export * from "./useFuzzySearch";
export * from "./useId";
export * from "./useThemeSettingsStore";

/* prettier-ignore */
export type OptionalContext<T> =
  | ({ missingContext: true } & Partial<T>)
  | ({ missingContext: false } & T);

/**
 * Injects with a fallback value.
 */
export const optionalInject = <T>(key: InjectionKey<T>): OptionalContext<T> => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return inject(key, { missingContext: true } as any);
};
