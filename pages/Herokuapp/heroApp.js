import { UIActions } from '../../utility/UIActions.js'

export class HeroApp {
  constructor(page) {
    this.page = page;
    this.ui = new UIActions(page); // created object of utility class

    // defined locators of different example pages
    this.basicAuthExample = page.getByRole("link", { name: "Basic Auth" });
    this.checkboxesExample = page.getByRole("link", { name: "Checkboxes" });
    this.contextMenuExample = page.getByRole("link", { name: "Context Menu" });
    this.contextMenuSpot = page.locator("#hot-spot");
    this.digestAuthExample = page.getByRole("link", { name: "Digest Authentication" });
    this.dissappearingExample = page.getByRole("link", { name: "Disappearing Elements" });
    this.dissappearingElements = page.locator("ul li");
    this.dragDropExample = page.getByRole("link", { name: "Drag and Drop" });
    this.dragElementA = page.locator("#column-a");
    this.dragElementB = page.locator("#column-b");
    this.dropDownExample = page.getByRole("link", { name: "Dropdown" });
    this.dropDown = page.locator("#dropdown");
    this.dynamicControlsExample = page.getByRole("link", { name: "Dynamic Controls" });
    this.enableButton = page.getByRole("button", { name: "Enable" });
    this.disableButton = page.getByRole("button", { name: "Disable" });
    this.addButton = page.getByRole("button", { name: "Add" });
    this.removeButton = page.getByRole("button", { name: "Remove" });
    this.inputField = page.locator("#input-example input[type='text']");

    // other supporing locators
    this.paragraph = page.locator("p");
    this.textLocator = value => page.locator(`text=${value}`);;
    this.checkbox = name =>
      page.locator(`xpath=//form[@id="checkboxes"]//input[@type="checkbox" and normalize-space(following-sibling::text()[1]) = "${name}"]`);
    this.dynamicPageCheckbox = page.locator("//div[@id='checkbox']//input[@type='checkbox']");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com");
    await this.page.waitForLoadState();
    await this.page.waitForLoadState('networkidle');

  }

  // getter returns a Playwright locator when accessed
  get baseAuth() {
    return this.page.getByRole("link", { name: "Basic Auth" });
  }

  async clickOn(locatorOrSelector) {
    await this.ui.clickOn(locatorOrSelector);
    await this.page.waitForLoadState();
  }

  async checkCheckbox(name) {
    const checkbox = this.checkbox(name);
    await checkbox.waitFor({ state: 'visible' });
    let isChecked = await checkbox.isChecked();

    try {
      if (!(isChecked)) {
        await checkbox.check();
        console.log(`${name} has been checked`)
        isChecked = true

      } else {
        console.log(`${name} already checked`)
      }
    }
    catch (error) {
      console.error(`Failed to check ${name}:`, error);
    }

    return isChecked;
  }

  // Uncheck the checkbox by name
  async uncheckCheckbox(name) {
    const checkbox = this.checkbox(name);
    await checkbox.waitFor({ state: 'visible' });
    let isChecked = await checkbox.isChecked();
    if (isChecked) {
      await checkbox.uncheck();
      console.log(`${name} has been unchecked`);
      isChecked = false
    } else {
      console.log(`${name} was already unchecked`);
    }
    return isChecked;
  }

}
