import { expect } from "@playwright/experimental-ct-vue";
import { test, listboxOptions } from "../../../../playwright/extension.ts";

import SelectFieldTest from "./SelectField.test.vue";

[false, true].forEach((multiselect) => {
  test.describe(multiselect ? "Multiple" : "Single", () => {
    test("Renders accessibly", async ({ mount, a11y, page, getByExactText }) => {
      await mount(SelectFieldTest, { props: { multiselect, options: listboxOptions } });
      await a11y();

      const combobox = page.locator("[role='combobox']");
      const listbox = page.locator("[role='listbox']");

      await expect(combobox).toHaveAttribute("id", "v-1");
      await expect(combobox).toHaveAttribute("aria-haspopup", "listbox");
      await expect(combobox).toHaveAttribute("aria-autocomplete", "none");
      await expect(combobox).toHaveAttribute("aria-labelledby", "v-0");
      await expect(combobox).toHaveAttribute("aria-controls", "v-2");

      await combobox.click();

      await expect(listbox).toHaveAttribute("aria-multiselectable", `${multiselect}`);

      const optionThree = async () => await getByExactText("3", 1);

      await expect(await optionThree()).toHaveAttribute("aria-selected", "true");
      await expect(await optionThree()).toHaveAttribute("role", "option");
    });
  });
});
