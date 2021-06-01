let WebPage = require("../base/webPage");

let { WebView } = require("../elements/view");
let { WebButton } = require("../elements/button");

let baseElementLocator = by.css('.cheque-box');
let confirmOrderButtonLocator = by.xpath('//button/span[contains(text(), "confirm")]');


class CheckPaymentPage extends WebPage {
    constructor() {
        super();
    }

    async clickConfirmOrder() {
        await allure.createStep('Click on "I confirm my order" button', async () => {
            await this.getConfirmOrderElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "CheckPaymentPage Base");
    }

    getConfirmOrderElement() {
        return new WebButton(element(confirmOrderButtonLocator), "I confirm my order Button");
    }
}

module.exports = new CheckPaymentPage();