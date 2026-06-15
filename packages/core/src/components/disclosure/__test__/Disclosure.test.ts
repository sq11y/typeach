import { test, expect } from "@playwright/experimental-ct-vue";

import AxeBuilder from "@axe-core/playwright";

import DisclosureTest from "./Disclosure.test.vue";

test("Renders accessibly", async ({ mount, page }) => {
  await mount(DisclosureTest);
  await expect(page.getByText("Content")).toHaveAttribute("hidden");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
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
