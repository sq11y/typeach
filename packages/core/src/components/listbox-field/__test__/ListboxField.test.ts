import { expect } from "@playwright/experimental-ct-vue";
import { test, listboxOptions } from "../../../../playwright/extension";

import ListboxFieldTest from "./ListboxField.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  await mount(ListboxFieldTest, { props: { options: listboxOptions } });
  await a11y();
});

test("Keyboard navigation", async ({ page, mount, getByExactText, listbox }) => {
  await mount(ListboxFieldTest, { props: { options: listboxOptions } });
  await listbox();

  await page.keyboard.press("Enter");
  expect(await (await getByExactText("1")).getAttribute("aria-selected")).toEqual("true");
});
