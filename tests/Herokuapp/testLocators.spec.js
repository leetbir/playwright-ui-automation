import { test, expect } from "../../fixtures/PomFixture.js";

test.describe("Internet Herokuapp tests", () => {
  // Runs once before all tests in this describe block
  // test.beforeAll(async () => {
  //   console.log("⚙️ Starting Internet Herokuapp test suite...");
  // });

  test.beforeEach(async ({ heroPageContext }) => {
    await heroPageContext.goto();
  });

  test("TC1: Basic Auth pop-up box", async ({ heroPageContext }) => {
    await heroPageContext.clickOn(heroPageContext.basicAuthExample);

    await expect(heroPageContext.paragraph).toContainText(
      "Congratulations! You must have the proper credentials."
    );
  });

  test("TC2:Checkboxes:check and uncheck", async ({ heroPageContext }) => {

    await heroPageContext.clickOn(heroPageContext.checkboxesExample);

    const state = await heroPageContext.checkCheckbox("checkbox 1");
    console.log("checkbox state:", state);

    // Assertion belongs here (test layer)
    expect(state).toBe(true);

    const aftestate = await heroPageContext.uncheckCheckbox("checkbox 1");
    console.log("Final checkbox state:", aftestate);
    expect(aftestate).toBe(false);

  });

  test("TC3: Context Menu right click", async ({ heroPageContext }) => {

    await heroPageContext.clickOn(heroPageContext.contextMenuExample);
    let dialogMessage = "";
    heroPageContext.page.on('dialog', async dialog => {
      dialogMessage = dialog.message();
      console.log(`Dialog message: ${dialogMessage}`);
      await dialog.accept();
    }
    );
    // right click on the context menu spot
    // await page.click(heroPage.contextMenuSpot, { button: "right" });
    await heroPageContext.contextMenuSpot.click({ button: "right" });

    // Assertion for dialog message
    // to contains work on locator object but not on string variable
    expect(dialogMessage).toBe("You selected a context menu");
  });

  test("TC4: digest authentication", async ({ heroPageContext }) => {
    await heroPageContext.clickOn(heroPageContext.digestAuthExample);

    await expect(heroPageContext.paragraph).toContainText(
      "Congratulations! You must have the proper credentials."
    );
  });

  test("TC5: Disappearing Elements", async ({ heroPageContext }) => {
    await heroPageContext.clickOn(heroPageContext.dissappearingExample);
    const initial = await heroPageContext.dissappearingElements.count();
    console.log("Number of elements:", initial);
    expect(initial).toBeGreaterThanOrEqual(3);

    for (let i = 0; i < 3; i++) {
      await heroPageContext.page.reload();
      const updated = await heroPageContext.dissappearingElements.count();
      console.log(`Reload ${i + 1}: Number of elements:`, updated);
      if (updated !== initial) {
        break;
      }
    }
  });

  test("TC6: Drag and Drop", async ({ heroPageContext }) => {
    await heroPageContext.clickOn(heroPageContext.dragDropExample);

    const boxA = heroPageContext.dragElementA;
    const boxB = heroPageContext.dragElementB;
    const boxATextBefore = await boxA.textContent();
    const boxBTextBefore = await boxB.textContent();
    console.log("Before Drag and Drop:", boxATextBefore, boxBTextBefore);

    // Perform drag and drop
    await boxA.dragTo(boxB);
    const boxATextAfter = await boxA.textContent();
    const boxBTextAfter = await boxB.textContent();
    console.log("After Drag and Drop:", boxATextAfter, boxBTextAfter);
    expect(boxATextAfter).toBe(boxBTextBefore);
    expect(boxBTextAfter).toBe(boxATextBefore);
  });

  test('TC7: Drop-Down Selection', async ({ heroPageContext }) => {
    await heroPageContext.clickOn(heroPageContext.dropDownExample);
    // by value
    await heroPageContext.dropDown.selectOption('2');
    await expect(heroPageContext.dropDown).toHaveValue('2');
    // by visisble text
    await heroPageContext.dropDown.selectOption({ label: 'Option 1' });
    await expect(heroPageContext.dropDown).toHaveValue('1');
    // by index
    await heroPageContext.dropDown.selectOption({ index: 2 });
    await expect(heroPageContext.dropDown).toHaveValue('2');


  });

});

