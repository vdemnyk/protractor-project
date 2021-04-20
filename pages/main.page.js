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

    async navigateToLogin() {
        await this.getLoginBtnElement().click();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "MainPage Base");
    }

    getLoginBtnElement() {
        return new WebButton(element(loginBtnLocator), "Login Button");
    }    
}

module.exports = new MainPage();