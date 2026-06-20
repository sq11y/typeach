import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import DisclosureTest from "./Disclosure.test.vue";

test("Renders accessibly", async ({ mount, page, a11y }) => {
  await mount(DisclosureTest);
  await expect(page.getByText("Content")).toHaveAttribute("hidden");
  await a11y();
});

test("Can toggle panel", async ({ mount, page }) => {
  await mount(DisclosureTest);
  await expect(page.getByText("Content")).toHaveAttribute("hidden");

  await page.getByText("Disclosure").click();
  await expect(page.getByText("Content")).not.toHaveAttribute("hidden");
});

test("Can be disables", async ({ mount, page }) => {
  await mount(DisclosureTest, {
    props: { disabled: true },
  });

  await expect(page.getByText("Disclosure")).toHaveCount(0);
  await expect(page.getByText("Content")).not.toHaveAttribute("hidden");
});

test("Can be a popover", async ({ mount, page }) => {
  await mount(DisclosureTest, {
    props: { popover: true },
  });

  await expect(page.getByText("Content")).toHaveAttribute("popover");
  await expect(page.getByText("Content")).not.toBeVisible();

  await page.getByText("Disclosure").click();
  await expect(page.getByText("Content")).toBeVisible();
});
