let WebPage = require("../base/webPage");

let { WebView } = require("../elements/view");
let { WebButton } = require("../elements/button");
let { WebCheckbox } = require("../elements/checkbox");

let baseElementLocator = by.css('#carrier_area');
let termsCheckboxLocator = by.css('#cgv');
let checkoutButtonLocator = by.css('[name="processCarrier"]');


class ShippingPage extends WebPage {
    constructor() {
        super();
    }

    async checkTermsCheckbox() {
        await allure.createStep('Check terms of service checkbox', async () => {
            await this.getTermsCheckboxElement().check();
        })();   
    }

    async unCheckTermsCheckbox() {
        await allure.createStep('Uncheck terms of service checkbox', async () => {
            await this.getTermsCheckboxElement().uncheck();
        })();   
    }

    async clickCheckout() {
        await allure.createStep('Click on "Proceed to checkout" button', async () => {
            await this.getCheckoutElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "ShippingPage Base");
    }

    getTermsCheckboxElement() {
        return new WebCheckbox(element(termsCheckboxLocator), "Terms of service Checkbox");
    }

    getCheckoutElement() {
        return new WebButton(element(checkoutButtonLocator), "Proceed to checkout Button");
    }
}

module.exports = new ShippingPage();