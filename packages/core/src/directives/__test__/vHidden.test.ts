import { test, expect } from "@playwright/experimental-ct-vue";

import vHiddenTest from "./vHidden.test.vue";

test("vHidden", async ({ mount, page }) => {
  await mount(vHiddenTest);

  await expect(page.getByTestId("target-element")).toBeHidden();

  await page.getByText("Reveal element").click();
  await expect(page.getByTestId("target-element")).not.toBeHidden();

  await page.getByText("Set 'until-found'").click();
  await expect(page.getByTestId("target-element")).toHaveAttribute("hidden", "until-found");
});
