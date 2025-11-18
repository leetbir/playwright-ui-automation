
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import users from '../../data/user.json' assert { type: 'json' };


for (const user of users) {
  test(`Verify successful login on ${user.designation}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = user.email, password = user.password;
    const role = user.role, designationLabel = user.designation;
    const success = await loginPage.login(username, password, role, designationLabel);
    expect(success).toBeTruthy();
  });

}

