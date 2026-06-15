import { test, expect } from "@playwright/experimental-ct-vue";

import vAriaLabelledbyTest from "./vAriaLabelledby.test.vue";

test("vAriaLabelledby", async ({ mount, page }) => {
  await mount(vAriaLabelledbyTest);

  await expect(page.getByTestId("target-element")).toHaveAttribute("aria-labelledby", "a-l-0");
  await expect(page.locator("#a-l-0")).toContainText("A label");

  await page.getByText("Clear label").click();

  await expect(page.getByTestId("target-element")).not.toHaveAttribute("aria-labelledby");
  await expect(page.locator("#a-l-0")).toHaveCount(0);

  await page.getByText("Set new label").click();

  await expect(page.getByTestId("target-element")).toHaveAttribute("aria-labelledby", "a-l-0");
  await expect(page.locator("#a-l-0")).toContainText("Another label");
});
