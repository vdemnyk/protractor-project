const MainPage = require('.//pages/main.page');
const LoginPage = require('.//pages/login.page');
const AccountPage = require('.//pages/account.page');

describe('Login functionality:', function(){
  it('Successful login', async function(){
    MainPage.open();
    MainPage.waitForPageLoaded();
    MainPage.navigateToLogin();

    LoginPage.waitForPageLoaded();
    LoginPage.typeEmail();
    LoginPage.typePassword(browser.params.password);
    LoginPage.navigateToAccount();

    AccountPage.waitForPageLoaded();
    AccountPage.logout();
    LoginPage.waitForPageLoaded();
  });

  it('Unsuccessful login', async function(){
    MainPage.open();
    MainPage.waitForPageLoaded();
    MainPage.navigateToLogin();

    LoginPage.waitForPageLoaded();

    LoginPage.typeEmail();
    LoginPage.typePassword(browser.params.wrongPassword);
    LoginPage.navigateToAccount();
    LoginPage.alertIsVisible();
  });
});