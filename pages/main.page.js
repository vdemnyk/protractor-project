let WebPage = require("../base/webPage");

let { WebButton } = require("../elements/button");
let { WebView } = require("../elements/view");
let { WebTextInput } = require("../elements/textInput");

let baseElementLocator = by.css('#homeslider');
let loginBtnLocator = by.css('.login');
let searchFieldLocator = by.css('#search_query_top');
let searchBtnLocator = by.css('[name="submit_search"]');
let productBlockLocator = by.css('#homefeatured>li:nth-of-type(index) .product-container');
let addToCartBtnLocator = by.css('#homefeatured>li:nth-of-type(index) .ajax_add_to_cart_button');
let cartModalWindowLocator = by.css('#layer_cart[style*="display: block"]');
let crossBtnLocator = by.css('.cross');
let cartBlockLocator = by.css('.shopping_cart>a');
let cartPopupLocator = by.css('div.cart_block[style*="display: block"]');
let productQuantityLocator = by.css('.products>dt');
let firstItemCrossLocator = by.css('.first_item .remove_link');
let cartQuantityLocator = by.css('a>.ajax_cart_quantity');
let contactUsLinkLocator = by.css('ul>li>[title="Contact us"]');


class MainPage extends WebPage {
    constructor() {
        super();
    }

    async open() {
        await allure.createStep('Open main page', async () => {
            await super.open(browser.params.appUrl);
        })();
    }

    async navigateToLogin() {
        await allure.createStep('Open login page', async () => {
            await this.getLoginBtnElement().click();
        })();
    }

    async search(word) {
        await allure.createStep(`Type ${word} in search field`, async () => {
            await this.getSearchFieldElement().sendKeys(word);
        })();

        await allure.createStep('Click search button', async () => {
            await this.getSearchBtnElement().click();
        })();
    }

    async addToCart(number) {
        await allure.createStep(`Click on "Add to cart" button #${number}, click on cross button`, async () => {
            await this.getProductBlockElement(number).mouseHover();
            await this.getAddToCartBtnElement(number).click();
            await this.getCartModalWindowElement().waitForVisible(20000);
            await this.getCrossBtnElement().click();
        })();
    }

    async hoverCart() {
        await this.getCartBlockElement().mouseHover();
    }

    async cartPopupIsOpened() {
        await this.getCartPopupElement().waitForVisible();
    }

    async checkProductQuantity() {
        await browser.sleep(5000);
        return await this.getProductQuantityElement().count();
    }

    async deleteFirstCartItem() {
        await this.getFirstItemCrossElement().click();
    }

    async clickCart() {
        await allure.createStep('Click on "Cart" button', async () => {
            await this.getCartBtnElement().click();
        })();
    }

    async checkCartQuantity() {
        return await this.getCartQuantityElement().getText();
    }

    async clickContactUs() {
        await allure.createStep('Click on "Contact Us" link', async () => {
            await this.getContactUsLinkElement().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "MainPage Base");
    }

    getLoginBtnElement() {
        return new WebButton(element(loginBtnLocator), "Login Button");
    }    

    getSearchFieldElement() {
        return new WebTextInput(element(searchFieldLocator), "Search");
    }

    getSearchBtnElement() {
        return new WebButton(element(searchBtnLocator), "Search Button");
    }

    getAddToCartBtnElement(number) {
        let numberOfCartButton = Object.assign({}, addToCartBtnLocator);
        numberOfCartButton.value = numberOfCartButton.value.replace("index", number);
        return new WebButton(element(numberOfCartButton), `Add to cart Button #${number}`);
    }

    getCartModalWindowElement() {
        return new WebView(element(cartModalWindowLocator), '"Product successfully added to your shopping cart" Modal Window');
    }

    getCrossBtnElement() {
        return new WebButton(element(crossBtnLocator), "Cross Button");
    }

    getProductBlockElement(number) {
        let numberOfProduct = Object.assign({}, productBlockLocator);
        numberOfProduct.value = numberOfProduct.value.replace("index", number);
        return new WebButton(element(numberOfProduct), `Product Block #${number}`);
    }

    getCartBlockElement() {
        return new WebView(element(cartBlockLocator), "Cart Block");
    }

    getCartPopupElement() {
        return new WebView(element(cartPopupLocator), "Cart Popup");
    }

    getProductQuantityElement() {
        return new WebView(element.all(productQuantityLocator), "Product quantity in cart");
    }

    getFirstItemCrossElement() {
        return new WebView(element(firstItemCrossLocator), "Cross button for the 1st item in cart");
    }

    getCartBtnElement() {
        return new WebButton(element(cartBlockLocator), "Cart Button");
    }

    getCartQuantityElement() {
        return new WebView(element(cartQuantityLocator), "Product quantity on Cart block");
    }

    getContactUsLinkElement() {
        return new WebButton(element(contactUsLinkLocator), "Contact Us Link");
    }
}

module.exports = new MainPage();