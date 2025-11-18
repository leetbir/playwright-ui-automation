
import { test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

test('Navigate to Base URL', async ({ page }) => {
  console.log("Base URL is: " + process.env.BASE_URL);
  await page.goto(process.env.BASE_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Selenium, API Testing, Software Testing & More QA Tutorials  | Rahul Shetty Academy/);
});

test('Verify successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const username = process.env.LOGINUSER, password = process.env.LOGINPASS;
  const role = 'admin', designationLabel = 'Student';
  const success = await loginPage.login(username,password,role,designationLabel);
  expect(success).toBeTruthy();
});


