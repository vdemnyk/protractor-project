const mainPage = require('../pages/main.page');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');

const Chance = require('chance');
let chance = new Chance();
let randomEmail = chance.email();


describe('Verification of account creation:', () => {
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

    // Boundary Value Analysis
    it('Check alert is displayed for postcode field with 13 characters set', async () => {
      await registerPage.typePostcode('1234567890123');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(true);
    });
    it('Check alert is not displayed for postcode field with 12 characters set', async () => {
      await registerPage.typePostcode('123456789012');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(false);
    });
    it('Check alert is not displayed for postcode field with 11 characters set', async () => {
      await registerPage.typePostcode('12345678901');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(false);
    });
    it('Check alert is not displayed for postcode field with 6 characters set', async () => {
      await registerPage.typePostcode('123456');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(false);
    });
    it('Check alert is not displayed for postcode field with 5 characters set', async () => {
      await registerPage.typePostcode('12345');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(false);
    });
    it('Check alert is displayed for postcode field with 4 characters set', async () => {
      await registerPage.typePostcode('1234');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(true);
    });

    // Equivalence Class Partitioning
    it('Check alert is displayed for postcode field with 1 characters set', async () => {
      await registerPage.typePostcode('1');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(true);
    });
    it('Check alert is displayed for postcode field with 7 characters set', async () => {
      await registerPage.typePostcode('1234567');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(false);
    });
    it('Check alert is displayed for postcode field with 15 characters set', async () => {
      await registerPage.typePostcode('123456789012345');
      await registerPage.clickRegister();
      expect(await registerPage.alertPostcodeIsVisible()).toBe(true);
    });
});