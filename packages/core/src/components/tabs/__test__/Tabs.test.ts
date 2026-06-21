import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import TabsTest from "./Tabs.test.vue";

test("Renders accessibly", async ({ page, mount, a11y }) => {
  await mount(TabsTest);
  await a11y(["aria-required-children"]);

  /* prettier-ignore */
  await expect(page.locator("#v-0-tasks-button"))
    .toHaveAttribute("aria-controls", "v-4-tasks-panel");

  /* prettier-ignore */
  await expect(page.locator("#v-4-tasks-panel"))
    .toHaveAttribute("aria-labelledby", "v-0-tasks-button");

  /* prettier-ignore */
  await expect(page.locator("#v-0-tasks-button"))
    .toHaveAttribute("aria-selected", "true");
});

test("Roving tabindex - horizontal", async ({ mount, rovingTabindex }) => {
  await mount(TabsTest);
  await rovingTabindex("horizontal", ["Tasks", "Events", "Notes", "Photos"]);
});

test("Roving tabindex - vertical", async ({ mount, rovingTabindex }) => {
  await mount(TabsTest, { props: { orientation: "vertical" } });
  await rovingTabindex("vertical", ["Tasks", "Events", "Notes", "Photos"]);
});

test("Selection follows focus", async ({ page, mount, getByExactText }) => {
  await mount(TabsTest, { props: { selectionFollowsFocus: true } });
  await (await getByExactText("Tasks")).click();
  await page.keyboard.press("ArrowRight");
  await getByExactText("A list of events");
});
