import { provide, inject, type InjectionKey } from "vue";

/* prettier-ignore */
export type OptionalContext<T> =
  | ({ missingContext: true } & Partial<T>)
  | ({ missingContext: false } & T);

/**
 * Provides context and returns it.
 */
export const useContextProvider = <T>(key: InjectionKey<T>, context: T) => {
  provide(key, context);
  return context;
};

/**
 * Injects an optional context.
 */
export const useOptionalContext = <T>(key: InjectionKey<T>): OptionalContext<T> => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return inject(key, { missingContext: true } as any);
};

/**
 * Injects a context and throws if it is missing.
 */
export const useContext = <T>(key: InjectionKey<T>) => {
  return inject(key)!;
};
