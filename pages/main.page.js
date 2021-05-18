let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");
let { WebTextInput } = require("../elemnets/textInput");

let baseElementLocator = by.css('#homeslider');
let loginBtnLocator = by.css('.login');
let searchFieldLocator = by.css('#search_query_top');
let searchBtnLocator = by.css('[name="submit_search"]');


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
}

module.exports = new MainPage();