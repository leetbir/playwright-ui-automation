import {test as baseTest} from '@playwright/test';

import {HeroApp} from "../pages/heroApp.js";
import { LoginPage } from "../pages/loginPage.js";

// fixture file that creates the object of each page class
// loginPage and heroPage are fixture names

const testPage = baseTest.extend({
    // baseTest is alias
    // create LoginPage instance for each test
    loginPage: async ({page},use)=>{
        await use(new LoginPage(page))
    },
    // creating first heroPage object simple one
    // no credentials
    heroPage: async({page},use)=>{
        await use(new HeroApp(page))
    },
    // another object of heroPage using httpCredentials
    // uses new context with httpCredentials
    heroPageContext: async ({ browser }, use) => {
        const context = await browser.newContext({

            httpCredentials: { username: 'admin', password: 'admin' }
        });
        const page = await context.newPage();
        const heroApp = new HeroApp(page);
        await use(heroApp);
        await context.close(); 

    }
})

// export the customized test and expect
export const test = testPage;
export const expect = testPage.expect;