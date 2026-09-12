import type { ComputedRef, InjectionKey, Ref } from "vue";

export interface CalendarTableContext {
  focusedDate: Ref<Date>;
  allowFocus: ComputedRef<boolean | undefined>;
}

export const CalendarTableContextKey: InjectionKey<CalendarTableContext> = Symbol("calendar-table");
