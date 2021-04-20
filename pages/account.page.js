let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('.info-account');
let signoutFieldLocator = by.css('.logout');

class AccountPage extends WebPage { // todo <- exted web page and remove waitForPageLoaded
    constructor() {
        super();
    }

    async logout() {
        await this.getSignoutFieldLocator().click();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator));
    }

    getSignoutFieldLocator() {
        return new WebButton(element(signoutFieldLocator), "Sign out Button");
    }
}

module.exports = new AccountPage();