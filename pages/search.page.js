let WebPage = require("../base/webPage");

let { WebView } = require("../elemnets/view");
let { WebButton } = require("../elemnets/button");

let baseElementLocator = by.css('.product-listing');
let resultLocator = by.css('.heading-counter');
let productLocator = by.css('ul.product_list>:first-child .product-name');


class SearchPage extends WebPage {
    constructor() {
        super();
    }

    async resultIsVisible() {
        await this.getResultElement().waitForVisible();
        return await this.getResultElement().isDisplayed(); 
    }

    async checkResultText() {
        return await this.getResultElement().getText();
    }
    
    async checkResultNumber() {
        let text = await this.getResultElement().getText();
        let number = text[0];
        return number;
    }

    async clickOnProduct() {
        await allure.createStep('Click on the first product in the list', async () => {
            await this.getProductElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "SearchPage Base");
    }

    getResultElement() {
        return new WebView(element(resultLocator), "Result counter");
    }

    getProductElement() {
        return new WebButton(element(productLocator), "First product");
    }
}

module.exports = new SearchPage();