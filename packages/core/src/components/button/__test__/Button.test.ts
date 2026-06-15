import { test, expect } from "@playwright/experimental-ct-vue";

import AxeBuilder from "@axe-core/playwright";

import TestButton from "./Button.test.vue";

test("Renders accessibly", async ({ mount, page }) => {
  const component = await mount(TestButton);
  await expect(component).toContainText("Button");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
