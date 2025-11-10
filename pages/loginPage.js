import { UIActions } from '../utility/UIActions.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.uiActions = new UIActions(page); // created object here once

    // locators
    this.username = page.getByRole('textbox', { name: 'Username:' })
    this.password = page.getByRole('textbox', { name: 'Password:' });

    // pass "admin" or "user" as roleValue while calling this method
    this.roleRadioButton = (roleValue) =>
      page.getByRole("radio", { name: roleValue });

    // ✅ store as selector, handled via UIActions
    this.optionDropdown = 'select.form-control';


    this.agreeCheckbox = page.getByRole("checkbox", {
      name: "I agree to the terms and conditions",
    });

    this.signInButton = page.locator("#signInBtn");
  }

  async login(username, password, role, designationLabel) {
    // navigating to login page and used login path as relative
    await this.page.goto("/loginpagePractise/");
    await this.page.waitForLoadState("domcontentloaded");

    // environment validation
    const { LOGINUSER, LOGINPASS } = process.env;
    if (!LOGINUSER || !LOGINPASS) {
      throw new Error(
        'Missing env vars: LOGINUSER and/or LOGINPASS. Check `${environment}` loading.'
      );
    }

    // entering username
    await this.username.fill(username);

    // entering password
    await this.password.fill(password);

    // selecting role admin or user
    await this.roleRadioButton(role).check();

    // selecting designation
    await this.uiActions.selectDropdown(this.optionDropdown, { label: designationLabel });

    // tick mark agreement checkbox
    await this.agreeCheckbox.check();

    // click on sign in button
    await this.signInButton.click();

    let atShopPage = false;

    try {

      await this.page.waitForURL(/shop/, { timeout: 5000 });
      atShopPage = true;
    }
    catch (_) {
      atShopPage = false;

    }

    if (atShopPage) {
      console.log("Login Successful - Navigated to Shop Page");
      return true;
    } else {
      console.log("Login Failed - Did not Navigate to Shop Page");
      return false;

    }

  }
}
