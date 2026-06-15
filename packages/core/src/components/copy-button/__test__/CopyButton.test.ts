import { test, expect } from "@playwright/experimental-ct-vue";

import AxeBuilder from "@axe-core/playwright";

import TestCopyButton from "./CopyButton.test.vue";

test("Renders accessibly", async ({ mount, page }) => {
  await mount(TestCopyButton);

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Live region", async ({ mount, page }) => {
  await mount(TestCopyButton);

  await expect(page.locator('[aria-live="polite"]')).toContainText("");

  await page.getByText("Copy").click();

  await expect(page.locator('[aria-live="polite"]')).toContainText("Copied");
  await expect(page.locator('[aria-live="polite"]')).toContainText("");
});
