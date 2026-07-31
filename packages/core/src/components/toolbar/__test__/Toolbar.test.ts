import { test } from "../../../../playwright/extension";

import ToolbarTest from "./Toolbar.test.vue";

const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(ToolbarTest, { props: { items } });
  await a11y();
});

test("Roving tabindex - horizontal", async ({ mount, rovingTabindex }) => {
  await mount(ToolbarTest, { props: { items } });
  await rovingTabindex("horizontal", items);
});

test("Roving tabindex - vertical", async ({ mount, rovingTabindex }) => {
  await mount(ToolbarTest, { props: { orientation: "vertical", items } });
  await rovingTabindex("vertical", items);
});
