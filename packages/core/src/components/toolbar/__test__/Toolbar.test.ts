import { test } from "../../../../playwright/extension";

import ToolbarTest from "./Toolbar.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(ToolbarTest);
  await a11y();
});

test("Roving tabindex - horizontal", async ({ mount, rovingTabindex }) => {
  await mount(ToolbarTest);
  await rovingTabindex("horizontal", ["1", "2", "3"]);
});

test("Roving tabindex - vertical", async ({ mount, rovingTabindex }) => {
  await mount(ToolbarTest, { props: { orientation: "vertical" } });
  await rovingTabindex("vertical", ["1", "2", "3"]);
});
