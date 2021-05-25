let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");
let { WebTextInput } = require("../elemnets/textInput");

let baseElementLocator = by.css('#cart_title');
let quantityFieldLocator = by.css('.cart_quantity_input');
let quantityValueLocator = by.css('.cart_quantity :first-child[value="2"]');
let checkoutButtonLocator = by.css('.cart_navigation [title="Proceed to checkout"]');
let checkoutButtonLocator2 = by.css('[name="processAddress"]');


class CartPage extends WebPage {
    constructor() {
        super();
    }

    async typeQuantity(number) {
        await allure.createStep(`Clear "Qty" field, type ${number} in "Qty" field`, async () => {
            await this.getQuantityFieldElement().clear();
            await this.getQuantityFieldElement().sendKeys(number);
        })();   
    }

    async checkQuantity() {
        await this.getQuantityValueElement().waitForPresent();
        return await this.getQuantityValueElement().isPresent();
    }

    async clickCheckoutTwice() {
        await allure.createStep('Click on "Proceed to checkout" button twice', async () => {
            await this.getCheckoutElement().click();
            await this.getCheckoutElement2().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "CartPage Base");
    }

    getQuantityFieldElement() {
        return new WebTextInput(element(quantityFieldLocator), "Quantity Field");
    }

    getQuantityValueElement() {
        return new WebView(element(quantityValueLocator), "Quantity Value");
    }

    getCheckoutElement() {
        return new WebButton(element(checkoutButtonLocator), "Proceed to checkout Button");
    }

    getCheckoutElement2() {
        return new WebButton(element(checkoutButtonLocator2), "Proceed to checkout Button");
    }
}

module.exports = new CartPage();