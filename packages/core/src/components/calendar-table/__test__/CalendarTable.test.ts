import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import CalendarTableTest from "./CalendarTable.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(CalendarTableTest);
  await a11y();
});

test("Calendar grid", async ({ page, mount, getByExactText, rovingTabindex }) => {
  await mount(CalendarTableTest);

  const dates = Array.from({ length: 30 })
    .fill(undefined)
    .map((_, i) => `${i + 1}`);

  await getByExactText("December 2025");
  await rovingTabindex("horizontal", dates, true);
  await rovingTabindex("vertical", ["31", "7", "14", "21"], true);
  await (await getByExactText("7")).click();

  /* Jump month with {PageDown} and {PageUp} */
  await page.keyboard.press("PageDown");
  await getByExactText("November 2025");
  await (await getByExactText("6")).click();
  await page.keyboard.press("PageDown");
  await getByExactText("49");
  await getByExactText("December 2025");

  await (await getByExactText("18")).click();
  await page.keyboard.press("PageUp");
  await getByExactText("47");
  await getByExactText("November 2025");

  /* Jump year with {Shift} + {PageDown} and {Shift} + {PageUp} */
  await (await getByExactText("18")).click();
  await page.keyboard.press("Shift+PageDown");
  await getByExactText("November 2026");
  await (await getByExactText("18")).click();
  await page.keyboard.press("Shift+PageUp");
  await getByExactText("November 2025");

  /* Jump to first or last day in week with {Home} and {End} */
  await (await getByExactText("18")).click();
  await page.keyboard.press("Home");
  await expect(await getByExactText("17")).toBeFocused();
  await getByExactText("November 2025");
  await (await getByExactText("18")).click();
  await page.keyboard.press("End");
  await expect(await getByExactText("23")).toBeFocused();
  await getByExactText("November 2025");

  /* Jump to first or last day in month with {Shift} + {Home} and {Shift} + {End} */
  await (await getByExactText("18")).click();
  await page.keyboard.press("PageUp");
  await page.keyboard.press("PageUp");
  await getByExactText("September 2025");
  await (await getByExactText("21")).click();
  await page.keyboard.press("Shift+Home");
  await expect(await getByExactText("1")).toBeFocused();
  await (await getByExactText("1")).click();
  await page.keyboard.press("Shift+End");
  await expect(await getByExactText("30")).toBeFocused();
  await getByExactText("September 2025");
});
