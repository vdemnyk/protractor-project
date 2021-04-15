let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('#homeslider');
let loginBtnLocator = by.css('.login');


class MainPage extends WebPage {
    constructor() {
        super();
    }

    async open() {
        await super.open(browser.params.appUrl);
    }

    async waitForPageLoaded() {
        await super.waitForPageLoaded();
    }

    async navigateToLogin() {
        await this.getLoginBtnElement().click();
    }

    getBaseElement() {
        return element(baseElementLocator); // todo <- create a web view element class
    }

    getLoginBtnElement() {
        return new WebButton(element(loginBtnLocator), "Login Button");
    }    
}

module.exports = new MainPage();