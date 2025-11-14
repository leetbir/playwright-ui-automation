import { test, expect } from "../fixtures/PomFixture.js";

test.describe("Internet Herokuapp tests", () => {
  // Runs once before all tests in this describe block
  test.beforeAll(async () => {
    console.log("⚙️ Starting Internet Herokuapp test suite...");
  });

  test("TC1: Basic Auth pop-up box", async ({ heroPageContext }) => {
    // navigate first
    await heroPageContext.goto();

    await heroPageContext.clickOn(heroPageContext.basicAuthExample);

    await expect(heroPageContext.paragraph).toContainText(
      "Congratulations! You must have the proper credentials."
    );
  });

  test("TC2:Checkboxes:check and uncheck", async ({ page, heroPage }) => {
    await heroPage.goto();
    await heroPage.clickOn(heroPage.checkboxesExample);

    const state = await heroPage.checkCheckbox("checkbox 1");
    console.log("checkbox state:", state);

    // Assertion belongs here (test layer)
    expect(state).toBe(true);

    const aftestate = await heroPage.uncheckCheckbox("checkbox 1");
    console.log("Final checkbox state:", aftestate);
    expect(aftestate).toBe(false);

  });
});
