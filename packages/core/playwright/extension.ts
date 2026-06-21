import { test as baseTest, expect } from "@playwright/experimental-ct-vue";

import type { Locator } from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";

type Fixtures = {
  /* prettier-ignore */
  rovingTabindex(direction: "horizontal" | "vertical", items: string[], edgeless?: boolean): Promise<void>;
  a11y(): Promise<void>;
  getByExactText(text: string): Promise<Locator>;
};

export const test = baseTest.extend<Fixtures>({
  async a11y({ page }, use) {
    await use(async () => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(["page-has-heading-one"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  },

  async getByExactText({ page }, use) {
    await use(async (text) => {
      const element = page.getByText(text, { exact: true }).first();

      const tagName = await element.evaluate((el) => el.tagName.toLowerCase());

      const role = await element.getAttribute("role");

      return tagName === "button" || tagName === "a" || role === "gridcell"
        ? element
        : element.locator("..");
    });
  },

  async rovingTabindex({ page, getByExactText }, use) {
    await use(async (direction, items, edgeless) => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i]!;
        const nextItem = items[i + 1];

        const key = direction === "horizontal" ? "ArrowRight" : "ArrowDown";

        await (await getByExactText(item)).click();
        await page.keyboard.press(key);

        if (nextItem) {
          await expect(await getByExactText(nextItem)).toBeFocused();
        } else if (!edgeless) {
          await expect(await getByExactText(item)).toBeFocused();
        }
      }

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i]!;
        const nextItem = items[i - 1];

        const key = direction === "horizontal" ? "ArrowLeft" : "ArrowUp";

        await (await getByExactText(item)).click();
        await page.keyboard.press(key);

        if (nextItem) {
          await expect(await getByExactText(nextItem)).toBeFocused();
        } else if (!edgeless) {
          await expect(await getByExactText(item)).toBeFocused();
        }
      }
    });
  },
});
