let WebPage = require("../base/webPage");

let { WebButton } = require("../elements/button");
let { WebView } = require("../elements/view");

let baseElementLocator = by.css('.content_scene_cat');
let listButtonLocator = by.css('#list');
let addToCartButtonLocator = by.css('.ajax_add_to_cart_button');
let cartModalWindowLocator = by.css('#layer_cart[style*="display: block"]');
let checkoutButtonLocator = by.css('[title="Proceed to checkout"]');


class CategoryPage extends WebPage {
    constructor() {
        super();
    }

    async clickListView() {
        await allure.createStep('Click on "List" view button', async () => {
            await this.getListElement().click();
        })();
    }

    async clickAddToCart() {
        await allure.createStep('Click on "Add to cart" button', async () => {
            await this.getAddToCartElement().click();
        })();
    }

    async cartModalWindowIsOpened() {
        await this.getCartModalWindowElement().waitForVisible(20000);
    }

    async clickCheckout() {
        await allure.createStep('Click on "Proceed to checkout" button', async () => {
            await this.getCheckoutElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "CategoryPage Base");
    }

    getListElement() {
        return new WebButton(element(listButtonLocator), "List view Button");
    }

    getAddToCartElement() {
        return new WebButton(element(addToCartButtonLocator), "Add to cart Button");
    }

    getCartModalWindowElement() {
        return new WebView(element(cartModalWindowLocator), '"Product successfully added to your shopping cart" Modal Window');
    }

    getCheckoutElement() {
        return new WebButton(element(checkoutButtonLocator), "Proceed to checkout Button");
    }
}

module.exports = new CategoryPage();