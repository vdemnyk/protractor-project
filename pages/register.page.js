let WebPage = require("../base/webPage");

let { WebButton } = require("../elements/button");
let { WebTextInput } = require("../elements/textInput");
let { WebView } = require("../elements/view");
let { WebSelect } = require("../elements/select");

let baseElementLocator = by.css('#account-creation_form');
let firstNameFieldLocator = by.css('#customer_firstname');
let lastNameFieldLocator = by.css('#customer_lastname');
let passwordFieldLocator = by.css('#passwd');
let addressFieldLocator = by.css('#address1');
let cityFieldLocator = by.css('#city');
let stateDropdownLocator = by.css('#uniform-id_state');
let postcodeFieldLocator = by.css('#postcode');
let phoneFieldLocator = by.css('#phone_mobile');
let registerBtnLocator = by.css('#submitAccount');
let alertPostcodeLocator = by.css('.alert');


class RegisterPage extends WebPage {
    constructor() {
        super();
    }

    async typeNameAndPassword(firstName, lastName, password) {
        await allure.createStep(`Type ${firstName}, ${lastName}, ${password}`, async () => {
            await this.getFirstNameElement().sendKeys(firstName);
            await this.getLastNameElement().sendKeys(lastName);
            await this.getPasswordElement().sendKeys(password);
        })();
    }

    async typePostcode(postcode) {
        await allure.createStep(`Type postcode: ${postcode}`, async () => {
            await this.getPostcodeElement().sendKeys(postcode);
        });
    }

    async typeAddressData(address, city, postcode, state) {
        await allure.createStep(`Type ${address}, ${city}, ${postcode}; select state`, async () => {
            await this.getAddressElement().sendKeys(address);
            await this.getCityElement().sendKeys(city);
            await this.getStateDropdownElement().waitForVisible();
            await this.getStateDropdownElement().selectOption(state);
            await this.getPostcodeElement().sendKeys(postcode);
        })();
    }

    async typePhone(phone) {
        await allure.createStep(`Type ${phone}`, async () => {
            await this.getPhoneElement().sendKeys(phone);
        })();
    }

    async clickRegister() {
        await allure.createStep('Click "Register" button', async () => {
            await this.getRegisterElement().click();
        })();
    }

    async alertPostcodeIsVisible() {
        return await this.getAlertPostcodeBlock().isDisplayed(); 
    }

    async checkAlertPostcodeText() {
        return await this.getAlertPostcodeBlock().getText();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "RegisterPage Base");
    }

    getFirstNameElement() {
        return new WebTextInput(element(firstNameFieldLocator), "First name field");
    }

    getLastNameElement() {
        return new WebTextInput(element(lastNameFieldLocator), "Last name field");
    }

    getPasswordElement() {
        return new WebTextInput(element(passwordFieldLocator), "Password field");
    }

    getAddressElement() {
        return new WebTextInput(element(addressFieldLocator), "Address field");
    }

    getCityElement() {
        return new WebTextInput(element(cityFieldLocator), "City field");
    }

    getStateDropdownElement() {
        return new WebSelect(element(stateDropdownLocator), "State dropdown");
    }

    getPostcodeElement() {
        return new WebTextInput(element(postcodeFieldLocator), "Postcode field");
    }
    
    getPhoneElement() {
        return new WebTextInput(element(phoneFieldLocator), "Phone field");
    }

    getRegisterElement() {
        return new WebButton(element(registerBtnLocator), "Register button");
    }

    getAlertPostcodeBlock() {
        return new WebView(element(alertPostcodeLocator), "Alert (postcode) element");
    }
}

module.exports = new RegisterPage();