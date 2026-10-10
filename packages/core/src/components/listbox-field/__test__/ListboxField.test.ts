import { expect } from "@playwright/experimental-ct-vue";
import { test, listboxOptions } from "../../../../playwright/extension";

import ListboxFieldTest from "./ListboxField.test.vue";

test("Renders accessibly", async ({ mount, a11y, getByExactText }) => {
  await mount(ListboxFieldTest, { props: { options: listboxOptions } });
  await a11y();

  await (await getByExactText("5")).click({ force: true });
  await expect(await getByExactText("5")).toHaveAttribute("aria-selected", "true");
});

test("Keyboard navigation", async ({ page, mount, getByExactText }) => {
  await mount(ListboxFieldTest, { props: { options: listboxOptions } });

  const input = page.locator("[role='listbox']");

  await (await getByExactText("5")).click();

  await input.press("ArrowDown");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-13");

  await input.press("ArrowUp");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-10");

  await input.press("End");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-27");

  await input.press("Home");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-2");

  await input.press("PageDown");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-23");

  await input.press("PageUp");
  await expect(input).toHaveAttribute("aria-activedescendant", "v-2");

  await page.keyboard.press("Enter");
  expect(await (await getByExactText("1")).getAttribute("aria-selected")).toEqual("true");
});

test("Can be disabled", async ({ mount, getByExactText }) => {
  await mount(ListboxFieldTest, { props: { options: listboxOptions, disabled: true } });

  await (await getByExactText("5")).click({ force: true });
  await expect(await getByExactText("5")).toHaveAttribute("aria-selected", "false");
});
