export * from "./date";

export * from "./dom";
export * from "./null";
export * from "./string";

export type Orientation = "horizontal" | "vertical";

export const isMacPlatform = () => /Mac|iPhone|iPad/.test(window.navigator.userAgent);
