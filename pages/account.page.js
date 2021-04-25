let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('.info-account');
let signoutFieldLocator = by.css('.logout');

class AccountPage extends WebPage {
    constructor() {
        super();
    }

    async logout() {
        await allure.createStep('Click "Sign out" button', async () => {
            await this.getSignoutFieldLocator().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "AccountPage Base");
    }

    getSignoutFieldLocator() {
        return new WebButton(element(signoutFieldLocator), "Sign out Button");
    }
}

module.exports = new AccountPage();