const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const accountPage = require('../pages/account.page');

describe('Login functionality:', function(){
  it('Successful login', async function(){
    await allure.createStep('Open main page', async function(){
      await mainPage.open();
    })();

    await allure.createStep('Wait for main page loaded', async function(){
      await mainPage.waitForPageLoaded();
    })();
    
    await allure.createStep('Open login page', async function(){
      await mainPage.navigateToLogin();
    })();

    await allure.createStep('Wait for login page loaded', async function(){
      await loginPage.waitForPageLoaded();
    })();

    await allure.createStep('Type email and password, click Sign in', async function(){
      await loginPage.login(browser.params.email, browser.params.password);
    })();
    
    await allure.createStep('Wait for account page loaded', async function(){
      await accountPage.waitForPageLoaded();
    })();

    await allure.createStep('Click on Sign out', async function(){
      await accountPage.logout();
    })(); 

    await allure.createStep('Wait for login page loaded', async function(){
      await loginPage.waitForPageLoaded();
    })();
  });

  it('Unsuccessful login', async function(){
    await allure.createStep('Open main page', async function(){
      await mainPage.open();
    })();

    await allure.createStep('Wait for main page loaded', async function(){
      await mainPage.waitForPageLoaded();
    })();

    await allure.createStep('Open login page', async function(){
      await mainPage.navigateToLogin();
    })();

    await allure.createStep('Wait for login page loaded', async function(){
      await loginPage.waitForPageLoaded();
    })();

    await allure.createStep('Type email and wrong password, click Sign in', async function(){
      await loginPage.login(browser.params.email, browser.params.wrongPassword);
    })();

    await allure.createStep('Check that alert text is visible and correct', async function(){
      expect(await loginPage.alertIsVisible()).toBe(true);
      expect(await loginPage.checkAlertText()).toEqual('There is 1 error\nAuthentication failed.');
    })();
  });
});