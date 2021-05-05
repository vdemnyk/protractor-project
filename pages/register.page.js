let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebTextInput } = require("../elemnets/textInput");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('#account-creation_form');
let firstNameFieldLocator = by.css('#customer_firstname');
let lastNameFieldLocator = by.css('#customer_lastname');
let passwordFieldLocator = by.css('#passwd');
let addressFieldLocator = by.css('#address1');
let cityFieldLocator = by.css('#city');
let stateDropdownLocator = by.css('#id_state');
let stateItemLocator = by.css('#id_state [value="10"]');
let postcodeFieldLocator = by.css('#postcode');
let phoneFieldLocator = by.css('#phone_mobile');
let registerBtnLocator = by.css('#submitAccount');


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

    async typeAddressData(address, city, postcode) {
        await allure.createStep(`Type ${address}, ${city}, ${postcode}; select state`, async () => {
            await this.getAddressElement().sendKeys(address);
            await this.getCityElement().sendKeys(city);
            await this.getStateDropdownElement().click();
            await this.getStateItemElement().click();
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
        return new WebButton(element(stateDropdownLocator), "State dropdown");
    }

    getStateItemElement() {
        return new WebButton(element(stateItemLocator), "State item");
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
}

module.exports = new RegisterPage();