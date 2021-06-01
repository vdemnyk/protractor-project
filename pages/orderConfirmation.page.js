let WebPage = require("../base/webPage");

let { WebView } = require("../elements/view");

let baseElementLocator = by.css('div.order-confirmation');


class OrderConfirmationPage extends WebPage {
    constructor() {
        super();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "OrderConfirmationPage Base");
    }
}

module.exports = new OrderConfirmationPage();