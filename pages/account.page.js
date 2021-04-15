let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('.info-account');
let signoutFieldLocator = by.css('.logout');

class AccountPage extends WebPage { // todo <- exted web page and remove waitForPageLoaded
    constructor() {
        super();
    }

    async waitForPageLoaded() {
        await super.waitForPageLoaded();
    }

    async logout() {
        await this.getSignoutFieldLocator().click();
    }

    getBaseElement() {
        return element(baseElementLocator);
    }

    getSignoutFieldLocator() {
        return new WebButton(element(signoutFieldLocator), "Sign out Button");
    }
}

module.exports = new AccountPage();