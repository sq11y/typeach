import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import DialogTest from "./Dialog.test.vue";

test("Renders accessibly", async ({ mount, page, a11y }) => {
  await mount(DialogTest);
  expect(page.getByText("Description")).not.toBeVisible();
  await a11y();
});

test("Can toggle panel", async ({ mount, page }) => {
  await mount(DialogTest);
  expect(page.getByText("Description")).not.toBeVisible();

  await page.getByText("Dialog").click();
  expect(page.getByText("Description")).toBeVisible();
});
