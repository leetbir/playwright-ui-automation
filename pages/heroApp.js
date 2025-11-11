import {UIActions} from '../utility/UIActions.js'

export class HeroApp {
  constructor(page) {
    this.page = page;
    this.ui = new UIActions(page); // created object of utility class

    // defined locators of different example pages
    this.basicAuthExample = page.getByRole("link", { name: "Basic Auth" });
    this.checkboxesExample = page.getByRole("link", { name: "Checkboxes" });
    
    // other supporing locators
    this.paragraph = page.locator("p");
    this.textLocator = value => page.locator(`text=${value}`);
    this.checkbox = page.getByRole("checkbox");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com");
  }

  // getter returns a Playwright locator when accessed
  get baseAuth() {
    return this.page.getByRole("link", { name: "Basic Auth" });
  }

  async clickOn(locatorOrSelector) {
    await this.ui.clickOn(locatorOrSelector);
    await this.page.waitForLoadState();
  }

  checkboxByName(name) {
    return this.page.locator(
      `//form[@id="checkboxes"]//input[@type="checkbox" and following-sibling::text()[contains(normalize-space(.),"${name}")]]`
    );
  }

  async checkCheckbox(name){
    const checkbox = this.checkboxByName(name);
    await checkbox.waitFor({state: 'visible'});
    let isChecked = await checkbox.isChecked();

    try{
       if(!(isChecked))
      {
        await checkbox.check();
        console.log(`${name} has been checked`)
        isChecked=true

    }else{
      console.log(`${name} already checked`)
    }
    }
    catch(error){
       console.error(`Failed to check ${name}:`, error);
    }
   
    return isChecked;
  }


  // Uncheck the checkbox by name
  async uncheckCheckbox(name) {
    const checkbox = this.checkboxByName(name);
    await checkbox.waitFor({ state: 'visible' });
    let isChecked = await checkbox.isChecked();
    if (isChecked) {
      await checkbox.uncheck();
      console.log(`${name} has been unchecked`);
      isChecked=false
    } else {
      console.log(`${name} was already unchecked`);
    }
    return isChecked;
  }

}
