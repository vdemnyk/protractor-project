let WebPage = require("../base/webPage");

let { WebButton } = require("../elemnets/button");
let { WebView } = require("../elemnets/view");

let baseElementLocator = by.css('.info-account');
let signoutFieldLocator = by.css('.logout');
let tabLocator = by.css('#block_top_menu>ul>li>a[title="tab"]');
let tshirtTabLocator = by.css('ul.submenu-container [title="T-shirts"]');

class AccountPage extends WebPage {
    constructor() {
        super();
    }

    async logout() {
        await allure.createStep('Click "Sign out" button', async () => {
            await this.getSignoutFieldLocator().click();
        })();
    }

    async hoverTab(tab) {
        await this.getTabLocator(tab).mouseMove();
    }

    async clickTshirtLink() {
        await allure.createStep('Click on "T-shirt" link in hovered menu', async () => {
            await this.getTshirtTabLocator().waitForVisible();
            await this.getTshirtTabLocator().click();
        })();
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "AccountPage Base");
    }

    getSignoutFieldLocator() {
        return new WebButton(element(signoutFieldLocator), "Sign out Button");
    }

    getTabLocator(tab) {
        let tabForLocator = Object.assign({}, tabLocator);
        tabForLocator.value = tabForLocator.value.replace("tab", tab);
        return new WebView(element(tabForLocator), `${tab} Tab`);
    }

    getTshirtTabLocator() {
        return new WebButton(element(tshirtTabLocator), "T-shirt Tab");
    }
}

module.exports = new AccountPage();