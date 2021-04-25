const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const accountPage = require('../pages/account.page');

describe('Login functionality:', () => {
  it('Successful login', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.navigateToLogin();

    await loginPage.waitForPageLoaded();
    await loginPage.login(browser.params.email, browser.params.password);

    await accountPage.waitForPageLoaded();
    await accountPage.logout();

    await loginPage.waitForPageLoaded();
  });

  it('Unsuccessful login', async () => {
    await mainPage.open();
    await mainPage.waitForPageLoaded();
    await mainPage.navigateToLogin();

    await loginPage.waitForPageLoaded();
    await loginPage.login(browser.params.email, browser.params.wrongPassword);
    expect(await loginPage.alertIsVisible()).toBe(true);
    expect(await loginPage.checkAlertText()).toEqual('There is 1 error\nAuthentication failed.');
  });
});