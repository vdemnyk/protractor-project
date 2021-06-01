let WebPage = require("../base/webPage");

let { WebButton } = require("../elements/button");
let { WebView } = require("../elements/view");
let { WebTextInput } = require("../elements/textInput");

let baseElementLocator = by.css('#cart_title');
let quantityFieldLocator = by.css('.cart_quantity_input');
let quantityValueLocator = by.css('.cart_quantity :first-child[value="2"]');
let checkoutButtonLocator = by.css('.cart_navigation [title="Proceed to checkout"]');
let checkoutButtonLocator2 = by.css('[name="processAddress"]');
let listItemLocator = by.css('tbody>tr');
let lastItemDeleteLocator = by.css('tr.last_item .cart_delete');
let logoBlockLocator = by.css('#header_logo');


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
        return await this.getQuantityValueElement().isPresent();
    }

    async clickCheckoutTwice() {
        await allure.createStep('Click on "Proceed to checkout" button twice', async () => {
            await this.getCheckoutElement().click();
            await this.getCheckoutElement2().click();
        })();
    }

    async checkListItem() {
        await browser.sleep(3000);
        return await this.getListItemElement().count();
    }

    async deleteLastItem() {
        await allure.createStep('Click on trash icon for the last item in list', async () => {
            await this.getLastItemDeleteElement().click();
        })();
    }

    async clickLogo() {
        await allure.createStep('Click on logo', async () => {
            await this.getLogoBlockElement().click();
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

    getListItemElement() {
        return new WebView(element.all(listItemLocator), "Product items in list");
    }

    getLastItemDeleteElement() {
        return new WebButton(element(lastItemDeleteLocator), "Delete Button for the last item in list");
    }

    getLogoBlockElement() {
        return new WebButton(element(logoBlockLocator), "Logo Block");
    }
}

module.exports = new CartPage();