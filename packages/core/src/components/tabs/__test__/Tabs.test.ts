import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import TabsTest from "./Tabs.test.vue";

const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

test("Renders accessibly", async ({ page, mount, a11y }) => {
  await mount(TabsTest, { props: { items } });
  await a11y(["aria-required-children"]);

  await expect(page.locator("#v-0-1-button")).toHaveAttribute("aria-controls", "v-12-1-panel");
  await expect(page.locator("#v-12-1-panel")).toHaveAttribute("aria-labelledby", "v-0-1-button");
  await expect(page.locator("#v-0-1-button")).toHaveAttribute("aria-selected", "true");
});

test("Roving tabindex - horizontal", async ({ mount, rovingTabindex }) => {
  await mount(TabsTest, { props: { items } });
  await rovingTabindex("horizontal", items);
});

test("Roving tabindex - vertical", async ({ mount, rovingTabindex }) => {
  await mount(TabsTest, { props: { orientation: "vertical", items } });
  await rovingTabindex("vertical", items);
});

test("Selection follows focus", async ({ page, mount, getByExactText }) => {
  await mount(TabsTest, { props: { selectionFollowsFocus: true, items } });
  await (await getByExactText("1")).click();
  await page.keyboard.press("ArrowRight");
  await getByExactText("Panel for 2");
});
