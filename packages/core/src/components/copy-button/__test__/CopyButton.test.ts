import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import CopyButtonTest from "./CopyButton.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(CopyButtonTest);
  await a11y();
});

test("Live region", async ({ mount, page }) => {
  await mount(CopyButtonTest);

  await expect(page.locator('[aria-live="polite"]')).toContainText("");

  await page.getByText("Copy").click();

  await expect(page.locator('[aria-live="polite"]')).toContainText("Copied");
  await expect(page.locator('[aria-live="polite"]')).toContainText("");
});
