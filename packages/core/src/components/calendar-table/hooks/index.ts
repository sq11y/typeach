import type { ComputedRef, InjectionKey, Ref } from "vue";

export const CalendarTableKey: InjectionKey<{
  focusedDate: Ref<Date>;
  allowFocus: ComputedRef<boolean | undefined>;
}> = Symbol("calendar-table");
