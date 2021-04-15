const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const accountPage = require('../pages/account.page');

describe('Login functionality:', function(){
  it('Successful login', async function(){
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.navigateToLogin();

    await loginPage.waitForPageLoaded();
    await loginPage.typeEmail(browser.params.email); // todo < - add email value
    await loginPage.typePassword(browser.params.password);
    await loginPage.navigateToAccount();

    await accountPage.waitForPageLoaded();
    await accountPage.logout();
    await loginPage.waitForPageLoaded();
  });

  it('Unsuccessful login', async function(){
    await mainPage.open(browser.params.appUrl);
    await mainPage.waitForPageLoaded();
    await mainPage.navigateToLogin();

    await loginPage.waitForPageLoaded();
    await loginPage.typeEmail(browser.params.email); // todo < - add email value
    await loginPage.typePassword(browser.params.wrongPassword);
    await loginPage.navigateToAccount();
    await loginPage.alertIsVisible();  // todo < - add expect to check if it true
  });
});