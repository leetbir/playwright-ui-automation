export class UIActions {
  constructor(page) {
    this.page = page;
  }

  async selectDropdown(selector, { value, label }) {
    const dropdown = this.page.locator(selector);
    await dropdown.waitFor({ state: "visible" });
    if (value) return dropdown.selectOption(value);
    if (label) return dropdown.selectOption({ label });
    throw new Error("Provide value or label for dropdown");
  }

  async clickOn(example) {
    if (typeof example === "string") {
      const locator = this.page.locator(example);
      await locator.waitFor({ state: "visible" });
      await locator.click();
    } else {
      await example.waitFor({ state: "visible" });
      await example.click();
    }
  }


}
