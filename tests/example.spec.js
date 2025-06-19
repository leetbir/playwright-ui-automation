// @ts-check
import { test, expect } from "@playwright/test";
// below line is commented as it is been added in playwright.config.js
// import dotenv from 'dotenv';
// dotenv.config(); // calling the config function to load environment variables
const url = process.env.BASE_URL + "elements";

test("T001: Verify Page has title", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/); // /DEMOQA/ is a regex to match the title
});

test.only("T002: Verify text box element checkpoints", async ({ page }) => {
  await page.goto(url);

  // Click on Elements in the left sidebar
  await page.locator("(//ul)[1]").click();
  // Click on Text Box in the Elements section
  await page.locator("text=Text Box").click();
  // check for the Text box div is visible
  await expect(page.locator('div[class*="col-md-6"]')).toBeVisible();
  await page.pause();

  // // Check if the text box element is visible
  // const textBox = page.locator('#userName');
  // await expect(textBox).toBeVisible();

  // // Check if the text box element is enabled
  // await expect(textBox).toBeEnabled();

  // // Check if the text box element has a placeholder
  // await expect(textBox).toHaveAttribute('placeholder', 'Full Name');

  // // Check if the text box element has a value
  // await expect(textBox).toHaveValue('');

  // // Check if the text box element is focused
  // await expect(textBox).not.toBeFocused();
});
