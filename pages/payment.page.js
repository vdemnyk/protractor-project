let WebPage = require("../base/webPage");

let { WebView } = require("../elemnets/view");
let { WebButton } = require("../elemnets/button");

let baseElementLocator = by.css('#HOOK_PAYMENT');
let payByCheckButtonLocator = by.css('.cheque');


class PaymentPage extends WebPage {
    constructor() {
        super();
    }

    async clickPayByCheck() {
        await allure.createStep('Click on "Pay by check" button', async () => {
            await this.getPayByCheckElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "PaymentPage Base");
    }

    getPayByCheckElement() {
        return new WebButton(element(payByCheckButtonLocator), "Pay by check Button");
    }
}

module.exports = new PaymentPage();