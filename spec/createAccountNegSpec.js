const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');

const Chance = require('chance');
let chance = new Chance();
let randomEmail = chance.email();


describe('Create account:', () => {
    it('Create account - negative', async () => {
      await mainPage.open();
      await mainPage.waitForPageLoaded();
      await mainPage.navigateToLogin();
  
      await loginPage.waitForPageLoaded();
      await loginPage.typeEmailSignup(browser.params.email);
      await loginPage.clickCreateAccount();
      expect(await loginPage.alertSignupIsVisible()).toBe(true);
      expect(await loginPage.checkAlertSignupText()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
      await loginPage.clearEmailSignup();
      await loginPage.typeEmailSignup(randomEmail);
      await loginPage.clickCreateAccount();

      await registerPage.waitForPageLoaded();
      await registerPage.typeNameAndPassword('Max','Brown','password123');
      await registerPage.typeAddressData('Main street, 235633','Tbilisi','12345678901234','Georgia');
      await registerPage.typePhone('+00000000');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(true);
      expect(await registerPage.checkAlertPostcodeText()).toEqual('There are 2 errors\npostcode is too long. Maximum length: 12\nThe Zip/Postal code you\'ve entered is invalid. It must follow this format: 00000');
    });
});