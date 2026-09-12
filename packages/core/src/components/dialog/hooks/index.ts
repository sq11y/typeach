import type { ComputedRef, InjectionKey, ModelRef } from "vue";

import type { SharedIds } from "../../../hooks";

export interface DialogContext {
  sharedIds: SharedIds;
  open: ModelRef<boolean>;
  modal?: ComputedRef<boolean | undefined | "alert">;
}

export const DialogContextKey: InjectionKey<DialogContext> = Symbol("dialog");
