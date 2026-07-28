import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import ListboxFieldTest from "./ListboxField.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(ListboxFieldTest);
  await a11y();
});

test("Keyboard navigation", async ({ page, mount, rovingTabindex, getByExactText }) => {
  await mount(ListboxFieldTest);
  await rovingTabindex("vertical", ["1", "2", "3", "4", "5", "6"]);

  /* Move up and toggle with {Shift} + {ArrowUp} */
  await (await getByExactText("5")).click();
  await (await getByExactText("5")).click();
  await page.keyboard.press("Shift+ArrowUp");

  expect(await (await getByExactText("4")).getAttribute("aria-selected")).toEqual("true");
  await (await getByExactText("4")).click();

  /* Move down and toggle with {Shift} + {ArrowDown} */
  await (await getByExactText("1")).click();
  await (await getByExactText("1")).click();
  await page.keyboard.press("Shift+ArrowDown");

  expect(await (await getByExactText("2")).getAttribute("aria-selected")).toEqual("true");
  await (await getByExactText("2")).click();

  /* Select from current option to the first option with {Shift} + {Control} + {Home} */
  await (await getByExactText("3")).click();
  await (await getByExactText("3")).click();
  await page.keyboard.press("Shift+Control+Home");

  expect(await (await getByExactText("1")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("2")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("3")).getAttribute("aria-selected")).toEqual("true");
  await (await getByExactText("1")).click();
  await (await getByExactText("2")).click();
  await (await getByExactText("3")).click();

  /* Select from current option to the last option with {Shift} + {Control} + {End} */
  await (await getByExactText("4")).click();
  await (await getByExactText("4")).click();
  await page.keyboard.press("Shift+Control+End");

  expect(await (await getByExactText("4")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("5")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("6")).getAttribute("aria-selected")).toEqual("true");
  await (await getByExactText("4")).click();
  await (await getByExactText("5")).click();
  await (await getByExactText("6")).click();

  /* Select all with {Control} + {a} */
  await page.keyboard.press("Control+a");

  expect(await (await getByExactText("1")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("2")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("3")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("4")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("5")).getAttribute("aria-selected")).toEqual("true");
  expect(await (await getByExactText("6")).getAttribute("aria-selected")).toEqual("true");
});
