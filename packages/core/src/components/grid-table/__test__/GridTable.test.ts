import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import GridTableTest from "./GridTable.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(GridTableTest);
  await a11y();
});

test("Roving tabindex grid", async ({ mount, page, rovingTabindex, getByExactText }) => {
  await mount(GridTableTest);

  /* prettier-ignore */
  await rovingTabindex("vertical", ["A", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"]);
  await rovingTabindex("horizontal", ["A", "B", "C", "D"]);

  /* Jump 10 rows with {PageDown} and {PageUp} */
  await (await getByExactText("A")).click();
  await page.keyboard.press("PageDown");
  await expect(await getByExactText("A10")).toBeFocused();

  await page.keyboard.press("PageUp");
  await expect(await getByExactText("A")).toBeFocused();

  /* Jump to first or last cell in row with {Home} and {End} */
  await (await getByExactText("A2")).click();
  await page.keyboard.press("End");
  await expect(await getByExactText("D2")).toBeFocused();

  await page.keyboard.press("Home");
  await expect(await getByExactText("A2")).toBeFocused();

  /* Jump to first or last cell with {ctrl}{Home} and {ctrl}{End} */
  await (await getByExactText("A3")).click();
  await page.keyboard.press("Control+End");
  await expect(await getByExactText("D10")).toBeFocused();

  await page.keyboard.press("Control+Home");
  await expect(await getByExactText("A")).toBeFocused();
});
