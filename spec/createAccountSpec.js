const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');
const accountPage = require('../pages/account.page');

const Chance = require('chance');
let chance = new Chance();
let randomEmail = chance.email();


describe('Create account:', () => {
    it('Create account - successful', async () => {
      await mainPage.open();
      await mainPage.waitForPageLoaded();
      await mainPage.navigateToLogin();
  
      await loginPage.waitForPageLoaded();
      await loginPage.typeEmailSignup(randomEmail);
      await loginPage.clickCreateAccount();

      await registerPage.waitForPageLoaded();
      await registerPage.typeFirstName('Max');
      await registerPage.typeLastName('Brown');
      await registerPage.typePassword('password123');
      await registerPage.typeAddress('Main street, 235633');
      await registerPage.typeCity('Tbilisi');
      await registerPage.selectState();
      await registerPage.typePostcode('12345');
      await registerPage.typePhone('+00000000');
      await registerPage.clickRegister();

      await accountPage.waitForPageLoaded();
    });
});