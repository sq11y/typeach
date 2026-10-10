import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import ButtonTest from "./Button.test.vue";

test("Renders accessibly", async ({ mount, a11y, page }) => {
  const component = await mount(ButtonTest);
  await expect(component).toContainText("Button");
  await a11y();

  await page.locator("button").click();
  await expect(component).toContainText("Clicked!");
});

test("Can be disabled", async ({ mount, page }) => {
  const component = await mount(ButtonTest, {
    props: { disabled: true },
  });

  await expect(component).toHaveAttribute("aria-disabled", "true");
  await expect(component).not.toHaveAttribute("tabindex");

  await page.locator("button").click({ force: true });
  await expect(component).not.toContainText("Clicked!");
});

test("Can be disabled without focus", async ({ mount, page }) => {
  const component = await mount(ButtonTest, {
    props: { disabled: "without-focus" },
  });

  await expect(component).toHaveAttribute("aria-disabled", "true");
  await expect(component).toHaveAttribute("tabindex", "-1");

  await page.locator("button").click({ force: true });
  await expect(component).not.toContainText("Clicked!");
});
