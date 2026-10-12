import type { ComputedRef, InjectionKey, Ref } from "vue";

export interface CalendarContext {
  focusedDate: Ref<Date>;
  allowFocus: ComputedRef<boolean | undefined>;
}

export const CalendarContextKey: InjectionKey<CalendarContext> = Symbol("calendar-table");
