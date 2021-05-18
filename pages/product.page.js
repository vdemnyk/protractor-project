let WebPage = require("../base/webPage");

let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('#buy_block');
let productNameLocator = by.css('[itemprop="name"]');


class ProductPage extends WebPage {
    constructor() {
        super();
    }

    async checkProductName() {
        return await this.getProductNameElement().getText();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "ProductPage Base");
    }

    getProductNameElement() {
        return new WebView(element(productNameLocator), "Product title");
    }
}

module.exports = new ProductPage();