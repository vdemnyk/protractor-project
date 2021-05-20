let WebPage = require("../base/webPage");

let { WebView } = require("../elemnets/view");
let { WebTextInput } = require("../elemnets/textInput");
let { WebButton } = require("../elemnets/button");

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

    async clickCheckout() {
        await allure.createStep('Click on "Proceed to checkout" button', async () => {
            await this.getCheckoutElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "ShippingPage Base");
    }

    getTermsCheckboxElement() {
        return new WebTextInput(element(termsCheckboxLocator), "Terms of service Checkbox");
    }

    getCheckoutElement() {
        return new WebButton(element(checkoutButtonLocator), "Proceed to checkout Button");
    }
}

module.exports = new ShippingPage();