import { test as baseTest, expect } from "@playwright/experimental-ct-vue";

import type { Locator } from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";

type Fixtures = {
  /**
   * Runs keyboard navigation tests for roving tabindex.
   */
  /* prettier-ignore */
  rovingTabindex(direction: "horizontal" | "vertical", items: string[], edgeless?: boolean, withoutPagination?: boolean): Promise<void>;

  /**
   * Runs axe-core tests.
   */
  a11y(disabledRules?: string[]): Promise<void>;

  /**
   * Gets the closest focusable element by text.
   */
  getByExactText(text: string): Promise<Locator>;
};

export const test = baseTest.extend<Fixtures>({
  async a11y({ page }, use) {
    await use(async (disabledRules = []) => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(["page-has-heading-one", ...disabledRules])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  },

  async getByExactText({ page }, use) {
    await use(async (text) => {
      const element = page.getByText(text, { exact: true }).first();

      const tagName = await element.evaluate((el) => el.tagName.toLowerCase());

      const role = await element.getAttribute("role");

      return tagName === "button" || tagName === "a" || role === "gridcell" || role === "option"
        ? element
        : element.locator("..");
    });
  },

  async rovingTabindex({ page, getByExactText }, use) {
    await use(async (direction, items, edgeless, withoutPagination) => {
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

      if (!withoutPagination) {
        await (await getByExactText(items[0]!)).click();
        await page.keyboard.press("PageDown");
        await expect(await getByExactText(items.at(-2)!)).toBeFocused();

        await page.keyboard.press("PageUp");
        await expect(await getByExactText(items[0]!)).toBeFocused();
      }
    });
  },
});
