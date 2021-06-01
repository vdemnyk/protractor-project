let WebPage = require("../base/webPage");

let { WebView } = require("../elements/view");
let { WebButton } = require("../elements/button");

let baseElementLocator = by.css('.product-listing');
let resultLocator = by.css('.heading-counter');
let productLocator = by.css('ul.product_list>:nth-of-type(index) .product-name');


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
        return parseInt(await this.getResultElement().getText());
    }

    async clickOnProduct(listItem) {
        await allure.createStep(`Click on the product #${listItem} in the list`, async () => {
            await this.getProductItemElement(listItem).click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "SearchPage Base");
    }

    getResultElement() {
        return new WebView(element(resultLocator), "Result counter");
    }

    getProductItemElement(listItem) {
        let itemLocator = Object.assign({}, productLocator);
        itemLocator.value = itemLocator.value.replace("index", listItem);
        return new WebButton(element(itemLocator), `Result item #${listItem}`);
    }
}

module.exports = new SearchPage();