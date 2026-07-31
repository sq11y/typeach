import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import GridTableTest from "./GridTable.test.vue";

const rows = ["A", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(GridTableTest);
  await a11y();
});

test("Roving tabindex grid", async ({ mount, page, rovingTabindex, getByExactText }) => {
  await mount(GridTableTest);

  /* @todo - figure out why `edgeless` has to be set */
  await rovingTabindex("vertical", rows, true);
  await rovingTabindex("horizontal", ["A", "B", "C", "D"], true, true);

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
