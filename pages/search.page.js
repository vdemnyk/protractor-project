let WebPage = require("../base/webPage");

let { WebView } = require("../elemnets/view");
let { WebButton } = require("../elemnets/button");

let baseElementLocator = by.css('.product-listing');
let resultLocator = by.css('.heading-counter');


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
            let productLocator = by.css(`ul.product_list>:nth-of-type(${listItem}) .product-name`);
            return await new WebButton(element(productLocator), `Product #${listItem}`).click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "SearchPage Base");
    }

    getResultElement() {
        return new WebView(element(resultLocator), "Result counter");
    }
}

module.exports = new SearchPage();