import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/ProtoShop/loginPage.js";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const csvpath = path.resolve(process.cwd(), "data", "user.csv");
const csvContent = fs.readFileSync(csvpath, { encoding: "utf8" });

const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

// Create one test per CSV row
for (const user of records) {
  // use a stable test title so Playwright can identify tests
  test(`Login test for ${user.email}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = user.email,
      password = user.password;
    const role = user.role,
      designationLabel = user.designation;
    const success = await loginPage.login(
      username,
      password,
      role,
      designationLabel
    );
    expect(success).toBeTruthy();
  });
}
