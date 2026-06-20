import { expect } from "@playwright/experimental-ct-vue";
import { test } from "../../../../playwright/extension";

import ButtonTest from "./Button.test.vue";

test("Renders accessibly", async ({ mount, a11y }) => {
  const component = await mount(ButtonTest);
  await expect(component).toContainText("Button");
  await a11y();
});
