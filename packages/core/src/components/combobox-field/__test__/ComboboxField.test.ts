import { expect } from "@playwright/experimental-ct-vue";
import { test, listboxOptions } from "../../../../playwright/extension.ts";

import ComboboxFieldTest from "./ComboboxField.test.vue";

[false, true].forEach((multiselect) => {
  test.describe(multiselect ? "Multiple" : "Single", () => {
    test("Renders accessibly", async ({ mount, a11y, page, getByExactText }) => {
      await mount(ComboboxFieldTest, { props: { multiselect, options: listboxOptions } });
      await a11y();

      const combobox = page.locator("[role='combobox']");
      const listbox = page.locator("[role='listbox']");

      await expect(combobox).toHaveAttribute("id", "v-2");
      await expect(combobox).toHaveAttribute("aria-haspopup", "listbox");
      await expect(combobox).toHaveAttribute("aria-autocomplete", "list");
      await expect(combobox).toHaveAttribute("aria-labelledby", "v-0 v-1");
      await expect(combobox).toHaveAttribute("aria-controls", "v-3");

      await combobox.click();

      await expect(listbox).toHaveAttribute("aria-multiselectable", `${multiselect}`);

      const optionThree = async () => await getByExactText("3", multiselect ? 1 : 0);

      await expect(await optionThree()).toHaveAttribute("aria-selected", "true");
      await expect(await optionThree()).toHaveAttribute("role", "option");
    });

    test("Can open and close", async ({ mount, page }) => {
      await mount(ComboboxFieldTest, { props: { multiselect, options: listboxOptions } });

      const combobox = page.locator("[role='combobox']");
      const listbox = page.locator("[role='listbox']");

      await combobox.click();
      await expect(listbox).toBeVisible();

      /* Outside click */
      await page.locator("label").click();
      await expect(listbox).not.toBeVisible();

      await combobox.press("Enter");
      await expect(listbox).toBeVisible();

      await combobox.press("Escape");
      await expect(listbox).not.toBeVisible();
    });

    test("Can select and deselect", async ({ mount, page, getByExactText }) => {
      await mount(ComboboxFieldTest, { props: { multiselect, options: listboxOptions } });

      const combobox = page.locator("[role='combobox']");
      const listbox = page.locator("[role='listbox']");

      await combobox.click();
      await expect(listbox).toBeVisible();

      const optionIndex = multiselect ? 1 : 0;

      const optionThree = async () => await getByExactText("3", optionIndex);
      const optionSix = async () => await getByExactText("6", optionIndex);
      const optionEight = async () => await getByExactText("8", optionIndex);

      await (await getByExactText("6")).click();

      if (!multiselect) {
        await combobox.click();
      }

      await expect(await optionSix()).toHaveAttribute("aria-selected", "true");
      await expect(await optionThree()).toHaveAttribute("aria-selected", `${multiselect}`);

      await (await getByExactText("8")).click();

      if (!multiselect) {
        await combobox.click();
      }
      await expect(await optionEight()).toHaveAttribute("aria-selected", "true");
    });

    test("Can filter options", async ({ mount, page }) => {
      await mount(ComboboxFieldTest, { props: { multiselect, options: listboxOptions } });

      const combobox = page.locator("[role='combobox']");
      const options = page.locator("[role='option']");

      await combobox.click();
      await expect(options).toHaveCount(13);

      await combobox.press("1");
      await expect(options).toHaveCount(5);
    });
  });
});

test("Can be disabled", async ({ mount, page }) => {
  await mount(ComboboxFieldTest, { props: { disabled: true, options: listboxOptions } });

  const combobox = page.locator("[role='combobox']");

  await expect(combobox).toHaveAttribute("disabled");
  await combobox.click({ force: true });
});
